import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { supabase } from '../lib/supabase'
import { Button } from '@/components/ui/button'

export default function Profile() {
  const { user, profile } = useAuth()
  const navigate = useNavigate()

  const fullName = `${profile?.first_name ?? ''} ${profile?.last_name ?? ''}`.trim()

  const initials =
    `${profile?.first_name?.charAt(0) ?? ''}${profile?.last_name?.charAt(0) ?? ''}`
      .toUpperCase()

  const roleLabel =
    profile?.role === 'profesor'
      ? 'Profesor'
      : 'Estudiante'

  const roleIcon =
    profile?.role === 'profesor'
      ? 'fi-rr-chalkboard-user'
      : 'fi-rr-graduation-cap'

  const createdAt = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString(
        'es-CO',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      )
    : 'No disponible'

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/ingreso', {
      replace: true,
    })
  }

  if (!user || !profile) {
    return (
      <main className='min-h-screen flex items-center justify-center bg-zinc-50'>
        <div className='flex flex-col items-center gap-4'>
          <i className='fi fi-rr-loading animate-spin text-3xl text-purple-600' />
          <p className='text-sm text-zinc-500'>
            Cargando perfil...
          </p>
        </div>
      </main>
    )
  }

  return (
    <Fragment>
      <main className='min-h-screen bg-zinc-50 px-4 py-10 sm:px-8 lg:px-12'>

        <section className='mx-auto max-w-5xl'>

          <div className='mb-8 flex items-center justify-between'>

            <div>
              <p className='mb-2 text-sm font-semibold tracking-wide text-purple-600'>
                ZYNTHERA
              </p>

              <h1 className='text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl'>
                Mi perfil
              </h1>

              <p className='mt-2 text-zinc-500'>
                Administra y consulta tu información personal.
              </p>
            </div>

            <Link to='/'>
              <Button
                variant='outline'
                className='flex items-center gap-2 cursor-pointer'>
                <i className='fi fi-rr-arrow-left flex items-center' />
                <span className='hidden sm:inline'>
                  Volver
                </span>
              </Button>
            </Link>

          </div>

          <div className='overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm'>

            <div className='h-32 bg-zinc-800 sm:h-40' />

            <div className='px-6 pb-8 sm:px-10'>

              <div className='-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between'>

                <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-end'>

                  <div className='flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-purple-100 text-3xl font-bold text-purple-700 shadow-md sm:h-32 sm:w-32'>
                    {initials || (
                      <i className='fi fi-rr-user' />
                    )}
                  </div>

                  <div className='pb-1'>

                    <h2 className='text-2xl font-bold text-zinc-900'>
                      {fullName || 'Usuario'}
                    </h2>

                    <p className='mt-1 text-sm text-zinc-500'>
                      {user.email}
                    </p>

                  </div>

                </div>

                <div className='flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700'>

                  <i className={`fi ${roleIcon} flex items-center`} />

                  {roleLabel}

                </div>

              </div>

              <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2'>

                <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5'>

                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600'>
                    <i className='fi fi-rr-user flex items-center' />
                  </div>

                  <p className='text-xs font-medium uppercase tracking-wide text-zinc-400'>
                    Nombre
                  </p>

                  <p className='mt-1 text-base font-semibold text-zinc-900'>
                    {profile.first_name}
                  </p>

                </div>

                <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5'>

                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600'>
                    <i className='fi fi-rr-user flex items-center' />
                  </div>

                  <p className='text-xs font-medium uppercase tracking-wide text-zinc-400'>
                    Apellido
                  </p>

                  <p className='mt-1 text-base font-semibold text-zinc-900'>
                    {profile.last_name}
                  </p>

                </div>

                <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5'>

                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600'>
                    <i className='fi fi-rr-envelope flex items-center' />
                  </div>

                  <p className='text-xs font-medium uppercase tracking-wide text-zinc-400'>
                    Correo electrónico
                  </p>

                  <p className='mt-1 break-all text-base font-semibold text-zinc-900'>
                    {user.email}
                  </p>

                </div>

                <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5'>

                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600'>
                    <i className={`fi ${roleIcon} flex items-center`} />
                  </div>

                  <p className='text-xs font-medium uppercase tracking-wide text-zinc-400'>
                    Tipo de cuenta
                  </p>

                  <p className='mt-1 text-base font-semibold text-zinc-900'>
                    {roleLabel}
                  </p>

                </div>

                <div className='rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:col-span-2'>

                  <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600'>
                    <i className='fi fi-rr-calendar flex items-center' />
                  </div>

                  <p className='text-xs font-medium uppercase tracking-wide text-zinc-400'>
                    Miembro desde
                  </p>

                  <p className='mt-1 text-base font-semibold capitalize text-zinc-900'>
                    {createdAt}
                  </p>

                </div>

              </div>

              <div className='mt-6 rounded-2xl border border-zinc-200 bg-white p-5'>

                <div className='flex items-start gap-4'>

                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600'>
                    <i className='fi fi-rr-fingerprint flex items-center' />
                  </div>

                  <div className='min-w-0'>

                    <p className='text-xs font-medium uppercase tracking-wide text-zinc-400'>
                      ID de usuario
                    </p>

                    <p className='mt-1 break-all font-mono text-xs text-zinc-600'>
                      {user.id}
                    </p>

                  </div>

                </div>

              </div>

              <div className='mt-8 flex flex-col gap-3 border-t border-zinc-100 pt-8 sm:flex-row sm:justify-end'>

                <Link to='/cursos'>
                  <Button
                    variant='outline'
                    className='w-full cursor-pointer sm:w-auto'>
                    <i className='fi fi-rr-book-alt flex items-center' />
                    Mis cursos
                  </Button>
                </Link>

                <Button
                  onClick={handleLogout}
                  variant='destructive'
                  className='w-full cursor-pointer sm:w-auto'>
                  <i className='fi fi-rr-exit flex items-center' />
                  Cerrar sesión
                </Button>

              </div>

            </div>

          </div>

        </section>

      </main>
    </Fragment>
  )
}