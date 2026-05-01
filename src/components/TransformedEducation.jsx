import { Fragment } from 'react';

export default function TransformedEducation() {
  return (
    <Fragment>
      <section className='flex justify-between text-fu px-10 max-lg:px-4 py-10 bg-zinc-800 text-white max-lg:flex-col'>
        <main className='w-2/4 max-lg:w-full'>
          <h1 className='text-4xl sm:text-6xl lg:text-8xl font-bold'>Educación Transformada</h1>
        </main>
        <div className='w-2/4 max-lg:w-full'>
          <p className='text-base sm:text-lg '>Zynthera nace de una convicción simple: la tecnologia debe enseñarse de manera clara y accesible. Creemos que cada estudiante merece herramientas que hagan visible lo invisible.</p>
        </div>
      </section>
    </Fragment>
  );
}