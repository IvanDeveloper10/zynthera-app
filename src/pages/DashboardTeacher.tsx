import {
  Fragment,
  useEffect,
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import { Button } from '@/components/ui/button'

import {
  useAuth,
} from '../contexts/authContext'

import {
  supabase,
} from '../lib/supabase'

import Navbar from '../components/globalComponents/Navbar';

import CreateCourseDialog from '../components/courses/CreateCourseDialog'

interface Course {
  id: string
  title: string
  short_description: string
  image_url: string | null
  category: string
  duration: string
  created_at: string
}

export default function DashboardTeacher() {
  const {
    user,
    profile,
    loading: authLoading,
  } = useAuth()

  const [
    createCourseOpen,
    setCreateCourseOpen,
  ] = useState(false)

  const [
    courses,
    setCourses,
  ] = useState<Course[]>([])

  const [
    coursesLoading,
    setCoursesLoading,
  ] = useState(true)

  const [
    coursesError,
    setCoursesError,
  ] = useState<string | null>(null)

  const loadCourses = async () => {
    if (!user) {
      setCourses([])
      setCoursesLoading(false)
      return
    }

    setCoursesLoading(true)
    setCoursesError(null)

    try {
      const {
        data,
        error,
      } = await supabase
        .from('courses')
        .select(`
          id,
          title,
          short_description,
          image_url,
          category,
          duration,
          created_at
        `)
        .eq(
          'teacher_id',
          user.id
        )
        .order(
          'created_at',
          {
            ascending: false,
          }
        )

      if (error) {
        throw error
      }

      setCourses(
        (data ?? []) as Course[]
      )
    } catch (error) {
      console.error(
        'Error cargando cursos del profesor:',
        error
      )

      setCoursesError(
        error instanceof Error
          ? error.message
          : 'No fue posible cargar tus cursos.'
      )
    } finally {
      setCoursesLoading(false)
    }
  }

  useEffect(() => {
    if (!authLoading) {
      loadCourses()
    }
  }, [
    user,
    authLoading,
  ])

  if (authLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <i className='fi fi-rr-loading animate-spin text-2xl' />
      </div>
    )
  }

  return (
    <Fragment>
      <Navbar />
      <main className='min-h-screen bg-zinc-50 p-4 sm:p-8'>
        <div className='mx-auto max-w-7xl'>

          {/* HEADER */}
          <div className='flex flex-col justify-between gap-6 md:flex-row md:items-center'>

            <div>
              <p className='mb-2 text-sm font-medium text-zinc-500'>
                Panel del profesor
              </p>

              <h1 className='text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl'>
                Bienvenido a Zynthera{' '}
                {profile?.first_name}
              </h1>

              <p className='mt-2 text-zinc-500'>
                Administra tus cursos y contenido
                educativo desde aquí.
              </p>
            </div>

            <Button
              size='lg'
              onClick={() =>
                setCreateCourseOpen(true)
              }
              className='flex cursor-pointer items-center gap-2 active:scale-95'
            >
              <i className='fi fi-rr-add flex items-center justify-center' />
              Crear curso
            </Button>

          </div>

          {/* INFORMACIÓN DEL PROFESOR */}
          <div className='mt-8 grid gap-4 md:grid-cols-3'>

            <div className='rounded-2xl border bg-white p-6 shadow-sm'>
              <p className='text-sm text-zinc-500'>
                Usuario
              </p>

              <p className='mt-2 truncate font-medium text-zinc-900'>
                {user?.email}
              </p>
            </div>

            <div className='rounded-2xl border bg-white p-6 shadow-sm'>
              <p className='text-sm text-zinc-500'>
                Nombre
              </p>

              <p className='mt-2 font-medium text-zinc-900'>
                {profile?.first_name}{' '}
                {profile?.last_name}
              </p>
            </div>

            <div className='rounded-2xl border bg-white p-6 shadow-sm'>
              <p className='text-sm text-zinc-500'>
                Rol
              </p>

              <p className='mt-2 font-medium capitalize text-zinc-900'>
                {profile?.role}
              </p>
            </div>

          </div>

          {/* MIS CURSOS */}
          <section className='mt-10'>

            <div className='mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end'>

              <div>
                <h2 className='text-2xl font-bold text-zinc-950'>
                  Mis cursos
                </h2>

                <p className='mt-1 text-sm text-zinc-500'>
                  Aquí aparecen los cursos que
                  hayas creado.
                </p>
              </div>

              {courses.length > 0 && (
                <span className='w-fit rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-600'>
                  {courses.length}{' '}
                  {courses.length === 1
                    ? 'curso'
                    : 'cursos'}
                </span>
              )}

            </div>

            {/* ERROR */}
            {coursesError && (
              <div className='rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700'>
                <div className='flex items-start gap-3'>
                  <i className='fi fi-rr-exclamation flex items-center pt-0.5' />

                  <div>
                    <p className='font-semibold'>
                      No se pudieron cargar los cursos
                    </p>

                    <p className='mt-1 text-sm'>
                      {coursesError}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* LOADING */}
            {coursesLoading && (
              <div className='flex min-h-64 items-center justify-center rounded-2xl border bg-white'>
                <div className='text-center'>
                  <i className='fi fi-rr-loading animate-spin text-3xl text-zinc-400' />

                  <p className='mt-3 text-sm text-zinc-500'>
                    Cargando tus cursos...
                  </p>
                </div>
              </div>
            )}

            {/* SIN CURSOS */}
            {!coursesLoading &&
              !coursesError &&
              courses.length === 0 && (
                <div className='flex min-h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-zinc-200 bg-white px-6 text-center'>

                  <div className='flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100'>
                    <i className='fi fi-rr-book-alt flex items-center text-2xl text-zinc-400' />
                  </div>

                  <p className='mt-4 font-semibold text-zinc-700'>
                    Todavía no tienes cursos
                  </p>

                  <p className='mt-1 max-w-md text-sm text-zinc-500'>
                    Crea tu primer curso para
                    comenzar.
                  </p>

                  <Button
                    variant='outline'
                    className='mt-4 cursor-pointer'
                    onClick={() =>
                      setCreateCourseOpen(true)
                    }
                  >
                    <i className='fi fi-rr-add mr-2' />
                    Crear mi primer curso
                  </Button>

                </div>
              )}

            {/* CURSOS */}
            {!coursesLoading &&
              courses.length > 0 && (
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>

                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      to={`/cursos/${course.id}`}
                      className='group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
                    >

                      {/* IMAGEN */}
                      <div className='relative aspect-video overflow-hidden bg-zinc-100'>

                        {course.image_url ? (
                          <img
                            src={course.image_url}
                            alt={course.title}
                            className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                          />
                        ) : (
                          <div className='flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-100 to-zinc-50'>
                            <i className='fi fi-rr-book-alt flex items-center text-4xl text-zinc-400' />
                          </div>
                        )}

                        {/* CATEGORÍA */}
                        <div className='absolute left-3 top-3'>
                          <span className='rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-zinc-800 shadow-sm'>
                            {course.category}
                          </span>
                        </div>

                      </div>

                      {/* INFORMACIÓN */}
                      <div className='p-5'>

                        <h3 className='line-clamp-2 text-lg font-bold text-zinc-900'>
                          {course.title}
                        </h3>

                        <p className='mt-2 line-clamp-3 text-sm leading-6 text-zinc-600'>
                          {course.short_description}
                        </p>

                        <div className='mt-5 flex items-center justify-between border-t border-zinc-100 pt-4'>

                          <div className='flex items-center gap-2 text-sm text-zinc-500'>
                            <i className='fi fi-rr-clock flex items-center' />

                            <span>
                              {course.duration}
                            </span>
                          </div>

                          <span className='flex items-center gap-1 text-sm font-semibold text-zinc-900 transition-all group-hover:gap-2'>
                            Ver curso

                            <i className='fi fi-rr-arrow-right flex items-center' />
                          </span>

                        </div>

                      </div>

                    </Link>
                  ))}

                </div>
              )}

          </section>

        </div>
      </main>

      {/* MODAL CREAR CURSO */}
      <CreateCourseDialog
        open={createCourseOpen}
        onOpenChange={
          setCreateCourseOpen
        }
        onCourseCreated={loadCourses}
      />

    </Fragment>
  )
}