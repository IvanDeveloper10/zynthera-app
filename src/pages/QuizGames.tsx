import {
  Fragment,
  useState,
} from 'react'

import {
  Link,
  useNavigate,
} from 'react-router-dom'

import { supabase } from '../lib/supabase'
import { useAuth } from '../contexts/authContext'

type Mode = 'menu' | 'create' | 'join'

export default function QuizGame() {
  const navigate = useNavigate()
  const { user } = useAuth()

  const [mode, setMode] = useState<Mode>('menu')
  const [roomCode, setRoomCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const generateCode = () => {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

    let code = ''

    for (let i = 0; i < 6; i++) {
      code += characters[
        Math.floor(
          Math.random() * characters.length
        )
      ]
    }

    return code
  }

  const createRoom = async () => {
    if (!user) {
      navigate('/ingreso')
      return
    }

    setLoading(true)
    setError('')

    try {
      let createdRoom = null

      for (let attempt = 0; attempt < 5; attempt++) {
        const code = generateCode()

        const { data, error } = await supabase
          .from('quiz_rooms')
          .insert({
            code,
            host_id: user.id,
            status: 'waiting',
            current_question: 0,
          })
          .select()
          .single()

        if (!error) {
          createdRoom = data
          break
        }
      }

      if (!createdRoom) {
        throw new Error(
          'No fue posible crear la sala.'
        )
      }

      const { error: playerError } =
        await supabase
          .from('quiz_players')
          .insert({
            room_id: createdRoom.id,
            user_id: user.id,
            ready: true,
          })

      if (playerError) {
        await supabase
          .from('quiz_rooms')
          .delete()
          .eq('id', createdRoom.id)

        throw playerError
      }

      navigate(`/juegos/preguntas/sala/${createdRoom.code}`)
    } catch (error) {
      console.error(error)

      setError(
        error instanceof Error
          ? error.message
          : 'No fue posible crear la sala.'
      )
    } finally {
      setLoading(false)
    }
  }

  const joinRoom = async () => {
    if (!user) {
      navigate('/ingreso')
      return
    }

    const code = roomCode
      .trim()
      .toUpperCase()

    if (code.length !== 6) {
      setError(
        'El código de sala debe tener 6 caracteres.'
      )
      return
    }

    setLoading(true)
    setError('')

    try {
      const { data: room, error: roomError } =
        await supabase
          .from('quiz_rooms')
          .select('*')
          .eq('code', code)
          .maybeSingle()

      if (roomError) {
        throw roomError
      }

      if (!room) {
        throw new Error(
          'No existe una sala con ese código.'
        )
      }

      if (room.status !== 'waiting') {
        throw new Error(
          'Esta sala ya comenzó o terminó.'
        )
      }

      const { error: playerError } =
        await supabase
          .from('quiz_players')
          .insert({
            room_id: room.id,
            user_id: user.id,
            ready: false,
          })

      if (playerError) {
        if (
          playerError.code === '23505'
        ) {
          navigate(
            `/juegos/preguntas/sala/${room.code}`
          )
          return
        }

        throw playerError
      }

      navigate(
        `/juegos/preguntas/sala/${room.code}`
      )
    } catch (error) {
      console.error(error)

      setError(
        error instanceof Error
          ? error.message
          : 'No fue posible unirse a la sala.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <main className='min-h-screen bg-zinc-50 px-4 py-10'>

        <div className='mx-auto max-w-3xl'>

          <Link
            to='/juegos'
            className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900'
          >
            <i className='fi fi-rr-arrow-left flex items-center' />
            Volver a juegos
          </Link>

          {mode === 'menu' && (
            <div className='rounded-3xl bg-white p-8 shadow-sm sm:p-12'>

              <div className='text-center'>

                <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-100'>
                  <i className='fi fi-rr-interrogation flex items-center text-4xl text-purple-600' />
                </div>

                <h1 className='mt-6 text-4xl font-bold'>
                  Juego de Preguntas
                </h1>

                <p className='mx-auto mt-4 max-w-xl text-zinc-600'>
                  Demuestra tus conocimientos de programación
                  básica compitiendo contra otros jugadores
                  en tiempo real.
                </p>

              </div>

              <div className='mt-10 grid gap-4 sm:grid-cols-2'>

                <button
                  type='button'
                  onClick={() => setMode('create')}
                  className='rounded-2xl bg-purple-600 p-6 text-left text-white transition hover:bg-purple-700'
                >
                  <i className='fi fi-rr-plus flex items-center text-2xl' />

                  <h2 className='mt-5 text-xl font-bold'>
                    Crear sala
                  </h2>

                  <p className='mt-2 text-sm text-purple-100'>
                    Crea una partida y espera a que
                    otros jugadores se unan.
                  </p>
                </button>

                <button
                  type='button'
                  onClick={() => setMode('join')}
                  className='rounded-2xl border-2 border-zinc-200 bg-white p-6 text-left transition hover:border-purple-300 hover:bg-purple-50'
                >
                  <i className='fi fi-rr-sign-in-alt flex items-center text-2xl text-purple-600' />

                  <h2 className='mt-5 text-xl font-bold'>
                    Unirse a sala
                  </h2>

                  <p className='mt-2 text-sm text-zinc-500'>
                    Introduce el código que te dio
                    el creador de la partida.
                  </p>
                </button>

              </div>

            </div>
          )}

          {mode === 'create' && (
            <div className='rounded-3xl bg-white p-8 shadow-sm'>

              <h1 className='text-3xl font-bold'>
                Crear sala
              </h1>

              <p className='mt-2 text-zinc-600'>
                Serás el anfitrión de la partida.
              </p>

              {error && (
                <div className='mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700'>
                  {error}
                </div>
              )}

              <button
                type='button'
                onClick={createRoom}
                disabled={loading}
                className='mt-8 w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50'
              >
                {loading
                  ? 'Creando sala...'
                  : 'Crear sala'}
              </button>

              <button
                type='button'
                onClick={() => {
                  setMode('menu')
                  setError('')
                }}
                className='mt-3 w-full rounded-xl py-3 font-medium text-zinc-600 hover:bg-zinc-100'
              >
                Cancelar
              </button>

            </div>
          )}

          {mode === 'join' && (
            <div className='rounded-3xl bg-white p-8 shadow-sm'>

              <h1 className='text-3xl font-bold'>
                Unirse a sala
              </h1>

              <p className='mt-2 text-zinc-600'>
                Escribe el código de 6 caracteres.
              </p>

              {error && (
                <div className='mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-700'>
                  {error}
                </div>
              )}

              <input
                value={roomCode}
                onChange={(event) =>
                  setRoomCode(
                    event.target.value
                      .toUpperCase()
                      .replace(/[^A-Z0-9]/g, '')
                      .slice(0, 6)
                  )
                }
                placeholder='ABC123'
                maxLength={6}
                className='mt-8 w-full rounded-xl border border-zinc-300 px-4 py-4 text-center text-2xl font-bold tracking-[0.4em] outline-none focus:border-purple-500'
              />

              <button
                type='button'
                onClick={joinRoom}
                disabled={
                  loading ||
                  roomCode.length !== 6
                }
                className='mt-4 w-full rounded-xl bg-purple-600 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50'
              >
                {loading
                  ? 'Uniéndote...'
                  : 'Unirse'}
              </button>

              <button
                type='button'
                onClick={() => {
                  setMode('menu')
                  setError('')
                }}
                className='mt-3 w-full rounded-xl py-3 font-medium text-zinc-600 hover:bg-zinc-100'
              >
                Cancelar
              </button>

            </div>
          )}

        </div>

      </main>
    </Fragment>
  )
}