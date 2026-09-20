import { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Course {
  id: string
  title: string
  short_description: string
  image_path: string | null
  category: string
  duration: string
};

type BlockType = 'paragraph' | 'image' | 'example' | 'exercise';

interface LessonBlock {
  id: string
  position: number
  type: BlockType
  content: unknown
};

interface Lesson {
  id: string
  course_id: string
  lesson_number: number
  title: string
  lesson_blocks: LessonBlock[] | null
};

/**
 * Grupos listos para renderizar. Los `exercise` consecutivos se juntan
 * en un solo grupo para conservar la sección "Ejercicios" con sus tarjetas.
 */
type RenderGroup =
  | { kind: 'paragraph', key: string, text: string }
  | { kind: 'image', key: string, path: string, alt: string }
  | { kind: 'example', key: string, title: string, steps: string[] }
  | { kind: 'exercises', key: string, items: Array<{ id: string, text: string }> };

const readString = (content: unknown, field: string): string => {
  if (typeof content !== 'object' || content === null) {
    return ''
  }

  const value = (content as Record<string, unknown>)[field]

  return typeof value === 'string' ? value : ''
}

const readSteps = (content: unknown): string[] => {
  if (typeof content !== 'object' || content === null) {
    return []
  }

  const value = (content as Record<string, unknown>).steps

  if (!Array.isArray(value)) {
    return []
  }

  return value.map((step) => (typeof step === 'string' ? step : ''))
}

const getPublicUrl = (path: string | null) => {
  if (!path) {
    return null
  }

  return supabase.storage
    .from('course-images')
    .getPublicUrl(path)
    .data.publicUrl
}

const buildRenderGroups = (blocks: LessonBlock[] | null): RenderGroup[] => {
  if (!blocks) {
    return []
  }

  const sorted = [...blocks].sort((a, b) => a.position - b.position)
  const groups: RenderGroup[] = []

  for (const block of sorted) {
    if (block.type === 'exercise') {
      const last = groups[groups.length - 1]
      const item = {
        id: block.id,
        text: readString(block.content, 'text'),
      }

      if (last && last.kind === 'exercises') {
        last.items.push(item)
        continue
      }

      groups.push({
        kind: 'exercises',
        key: `exercises-${block.id}`,
        items: [item],
      })
      continue
    }

    if (block.type === 'paragraph') {
      groups.push({
        kind: 'paragraph',
        key: block.id,
        text: readString(block.content, 'text'),
      })
      continue
    }

    if (block.type === 'image') {
      groups.push({
        kind: 'image',
        key: block.id,
        path: readString(block.content, 'path'),
        alt: readString(block.content, 'alt'),
      })
      continue
    }

    if (block.type === 'example') {
      groups.push({
        kind: 'example',
        key: block.id,
        title: readString(block.content, 'title'),
        steps: readSteps(block.content),
      })
    }
  }

  return groups
}

export default function CourseDetail() {
  const { courseId } = useParams<{courseId: string}>();
  const [ course, setCourse ] = useState<Course | null>(null);
  const [ lessons, setLessons ] = useState<Lesson[]>([]);
  const [ currentLesson, setCurrentLesson] = useState(0);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourse = async () => {
      if (!courseId) {
        setError('Curso no encontrado.');
        setLoading(false);
        return
      }

      setLoading(true);
      setError(null);

      try {
        const { data: courseData, error: courseError} = await supabase
          .from('courses')
          .select(`
            id,
            title,
            short_description,
            image_path,
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

        const { data: lessonData, error: lessonError } = await supabase
          .from('lessons')
          .select(`
            id,
            course_id,
            lesson_number,
            title,
            lesson_blocks (
              id,
              position,
              type,
              content
            )
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

        setCourse(courseData as Course);
        setLessons((lessonData ?? []) as unknown as Lesson[]);
        setCurrentLesson(0);
      } catch (error) {
        console.error('Error cargando curso:', error);
        setError(
          error instanceof Error
            ? error.message
            : 'No fue posible cargar este curso.'
        )
      } finally {
        setLoading(false);
      }
    }
    loadCourse()
  }, [courseId])

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

  if (error || !course) {
    return (
      <main className='flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 text-center'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-red-50'>
          <i className='fi fi-rr-exclamation flex items-center text-2xl text-red-500' />
        </div>
        <h1 className='mt-5 text-2xl font-bold text-zinc-900'>No fue posible cargar este curso</h1>
        <p className='mt-2 max-w-lg text-sm leading-6 text-zinc-500'>
          {error ?? 'El curso no existe o no está disponible.'}
        </p>
        <Link
          to='/cursos'
          className='mt-6 flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700'>
          <i className='fi fi-rr-arrow-left flex items-center' />
          Volver a cursos
        </Link>
      </main>
    )
  }

  const lesson = lessons[currentLesson];
  const lessonGroups = lesson ? buildRenderGroups(lesson.lesson_blocks) : [];
  const courseImageUrl = getPublicUrl(course.image_path);

  return (
    <Fragment>
      <main className='min-h-screen bg-zinc-50'>
        <section className='relative h-[320] overflow-hidden sm:h-[420]'>
          {courseImageUrl ? (
            <img
              src={courseImageUrl}
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
              className='mb-6 flex w-fit items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white'>
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
        <section className='mx-auto max-w-6xl px-4 py-10 sm:px-8'>
          {lessons.length === 0 ? (
            <div className='rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-50'>
                <i className='fi fi-rr-book-alt flex items-center text-2xl text-purple-500' />
              </div>
              <h2 className='mt-4 text-xl font-bold'>Este curso todavía no tiene lecciones</h2>
              <p className='mt-2 text-zinc-500'>
                El profesor todavía no ha agregado
                el contenido.
              </p>
            </div>
          ) : (
            <>
              <div className='mb-8 overflow-x-auto pb-2'>
                <div className='flex min-w-max gap-3'>
                  {lessons.map((item, index) => (
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
                        }`}>
                          Lección{' '}
                          {index + 1}
                      </button>
                    )
                  )}
                </div>
              </div>
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
                    {lessonGroups.map((group) => {
                      if (group.kind === 'paragraph') {
                        return (
                          <div key={group.key}>
                            <p className='text-base leading-8 text-zinc-700 sm:text-lg'>
                              {group.text}
                            </p>
                          </div>
                        )
                      }

                      if (group.kind === 'image') {
                        const imageUrl = getPublicUrl(group.path)

                        if (!imageUrl) {
                          return null
                        }

                        return (
                          <div
                            key={group.key}
                            className='overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50'>
                            <img
                              src={imageUrl}
                              alt={group.alt || `Imagen de ${lesson.title}`}
                              className='max-h-[600] w-full object-cover'
                            />
                          </div>
                        )
                      }

                      if (group.kind === 'example') {
                        return (
                          <section
                            key={group.key}
                            className='rounded-2xl bg-purple-50 p-6 sm:p-8'>
                            <div className='flex items-start gap-3'>
                              <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100'>
                                <i className='fi fi-rr-lightbulb-on flex items-center text-purple-600' />
                              </div>
                              <div>
                                <h3 className='text-xl font-bold text-purple-950'>
                                  {group.title}
                                </h3>
                                <p className='mt-1 text-sm text-purple-700'>Ejemplo paso a paso</p>
                              </div>
                            </div>
                            <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                              {group.steps.map((example, index) => (
                                  <div
                                    key={index}
                                    className='rounded-xl border border-purple-100 bg-white p-5 shadow-sm'>
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
                        )
                      }

                      return (
                        <section key={group.key}>
                          <div className='flex items-center gap-3'>
                            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100'>
                              <i className='fi fi-rr-pencil flex items-center text-zinc-700' />
                            </div>
                            <div>
                              <h3 className='text-xl font-bold text-zinc-900'>Ejercicios</h3>
                              <p className='text-sm text-zinc-500'>Pon a prueba lo aprendido.</p>
                            </div>
                          </div>
                          <div className='mt-5 grid gap-4 sm:grid-cols-2'>
                            {group.items.map((item, index) => (
                              <div
                                key={item.id}
                                className='rounded-xl border border-zinc-200 bg-white p-5'>
                                <span className='text-sm font-bold text-purple-600'>
                                  Ejercicio {index + 1}
                                </span>
                                <p className='mt-2 leading-7 text-zinc-700'>
                                  {item.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </section>
                      )
                    })}
                  </div>
                  <div className='mt-12 flex items-center justify-between border-t border-zinc-100 pt-6'>
                    <button
                      type='button'
                      disabled={currentLesson === 0}
                      onClick={() => setCurrentLesson((prev) => prev - 1)}
                      className='flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold transition-all hover:bg-zinc-50 disabled:pointer-events-none disabled:opacity-40 sm:px-5'>
                      <i className='fi fi-rr-arrow-left flex items-center' />
                      <span className='hidden sm:inline'>Anterior</span>
                    </button>
                    <span className='text-sm font-medium text-zinc-500'>
                      {currentLesson + 1}{' '}
                      / {lessons.length}
                    </span>
                    <button
                      type='button'
                      disabled={currentLesson === lessons.length - 1}
                      onClick={() => setCurrentLesson((prev) => prev + 1)}
                      className='flex items-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-700 disabled:pointer-events-none disabled:opacity-40 sm:px-5'>
                      <span className='hidden sm:inline'>Siguiente</span>
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