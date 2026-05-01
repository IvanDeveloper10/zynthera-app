import { Fragment } from 'react';

export default function HowLearn() {
  return (
    <Fragment>
      <section className='mt-20'>
        <main className='my-10 flex flex-col gap-2 justify-center items-center text-center'>
          <h1 className='font-bold text-fu'>Proceso</h1>
          <h1 className='font-bold text-4xl sm:text-6xl text-fu'>Cómo aprendes en<br /> Zynthera</h1>
          <p className='font-light text-center text-fu max-sm:px-4 max-sm:w-full w-2/4'>El camino es directo. Seleccionas un curso que te llama, interactúas con el contenido vivo, y experimentas en laboratorios reales donde el codigo responde a tus decisiones.</p>
        </main>

        <div className='w-full flex flex-wrap justify-around items-start px-10 gap-10'>

          <div className='w-96 flex flex-col justify-center items-center text-center'>
            <video autoPlay loop muted playsInline width={100}>
              <source src='/tech-icon.mp4' type='video/mp4' />
            </video>
            <h1 className='text-fu text-3xl font-bold'>Elige tu camino</h1>
            <p className='text-fu'>Navega entre cursos, de programación, matemáticas y pensamiento computacional.</p>
          </div>

          <div className='w-96 flex flex-col justify-center items-center text-center'>
            <video autoPlay loop muted playsInline width={100}>
              <source src='/animate-icon.mp4' type='video/mp4' />
            </video>
            <h1 className='text-fu text-3xl font-bold'>Observa en tiempo real</h1>
            <p className='text-fu'>Las animaciones dinámicas muestran exactamente qué sucede en cada línea.</p>
            <span className='flex justify-center items-center gap-2 mt-10 text-fu'>
              <button className='px-4 border-2 rounded-lg py-1 border-zinc-200 hover:scale-95 hover:cursor-pointer transition-all'>Comenzar</button>
              <button className='flex justify-center items-center gap-2 hover:scale-95 hover:cursor-pointer transition-all'>Ver demo <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></button>
            </span>
          </div>

          <div className='w-96 flex flex-col justify-center items-center text-center'>
            <video autoPlay loop muted playsInline width={100}>
              <source src='/lab-icon.mp4' type='video/mp4' />
            </video>
            <h1 className='text-fu text-3xl font-bold'>Experimenta sin miedo</h1>
            <p className='text-fu'>Los laboratorios interactivos permiten cambios inmediatos y resultados instantáneos.</p>
          </div>

        </div>
      </section>
    </Fragment>
  );
}