import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <Fragment>
      <section className='w-full flex justify-center px-5 mt-20 text-fu'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10'>
          <div className='flex flex-col gap-5 w-full lg:w-1/2'>
            <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl'>Comienza tu viaje hoy</h1>
            <p className='text-zinc-600'>Acceso inmediato a cursos, laboratorios y recursos que transformarán tu comprensión de la tecnología.</p>
            <div className='flex flex-wrap gap-3'>
              <Link to={'/'}>
                <button className='bg-zinc-800 text-white px-5 py-2 rounded-lg hover:scale-95 transition-all'>Registrarse</button>
              </Link>
              <button className='px-5 py-2 hover:scale-95 transition-all'>Ver demo</button>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img 
              src='/image-programmer.jpg' 
              alt='Image Programmer' 
              className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl'
            />
          </div>
        </div>
      </section>
      <section className='w-full flex justify-center px-5 mt-20 text-fu'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10'>
          <div className='w-full lg:w-1/2 order-1 lg:order-0'>
            <img 
              src='/image-girl-notice.jpg' 
              alt='Image Girl Notice' 
              className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl'
            />
          </div>
          <div className='flex flex-col gap-5 w-full lg:w-1/2'>
            <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl'>Mantente informado</h1>
            <p className='text-zinc-600'>Recibe actualizaciones sobre nuevos cursos, laboratorios y recursos educativos directamente en tu bandeja.</p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <input 
                type='email' 
                placeholder='Tu correo aquí' 
                className='w-full sm:flex-1 outline-none border-2 border-zinc-200 rounded-lg px-3 py-2 text-sm'
              />
              <button className='px-5 py-1 bg-purple-600 text-white rounded-lg hover:cursor-pointer hover:scale-95 transition-all'>Suscribirse</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}