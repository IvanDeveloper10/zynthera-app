import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function ChooseZynthera() {
  return (
    <Fragment>
      <section className='flex flex-col items-center my-20 px-5'>
        <main className='my-10 text-center'>
          <h1 className='font-bold text-fu'>Ventajas</h1>
          <h1 className='font-bold text-4xl sm:text-6xl text-fu'>Por qué elegir Zynthera</h1>
          <h1 className='font-light text-fu'>Domina conceptos que antes parecían imposibles</h1>
        </main>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl'>
          <div className='rounded-lg overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all'>
            <img 
              src='/image-code.jpg' 
              className='w-full h-52 object-cover' 
              alt='Image Code' 
            />
            <div className='flex flex-col gap-3 bg-zinc-100 p-6 flex-1'>
              <h1 className='font-bold text-fu text-sm'>Comprensión profunda</h1>
              <h1 className='text-fu text-3xl font-semibold leading-tight'>Entiende el razonamiento detrás del código</h1>
              <p className='text-fu text-sm text-zinc-600'>Los métodos visuales penetran donde las palabras fallan. Ves cómo funciona, no solo lees sobre ello.</p>
              <div className='mt-auto flex gap-3 items-center'>
                <Link to={'/'}>
                  <button className='text-fu border-2 border-zinc-300 px-5 py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all'>Aprender</button>
                </Link>
                <Link to={'/'} className='flex justify-center items-center gap-2 hover:scale-95 transition-all text-fu'>Más <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </div>
            </div>
          </div>
          <div className='rounded-lg overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all'>
            <img 
              src='/image-group.jpg' 
              className='w-full h-52 object-cover' 
              alt='Image Group' 
            />
            <div className='flex flex-col gap-3 bg-zinc-100 p-6 flex-1'>
              <h1 className='font-bold text-fu text-sm'>Progreso medible</h1>
              <h1 className='text-fu text-3xl font-semibold leading-tight'>Avanza a tu propio ritmo sin presiones</h1>
              <p className='text-fu text-sm text-zinc-600'>Cada laboratorio completado es una victoria. Construyes confianza con cada paso, sin competencia artificial.</p>
              <div className='mt-auto flex gap-3 items-center'>
                <Link to={'/'}>
                  <button className='text-fu border-2 border-zinc-300 px-5 py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all'>Explorar</button>
                </Link>
                <Link to={'/'} className='flex justify-center items-center gap-2 hover:scale-95 transition-all text-fu'>Más <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </div>
            </div>
          </div>
          <div className='rounded-lg overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all'>
            <img 
              src='/image-vr.jpg' 
              className='w-full h-52 object-cover' 
              alt='Image Vr' 
            />
            <div className='flex flex-col gap-3 bg-zinc-100 p-6 flex-1'>
              <h1 className='font-bold text-fu text-sm'>Aprendizaje inmersivo</h1>
              <h1 className='text-fu text-3xl font-semibold leading-tight'>Experimenta la tecnología en tiempo real</h1>
              <p className='text-fu text-sm text-zinc-600'>Sumérgete en simulaciones interactivas donde puedes probar, fallar y aprender sin límites. </p>
              <div className='mt-auto flex gap-3 items-center'>
                <Link to={'/'}>
                  <button className='text-fu border-2 border-zinc-300 px-5 py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all'>Probar ahora</button>
                </Link>
                <Link to={'/'} className='flex justify-center items-center gap-2 hover:scale-95 transition-all text-fu'>Más <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}