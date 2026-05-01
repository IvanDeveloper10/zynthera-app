import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Fragment>
      <header className='w-full sticky top-0 text-fu flex justify-between items-center text-po py-4 px-8 border-b-2 bg-white border-b-zinc-100 max-md:hidden'>
        <main>
          <h1 className=''>ZYNTHERA</h1>
        </main>
        <nav className='flex gap-8'>
          <Link to={'/'} className='flex justify-center items-center gap-1'><i className='fi fi-rr-home flex justify-center items-center'></i>Inicio</Link>
          <Link to={'/'} className='flex justify-center items-center gap-1'><i className='fi fi-rr-e-learning flex justify-center items-center'></i>Cursos</Link>
          <Link to={'/'} className='flex justify-center items-center gap-1'><i className='fi fi-rr-flask flex justify-center items-center'></i>Laboratorios</Link>
          <Link to={'/'} className='flex justify-center items-center gap-1'><i className='fi fi-rr-resources flex justify-center items-center'></i>Recursos</Link>
          <div className='flex gap-2'>
            <button className='border border-zinc-100 px-2 py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all max-lg:hidden'>Registrarse</button>
            <button className='flex justify-center items-center gap-1 bg-purple-600 text-white px-2 py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all'><i className='fi fi-rr-enter flex justify-center items-center'></i>Ingresar</button>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}