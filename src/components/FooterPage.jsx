import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function FooterPage() {
  return (
    <Fragment>
      <footer className='w-full bg-zinc-100 text-fu px-5 py-16 flex justify-center mt-10'>
        <div className='w-full max-w-7xl flex flex-col gap-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10'>
            <div>
              <h1>ZYNTHERA</h1>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='font-semibold'>Explorar</h2>
              <Link to={'/'}>Ver cursos</Link>
              <Link to={'/'}>Laboratorios</Link>
              <Link to={'/'}>Leer blog</Link>
              <Link to={'/'}>Contacto</Link>
              <Link to={'/'}>Aprender</Link>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='font-semibold'>Recursos</h2>
              <Link to={'/'}>Matemáticas</Link>
              <Link to={'/'}>Programación</Link>
              <Link to={'/'}>Diagramas</Link>
              <Link to={'/'}>Animaciones</Link>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='Comunidad'></h2>
              <Link to={'/'}>Foro activo</Link>
              <Link to={'/'}>Eventos</Link>
              <Link to={'/'}>Webinars</Link>
              <Link to={'/'}>Certificados</Link>
              <Link to={'/'}>Soporte</Link>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='font-semibold'>Suscribirse</h2>
              <p className='text-sm text-zinc-600'>Recibe actualizaciones sobre nuevos cursos y características cada semana.</p>
              <div className='flex lg:flex-col gap-2'>
                <input type='email' placeholder='Tu correo aquí' className='outline-none border-b-2 border-zinc-200 w-full text-sm py-1' />
                <button className='bg-zinc-200 px-4 py-1 rounded-lg text-sm hover:scale-95 hover:cursor-pointer transition-all'>Suscribirse</button>
              </div>
              <p className='text-xs text-zinc-600'>Al suscribirse aceptas nuestra política de privacidad y consentimiento de comunicaciones.</p>
            </div>
          </div>
          <div>
            <div className='w-full h-[1] bg-zinc-200'></div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
              <p className='text-sm text-zinc-600 text-center md:text-left'>© 2026 Zynthera. Todos los derechos reservados.</p>
              <div className='flex flex-wrap justify-center gap-5 text-sm'>
                <Link to={'/'}>Política privacidad</Link>
                <Link to={'/'}>Términos de servicio</Link>
                <Link to={'/'}>Configuración cookies</Link>
              </div>
              <div className='flex gap-4 text-lg'>
                <i className='fi fi-brands-facebook hover:scale-95 hover:cursor-pointer transition-all'></i>
                <i className='fi fi-brands-instagram hover:scale-95 hover:cursor-pointer transition-all'></i>
                <i className='fi fi-brands-twitter-alt hover:scale-95 hover:cursor-pointer transition-all'></i>
                <i className='fi fi-brands-linkedin hover:scale-95 hover:cursor-pointer transition-all'></i>
                <i className='fi fi-brands-youtube hover:scale-95 hover:cursor-pointer transition-all'></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}