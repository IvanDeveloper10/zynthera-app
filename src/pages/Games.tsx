import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/globalComponents/Navbar'

export default function Games() {
  return (
    <Fragment>
      <Navbar />
      <main className='min-h-screen bg-zinc-50 px-4 py-10 sm:px-8 lg:px-12'>
        <section className='mx-auto max-w-7xl'>
          <div className='mb-10'>
            <p className='mb-2 text-sm font-semibold text-purple-600'>ZYNTHERA</p>
            <h1 className='text-4xl font-bold tracking-tight'>Juegos educativos</h1>
            <p className='mt-3 max-w-2xl text-zinc-600'>
              Aprende, compite y demuestra cuánto sabes
              mediante juegos interactivos.
            </p>
          </div>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            <Link to='/juegos/preguntas' className='group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
              <div className='relative aspect-video overflow-hidden bg-purple-100'>
                <img
                  src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
                  alt='Juego de preguntas'
                  className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className='absolute left-4 top-4'>
                  <span className='rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-purple-700 shadow-sm'>MULTIJUGADOR</span>
                </div>
              </div>
              <div className='p-6'>
                <h2 className='text-xl font-bold text-zinc-900'>Juego de Preguntas</h2>
                <p className='mt-2 leading-6 text-zinc-600'>
                  Compite en tiempo real con otros estudiantes
                  respondiendo preguntas de programación básica.
                </p>
                <div className='mt-5 flex items-center justify-between border-t border-zinc-100 pt-4'>
                  <span className='flex items-center gap-2 text-sm text-zinc-500'>
                    <i className='fi fi-rr-users flex items-center' />
                    Tiempo real
                  </span>
                  <span className='flex items-center gap-2 text-sm font-semibold text-purple-600'>
                    Jugar
                    <i className='fi fi-rr-arrow-right flex items-center transition-transform group-hover:translate-x-1' />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </Fragment>
  )
}