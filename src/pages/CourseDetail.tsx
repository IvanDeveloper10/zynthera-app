import {
  Fragment,
  useEffect,
  useState,
} from 'react'

import {
  Link,
  useParams,
} from 'react-router-dom'

import { supabase } from '../lib/supabase'

interface Course {
  id: string
  title: string
  short_description: string
  image_url: string | null
  category: string
  duration: string
}

interface Lesson {
  id: string
  course_id: string
  lesson_number: number
  title: string
  paragraph_1: string
  image_1_url: string | null
  paragraph_2: string
  image_2_url: string | null
  example_title: string
  example_1: string
  example_2: string
  example_3: string
  example_4: string
  exercise_1: string
  exercise_2: string
}

export default function CourseDetail() {
  const {
    courseId,
  } = useParams<{
    courseId: string
  }>()

  const [
    course,
    setCourse,
  ] = useState<Course | null>(null)

  const [
    lessons,
    setLessons,
  ] = useState<Lesson[]>([])

  const [
    currentLesson,
    setCurrentLesson,
  ] = useState(0)

  const [
    loading,
    setLoading,
  ] = useState(true)

  const [
    error,
    setError,
  ] = useState<string | null>(null)

  useEffect(() => {
    const loadCourse = async () => {
      if (!courseId) {
        setError(
          'Curso no encontrado.'
        )

        setLoading(false)

        return
      }

      setLoading(true)
      setError(null)

      try {
        /* ========================= */
        /* CURSO */
        /* ========================= */

        const {
          data: courseData,
          error: courseError,
        } = await supabase
          .from('courses')
          .select(`
            id,
            title,
            short_description,
            image_url,
            category,
            duration
          `)
          .eq(
            'id',
            courseId
          )
          .single()

        if (courseError) {
          throw courseError
        }

        /* ========================= */
        /* LECCIONES */
        /* ========================= */

        const {
          data: lessonData,
          error: lessonError,
        } = await supabase
          .from('lessons')
          .select(`
            id,
            course_id,
            lesson_number,
            title,
            paragraph_1,
            image_1_url,
            paragraph_2,
            image_2_url,
            example_title,
            example_1,
            example_2,
            example_3,
            example_4,
            exercise_1,
            exercise_2
          `)
          .eq(
            'course_id',
            courseId
          )
          .order(
            'lesson_number',
            {
              ascending: true,
            }
          )

        if (lessonError) {
          throw lessonError
        }

        setCourse(
          courseData as Course
        )

        setLessons(
          (lessonData ?? []) as Lesson[]
        )

        setCurrentLesson(0)

      } catch (error) {
        console.error(
          'Error cargando curso:',
          error
        )

        setError(
          error instanceof Error
            ? error.message
            : 'No fue posible cargar este curso.'
        )
      } finally {
        setLoading(false)
      }
    }

    loadCourse()
  }, [courseId])

  /* ========================= */
  /* LOADING */
  /* ========================= */

  if (loading) {
    return (
      <main className='flex min-h-screen items-center justify-center bg-zinc-50'>
        <div className='text-center'>
          <i className='fi fi-rr-loading animate-spin text-3xl text-purple-600' />

          <p className='mt-3 text-sm text-zinc-500'>
            Cargando curso...
          </p>
        </div>
      </main>
    )
  }

  /* ========================= */
  /* ERROR */
  /* ========================= */

  if (error || !course) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center'>

        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-red-50'>
          <i className='fi fi-rr-exclamation flex items-center text-2xl text-red-500' />
        </div>

        <h1 className='mt-5 text-2xl font-bold text-zinc-900'>
          No fue posible cargar este curso
        </h1>

        <p className='mt-2 max-w-lg text-sm leading-6 text-zinc-500'>
          {error ?? 'El curso no existe o no está disponible.'}
        </p>

        <Link
          to='/cursos'
          className='mt-6 flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'
        >
          <i className='fi fi-rr-arrow-left flex items-center' />
          Volver a cursos
        </Link>

      </main>
    )
  }

  const lesson =
    lessons[currentLesson]

  return (
    <Fragment>
      <main className='min-h-screen bg-zinc-50'>

        {/* ========================= */}
        {/* HERO */}
        {/* ========================= */}

        <section className='relative h-[320] overflow-hidden sm:h-[420]'>

          {course.image_url ? (
            <img
              src={course.image_url}
              alt={course.title}
              className='absolute inset-0 h-full w-full object-cover'
            />
          ) : (
            <div className='absolute inset-0 bg-linear-to-br from-purple-700 to-purple-400' />
          )}

          <div className='absolute inset-0 bg-black/55' />

          <div className='relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-10 sm:px-8'>

            <Link
              to='/cursos'
              className='mb-6 flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white'
            >
              <i className='fi fi-rr-arrow-left flex items-center' />
              Volver a cursos
            </Link>

            <div className='flex flex-wrap items-center gap-3'>

              <span className='rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-purple-700'>
                {course.category}
              </span>

              <span className='flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white'>
                <i className='fi fi-rr-clock flex items-center' />
                {course.duration}
              </span>

            </div>

            <h1 className='mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl'>
              {course.title}
            </h1>

            <p className='mt-3 max-w-3xl text-sm leading-6 text-white/90 sm:text-base'>
              {course.short_description}
            </p>

          </div>

        </section>

        {/* ========================= */}
        {/* CONTENIDO */}
        {/* ========================= */}

        <section className='mx-auto max-w-6xl px-4 py-10 sm:px-8'>

          {lessons.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center'>

              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-50'>
                <i className='fi fi-rr-book-alt flex items-center text-2xl text-purple-500' />
              </div>

              <h2 className='mt-4 text-xl font-bold'>
                Este curso todavía no tiene lecciones
              </h2>

              <p className='mt-2 text-zinc-500'>
                El profesor todavía no ha agregado
                el contenido.
              </p>

            </div>
          ) : (
            <>

              {/* ========================= */}
              {/* NAVEGACIÓN LECCIONES */}
              {/* ========================= */}

              <div className='mb-8 overflow-x-auto pb-2'>
                <div className='flex min-w-max gap-3'>

                  {lessons.map(
                    (
                      item,
                      index
                    ) => (
                      <button
                        key={item.id}
                        type='button'
                        onClick={() =>
                          setCurrentLesson(index)
                        }
                        className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                          currentLesson === index
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'border border-zinc-200 bg-white text-zinc-600 hover:bg-purple-50'
                        }`}
                      >
                        Lección{' '}
                        {index + 1}
                      </button>
                    )
                  )}

                </div>
              </div>

              {/* ========================= */}
              {/* LECCIÓN */}
              {/* ========================= */}

              {lesson && (
                <article className='rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-10'>

                  <div className='mb-10'>

                    <p className='text-sm font-semibold text-purple-600'>
                      Lección{' '}
                      {currentLesson + 1}{' '}
                      de {lessons.length}
                    </p>

                    <h2 className='mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl'>
                      {lesson.title}
                    </h2>

                  </div>

                  <div className='space-y-10'>

                    {/* PÁRRAFO 1 */}

                    <div>
                      <p className='text-base leading-8 text-zinc-700 sm:text-lg'>
                        {lesson.paragraph_1}
                      </p>
                    </div>

                    {/* IMAGEN 1 */}

                    {lesson.image_1_url && (
                      <div className='overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50'>
                        <img
                          src={lesson.image_1_url}
                          alt={`Imagen de ${lesson.title}`}
                          className='max-h-[600] w-full object-cover'
                        />
                      </div>
                    )}

                    {/* PÁRRAFO 2 */}

                    <div>
                      <p className='text-base leading-8 text-zinc-700 sm:text-lg'>
                        {lesson.paragraph_2}
                      </p>
                    </div>

                    {/* IMAGEN 2 */}

                    {lesson.image_2_url && (
                      <div className='overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50'>
                        <img
                          src={lesson.image_2_url}
                          alt={`Imagen complementaria de ${lesson.title}`}
                          className='max-h-[600] w-full object-cover'
                        />
                      </div>
                    )}

                    {/* ========================= */}
                    {/* EJEMPLO */}
                    {/* ========================= */}

                    <section className='rounded-2xl bg-purple-50 p-6 sm:p-8'>

                      <div className='flex items-start gap-3'>

                        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100'>
                          <i className='fi fi-rr-lightbulb-on flex items-center text-purple-600' />
                        </div>

                        <div>
                          <h3 className='text-xl font-bold text-purple-950'>
                            {lesson.example_title}
                          </h3>

                          <p className='mt-1 text-sm text-purple-700'>
                            Ejemplo paso a paso
                          </p>
                        </div>

                      </div>

                      <div className='mt-6 grid gap-4 sm:grid-cols-2'>

                        {[
                          lesson.example_1,
                          lesson.example_2,
                          lesson.example_3,
                          lesson.example_4,
                        ].map(
                          (
                            example,
                            index
                          ) => (
                            <div
                              key={index}
                              className='rounded-xl border border-purple-100 bg-white p-5 shadow-sm'
                            >

                              <span className='text-sm font-bold text-purple-600'>
                                Paso{' '}
                                {index + 1}
                              </span>

                              <p className='mt-2 leading-7 text-zinc-700'>
                                {example}
                              </p>

                            </div>
                          )
                        )}

                      </div>

                    </section>

                    {/* ========================= */}
                    {/* EJERCICIOS */}
                    {/* ========================= */}

                    <section>

                      <div className='flex items-center gap-3'>

                        <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100'>
                          <i className='fi fi-rr-pencil flex items-center text-zinc-700' />
                        </div>

                        <div>
                          <h3 className='text-xl font-bold text-zinc-900'>
                            Ejercicios
                          </h3>

                          <p className='text-sm text-zinc-500'>
                            Pon a prueba lo aprendido.
                          </p>
                        </div>

                      </div>

                      <div className='mt-5 grid gap-4 sm:grid-cols-2'>

                        <div className='rounded-xl border border-zinc-200 bg-white p-5'>

                          <span className='text-sm font-bold text-purple-600'>
                            Ejercicio 1
                          </span>

                          <p className='mt-2 leading-7 text-zinc-700'>
                            {lesson.exercise_1}
                          </p>

                        </div>

                        <div className='rounded-xl border border-zinc-200 bg-white p-5'>

                          <span className='text-sm font-bold text-purple-600'>
                            Ejercicio 2
                          </span>

                          <p className='mt-2 leading-7 text-zinc-700'>
                            {lesson.exercise_2}
                          </p>

                        </div>

                      </div>

                    </section>

                  </div>

                  {/* ========================= */}
                  {/* PAGINACIÓN */}
                  {/* ========================= */}

                  <div className='mt-12 flex items-center justify-between border-t border-zinc-100 pt-6'>

                    <button
                      type='button'
                      disabled={
                        currentLesson === 0
                      }
                      onClick={() =>
                        setCurrentLesson(
                          (prev) =>
                            prev - 1
                        )
                      }
                      className='flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold transition-all hover:bg-zinc-50 disabled:pointer-events-none disabled:opacity-40 sm:px-5'
                    >
                      <i className='fi fi-rr-arrow-left flex items-center' />

                      <span className='hidden sm:inline'>
                        Anterior
                      </span>
                    </button>

                    <span className='text-sm font-medium text-zinc-500'>
                      {currentLesson + 1}{' '}
                      / {lessons.length}
                    </span>

                    <button
                      type='button'
                      disabled={
                        currentLesson ===
                        lessons.length - 1
                      }
                      onClick={() =>
                        setCurrentLesson(
                          (prev) =>
                            prev + 1
                        )
                      }
                      className='flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-700 disabled:pointer-events-none disabled:opacity-40 sm:px-5'
                    >
                      <span className='hidden sm:inline'>
                        Siguiente
                      </span>

                      <i className='fi fi-rr-arrow-right flex items-center' />
                    </button>

                  </div>

                </article>
              )}

            </>
          )}

        </section>

      </main>
    </Fragment>
  )
}