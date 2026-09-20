import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Navbar from '../components/globalComponents/Navbar';

interface Course {
  id: string
  title: string
  short_description: string
  image_path: string | null
  category: string
  duration: string
  created_at: string
};

const getCourseImageUrl = (path: string | null) => {
  if (!path) {
    return null
  }

  return supabase.storage
    .from('course-images')
    .getPublicUrl(path)
    .data.publicUrl
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCourses = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('courses')
          .select(`
            id,
            title,
            short_description,
            image_path,
            category,
            duration,
            created_at
          `)
          .order(
            'created_at',
            {
              ascending: false,
            }
          )

        if (error) {
          throw error
        }

        setCourses((data ?? []) as Course[]);
      } catch (error) {
        console.error('Error cargando cursos:', error)

        setError(
          error instanceof Error
            ? error.message
            : 'No fue posible cargar los cursos.'
        )
      } finally {
        setLoading(false);
      }
    }

    loadCourses()
  }, [])

  if (loading) {
    return (
      <main className='flex min-h-screen items-center justify-center'>
        <i className='fi fi-rr-loading animate-spin text-3xl' />
      </main>
    )
  }

  return (
    <Fragment>
      <Navbar />
      <main className='min-h-screen bg-zinc-50 px-4 py-10 sm:px-8 lg:px-12'>
        <section className='mx-auto max-w-7xl'>
          <div className='mb-10'>
            <p className='mb-2 text-sm font-medium text-purple-600'>ZYNTHERA</p>
            <h1 className='text-3xl font-bold tracking-tight sm:text-4xl'>Cursos</h1>
            <p className='mt-3 max-w-2xl text-zinc-600'>
              Explora nuestros cursos y aprende
              nuevos temas de una manera
              interactiva.
            </p>
          </div>
          {error && (
            <div className='mb-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700'>
              <div className='flex items-center gap-3'>
                <i className='fi fi-rr-exclamation flex items-center' />
                <p className='text-sm font-medium'>
                  {error}
                </p>
              </div>
            </div>
          )}
          {!error &&
            courses.length === 0 && (
              <div className='flex min-h-[300] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-white px-6 text-center'>
                <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-50'>
                  <i className='fi fi-rr-book-alt flex items-center text-2xl text-purple-600' />
                </div>
                <h2 className='text-xl font-semibold'>¿No hay cursos disponibles</h2>
                <p className='mt-2 max-w-md text-sm text-zinc-500'>
                  Todavía no se han creado cursos.
                  Cuando un profesor publique uno,
                  aparecerá aquí.
                </p>
              </div>
            )}
          {courses.length > 0 && (
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {courses.map((course) => {
                const imageUrl = getCourseImageUrl(course.image_path)

                return (
                  <Link
                    key={course.id}
                    to={`/cursos/${course.id}`}
                    className='group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
                    <div className='relative aspect-video w-full overflow-hidden bg-zinc-100'>
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={course.title}
                          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      ) : (
                        <div className='flex h-full w-full items-center justify-center bg-linear-to-br from-purple-100 to-purple-50'>
                          <i className='fi fi-rr-book-alt flex items-center text-4xl text-purple-500' />
                        </div>
                      )}
                      <div className='absolute left-3 top-3'>
                        <span className='rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-purple-700 shadow-sm'>
                          {course.category}
                        </span>
                      </div>
                    </div>
                    <div className='p-5'>
                      <h2 className='line-clamp-2 text-lg font-bold text-zinc-900'>
                        {course.title}
                      </h2>
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
                        <span className='flex items-center gap-1 text-sm font-semibold text-purple-600 transition-all group-hover:gap-2'>
                          Ver curso
                          <i className='fi fi-rr-arrow-right flex items-center' />
                        </span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </section>
      </main>
    </Fragment>
  )
}