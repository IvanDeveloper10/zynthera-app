import { Fragment, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/authContext';

interface Room {
  id: string
  code: string
  host_id: string
  status: 'waiting' | 'playing' | 'finished'
  current_question: number
}

interface Player {
  id: string
  room_id: string
  user_id: string
  ready: boolean
  score: number
  answered_question: number
  joined_at: string
  profile?: {
    first_name: string
    last_name: string
  }
}

interface Question {
  id: string
  question_number: number
  question_text: string
  option_1: string
  option_2: string
  option_3: string
  option_4: string
}

export default function QuizRoom() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [room, setRoom] = useState<Room | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [questionLoading, setQuestionLoading] = useState(false);

  const loadPlayers = useCallback(
    async (roomId: string) => {
      const { data, error } =
        await supabase
          .from('quiz_players')
          .select(`
            id,
            room_id,
            user_id,
            ready,
            score,
            answered_question,
            joined_at,
            profiles (
              first_name,
              last_name
            )
          `)
          .eq('room_id', roomId)
          .order('joined_at', {
            ascending: true,
          })

      if (error) {
        console.error(error)
        return
      }

      const formatted =
        (data ?? []).map((player: any) => ({
          ...player,
          profile: Array.isArray(player.profiles)
            ? player.profiles[0]
            : player.profiles,
        }))

      setPlayers(formatted)
    },
    []
  )

  const loadRoom = useCallback(
    async () => {
      if (!code || !user) return

      const normalizedCode =
        code.toUpperCase()

      const { data, error } =
        await supabase
          .from('quiz_rooms')
          .select('*')
          .eq('code', normalizedCode)
          .maybeSingle()

      if (error) {
        throw error
      }

      if (!data) {
        throw new Error(
          'La sala no existe.'
        )
      }

      setRoom(data)

      await loadPlayers(data.id)

      const {
  data: questionsData,
  error: questionsError,
} = await supabase
  .from('quiz_questions_public')
  .select(`
    id,
    question_number,
    question_text,
    option_1,
    option_2,
    option_3,
    option_4
  `)
  .order('question_number')

if (questionsError) {
  console.error('ERROR CARGANDO PREGUNTAS:', questionsError)
  throw questionsError
}

if (!questionsData || questionsData.length === 0) {
  throw new Error('No existen preguntas disponibles para esta partida.');
}

console.log('Preguntas cargadas:', questionsData)

setQuestions(questionsData)}, [code, user, loadPlayers])

  useEffect(() => {
    if (!user) {
      navigate('/ingreso', {
        replace: true,
      })
      return
    }

    const initialize =
      async () => {
        try {
          setLoading(true)
          await loadRoom()
        } catch (error) {
          console.error(error)

          setError(
            error instanceof Error
              ? error.message
              : 'No fue posible cargar la sala.'
          )
        } finally {
          setLoading(false)
        }
      }

    initialize()
  }, [user, navigate, loadRoom])

  useEffect(() => {
    if (!room) return

    const channel =
      supabase
        .channel(`quiz-room-${room.id}`)
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'quiz_rooms',
            filter: `id=eq.${room.id}`,
          },
          (payload) => {
            if (
              payload.eventType === 'UPDATE'
            ) {
              setRoom(
                payload.new as Room
              )
            }
          }
        )
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'quiz_players',
            filter: `room_id=eq.${room.id}`,
          },
          () => {
            loadPlayers(room.id)
          }
        )
        .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [room?.id, loadPlayers])

  const currentPlayer = players.find((player) => player.user_id === user?.id)

  const isHost = room?.host_id === user?.id
  const allReady = players.length >= 2 && players.every((player) => player.ready)

  const toggleReady = async () => {
    if (!currentPlayer) return

    const { error } =
      await supabase
        .from('quiz_players')
        .update({
          ready: !currentPlayer.ready,
        })
        .eq('id', currentPlayer.id)
        .eq('user_id', user?.id)

    if (error) {
      console.error(error)
    }
  }

  const startGame = async () => {
    if (!room || !isHost || !allReady) {
      return
    }

    const { error } =
      await supabase
        .from('quiz_rooms')
        .update({
          status: 'playing',
          current_question: 1,
          updated_at: new Date().toISOString(),
        })
        .eq('id', room.id)
        .eq('host_id', user?.id)

    if (error) {
      console.error(error)
      return
    }
  }

  const submitAnswer = async (answer: number) => {
  if (!room || !currentPlayer || answered || room.status !== 'playing' || room.current_question < 1) {
    return
  }

  setQuestionLoading(true)
  setSelectedAnswer(answer)

  try {
    const { error } =
      await supabase.rpc(
        'submit_quiz_answer',
        {
          p_room_id: room.id,
          p_player_id: currentPlayer.id,
          p_question_number: room.current_question,
          p_answer_index: answer,
        }
      )

    if (error) {
      console.error(error)
      return
    }

    setAnswered(true)
  } catch (error) {
    console.error(error)
  } finally {
    setQuestionLoading(false)
  }
}

  const nextQuestion = async () => {
    if (!room || !isHost) return

    if (
      room.current_question >= 10
    ) {
      await supabase
        .from('quiz_rooms')
        .update({
          status: 'finished',
          updated_at: new Date().toISOString(),
        })
        .eq('id', room.id)

      return
    }

    await supabase
      .from('quiz_rooms')
      .update({
        current_question: room.current_question + 1,
        updated_at: new Date().toISOString(),
      })
      .eq('id', room.id)

    setAnswered(false)
  }

  useEffect(() => {
    setSelectedAnswer(null)
    setAnswered(false)
  }, [room?.current_question])

  if (loading) {
    return (
      <main className='flex min-h-screen items-center justify-center'>
        <i className='fi fi-rr-loading animate-spin text-3xl text-purple-600' />
      </main>
    )
  }

  if (error || !room) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-zinc-50 px-4'>
        <div className='w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm'>
          <i className='fi fi-rr-exclamation flex justify-center text-4xl text-red-500' />
          <h1 className='mt-4 text-2xl font-bold'>No se pudo abrir la sala</h1>
          <p className='mt-2 text-zinc-500'>{error}</p>
          <Link to='/juegos/preguntas' className='mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white'>
            Volver
          </Link>
        </div>
      </main>
    )
  }

  if (room.status === 'finished') {
    const ranking = [...players].sort((a, b) => b.score - a.score)
    return (
      <main className='min-h-screen bg-zinc-50 px-4 py-10'>
        <div className='mx-auto max-w-3xl'>
          <div className='rounded-3xl bg-white p-8 text-center shadow-sm'>
            <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100'>
              <i className='fi fi-rr-trophy flex items-center text-5xl text-yellow-500' />
            </div>
            <h1 className='mt-6 text-4xl font-bold'>¡Partida terminada!</h1>
            <p className='mt-2 text-zinc-500'>Resultado final</p>
            <div className='mt-8 space-y-3'>
              {ranking.map(
                (player, index) => (
                  <div
                    key={player.id}
                    className='flex items-center justify-between rounded-xl border border-zinc-200 p-4'>
                    <div className='flex items-center gap-4'>
                      <span className='flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700'>
                        {index + 1}
                      </span>
                      <span className='font-semibold'>
                        {player.profile?.first_name ?? 'Jugador'}
                      </span>
                    </div>
                    <span className='font-bold text-purple-600'>
                      {player.score} pts
                    </span>
                  </div>
                )
              )}
            </div>
            <Link to='/juegos' className='mt-8 inline-block rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white'>
              Volver a juegos
            </Link>
          </div>
        </div>
      </main>
    )
  }

  if (room.status === 'waiting') {
    return (
      <main className='min-h-screen bg-zinc-50 px-4 py-10'>
        <div className='mx-auto max-w-3xl'>
          <div className='rounded-3xl bg-white p-8 shadow-sm'>
            <div className='text-center'>
              <p className='text-sm font-semibold text-purple-600'>CÓDIGO DE SALA</p>
              <div className='mt-3 text-5xl font-black tracking-[0.3em] text-zinc-900'>
                {room.code}
              </div>
              <p className='mt-3 text-zinc-500'>Comparte este código con los demás jugadores.</p>
            </div>
            <div className='mt-10'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold'>Jugadores</h2>
                <span className='rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700'>
                  {players.length} jugadores
                </span>
              </div>
              <div className='mt-4 space-y-3'>
                {players.map(
                  (player) => (
                    <div
                      key={player.id}
                      className='flex items-center justify-between rounded-xl border border-zinc-200 p-4'>
                      <div className='flex items-center gap-3'>
                        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-600'>
                          {(
                            player.profile?.first_name?.[0] ??
                            'J'
                          ).toUpperCase()}
                        </div>
                        <div>
                          <p className='font-semibold'>
                            {player.profile?.first_name ?? 'Jugador'}
                            {' '}
                            {player.profile?.last_name ?? ''}
                          </p>
                          {player.user_id === room.host_id && (
                            <p className='text-xs text-purple-600'>Anfitrión</p>
                          )}
                        </div>
                      </div>
                      <span
                        className={
                          player.ready
                            ? 'rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700'
                            : 'rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500'
                        }>
                        {player.ready
                          ? 'Listo'
                          : 'Esperando'}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className='mt-8'>
              {!isHost && (
                <button
                  type='button'
                  onClick={toggleReady}
                  className={
                    currentPlayer?.ready
                      ? 'w-full rounded-xl border-2 border-green-500 bg-green-50 py-4 font-bold text-green-700'
                      : 'w-full rounded-xl bg-purple-600 py-4 font-bold text-white hover:bg-purple-700'
                  }>
                  {currentPlayer?.ready
                    ? '✓ Estoy listo'
                    : 'Estoy listo'}
                </button>
              )}
              {isHost && (
                <button
                  type='button'
                  onClick={startGame}
                  disabled={!allReady}
                  className='w-full rounded-xl bg-purple-600 py-4 font-bold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-zinc-300'>
                  {players.length < 2
                    ? 'Esperando otro jugador...'
                    : allReady
                      ? '¡Comenzar partida!'
                      : 'Esperando jugadores...'}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }

  const currentQuestion = questions.find((question) =>
      question.question_number === room.current_question
  );

  if (!currentQuestion) {
  return (
    <main className='flex min-h-screen items-center justify-center bg-zinc-50 px-4'>
      <div className='w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm'>
        <i className='fi fi-rr-exclamation flex justify-center text-4xl text-red-500' />
        <h1 className='mt-4 text-2xl font-bold'>No se pudo cargar la pregunta</h1>
        <p className='mt-2 text-zinc-500'>
          No encontramos la pregunta número{' '}
          {room.current_question}.
        </p>
        <p className='mt-2 text-sm text-zinc-400'>Preguntas cargadas: {questions.length}</p>
        <Link
          to='/juegos/preguntas'
          className='mt-6 inline-block rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white'>
          Volver
        </Link>
      </div>
    </main>
  )
}

  const options = [
    currentQuestion.option_1,
    currentQuestion.option_2,
    currentQuestion.option_3,
    currentQuestion.option_4,
  ]

  return (
    <Fragment>
      <main className='min-h-screen bg-zinc-50 px-4 py-8'>
        <div className='mx-auto max-w-4xl'>
          <div className='mb-6 flex items-center justify-between'>
            <span className='rounded-full bg-purple-100 px-4 py-2 text-sm font-bold text-purple-700'>
              Pregunta {room.current_question}/10
            </span>
            <span className='font-bold text-zinc-700'>
              {currentPlayer?.score ?? 0} pts
            </span>
          </div>
          <div className='rounded-3xl bg-white p-8 shadow-sm sm:p-10'>
            <h1 className='text-center text-2xl font-bold leading-relaxed sm:text-3xl'>{currentQuestion.question_text}</h1>
            <div className='mt-10 grid gap-4 sm:grid-cols-2'>
              {options.map((option, index) => {
                  const optionNumber = index + 1
                  const selected = selectedAnswer === optionNumber
                  return (
                    <button
                      key={optionNumber}
                      type='button'
                      disabled={
                        answered ||
                        questionLoading
                      }
                      onClick={() =>
                        submitAnswer(
                          optionNumber
                        )
                      }
                      className={
                        selected
                          ? 'rounded-2xl border-2 border-purple-600 bg-purple-50 p-6 text-left font-semibold text-purple-700'
                          : 'rounded-2xl border-2 border-zinc-200 bg-white p-6 text-left font-semibold transition hover:border-purple-400 hover:bg-purple-50 disabled:cursor-not-allowed'
                      }
                    >
                      <span className='mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold'>
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>
                      {option}
                    </button>
                  )
                }
              )}
            </div>
            {answered && (
              <div className='mt-8 rounded-2xl bg-green-50 p-5 text-center text-green-700'>
                <i className='fi fi-rr-check flex justify-center text-2xl' />
                <p className='mt-2 font-semibold'>Respuesta enviada</p>
                <p className='mt-1 text-sm'>Espera a que el anfitrión avance.</p>
              </div>
            )}
          </div>
          {isHost && (
            <button
              type='button'
              onClick={nextQuestion}
              className='mt-6 w-full rounded-xl bg-zinc-900 py-4 font-bold text-white hover:bg-zinc-800'>
              {room.current_question >= 10
                ? 'Finalizar partida'
                : 'Siguiente pregunta'}
            </button>
          )}
        </div>
      </main>
    </Fragment>
  )
}