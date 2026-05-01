import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <Fragment>
      <section className='w-full h-full flex flex-col bg-zinc-100 text-black py-10 px-2'>
        <main className='my-10'>
          <h1 className='font-bold text-center text-fu'>Caracteristicas</h1>
          <h1 className='font-bold text-center text-fu text-6xl'>Lo que te espera aqui</h1>
          <h1 className='font-light text-center text-fu'>Visualiza cada concepto con claridad</h1>
        </main>
        <div className='flex justify-around flex-wrap gap-10'>

          <div className='flex flex-col bg-zinc-800 text-white text-fu h-64 w-64 max-[350px]:w-full p-4 rounded-lg'>
            <main className='flex flex-col gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <h1 className='text-2xl'>Diagramas que hablan por si solos</h1>
            </main>
            <div className='mt-5'>
              <p className=''>Representaciones graficas que desglosan la complejidad</p>
            </div>
            <span className='flex h-full items-end'>
              <Link to={'/'} className='flex justify-start items-center gap-2'>Explorar <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
            </span>
          </div>

          <div className='flex flex-col bg-zinc-800 text-white text-fu h-64 w-64 max-[350px]:w-full p-4 rounded-lg'>
            <main className='flex flex-col gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <h1 className='text-2xl'>Animaciones que cobran vida</h1>
            </main>
            <div className='mt-5'>
              <p className=''>Movimiento fluido que revela procesos paso a paso</p>
            </div>
            <span className='flex h-full items-end'>
              <Link to={'/'} className='flex justify-start items-center gap-2'>Descubrir <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
            </span>
          </div>
          
          <div className='flex flex-col bg-zinc-800 text-white text-fu h-64 w-64 max-[350px]:w-full p-4 rounded-lg'>
            <main className='flex flex-col gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <h1 className='text-2xl'>Laboratorios donde experimentas</h1>
            </main>
            <div className='mt-5'>
              <p className=''>Codigo ejecutable que responde a tus cambios</p>
            </div>
            <span className='flex h-full items-end'>
              <Link to={'/'} className='flex justify-start items-center gap-2'>Practicar <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
            </span>
          </div>

          <div className='flex flex-col bg-zinc-800 text-white text-fu h-64 w-64 max-[350px]:w-full p-4 rounded-lg'>
            <main className='flex flex-col gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <h1 className='text-2xl'>Aprendizaje que se pega</h1>
            </main>
            <div className='mt-5'>
              <p className=''>Retención profunda a través de la interacción</p>
            </div>
            <span className='flex h-full items-end'>
              <Link to={'/'} className='flex justify-start items-center gap-2'>Comenzar <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
            </span>
          </div>
        </div>
      </section>
    </Fragment>
  );
}