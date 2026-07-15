import { Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {

  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesion: ', error);
    }
  };

  return (
    <Fragment>
      <header className='w-full h-auto min-h-16 z-50 sticky top-0 text-fu flex justify-between items-center text-po py-4 px-4 sm:px-8 border-b-2 bg-white border-b-zinc-100'>
        <main>
          <h1 className='text-base sm:text-lg md:text-xl'>ZYNTHERA</h1>
        </main>
        <nav className='flex flex-wrap justify-end items-center gap-2 sm:gap-4 md:gap-8'>
          <Link to={'/'} className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'><i className='fi fi-rr-home flex justify-center items-center text-xs sm:text-sm'></i>Inicio</Link>
          {user && (
            <>
              <Link to={'/courses'} className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'><i className='fi fi-rr-e-learning flex justify-center items-center text-xs sm:text-sm'></i>Cursos</Link>
              <Link to={'/play'} className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'><i className='fi fi-rr-play flex justify-center items-center text-xs sm:text-sm'></i>Jugar</Link>
              <Link to={'/laboratories'} className='flex justify-center items-center gap-1 text-sm sm:text-base whitespace-nowrap'><i className='fi fi-rr-flask flex justify-center items-center text-xs sm:text-sm'></i>Laboratorios</Link>
            </>
          )}
          {/* <Link to={'/'} className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'><i className='fi fi-rr-resources flex justify-center items-center text-xs sm:text-sm'></i>Recursos</Link> */}
          <div className='flex justify-center items-center gap-1 sm:gap-2 min-h-[40] w-40'>
            {loading ? (
              <div className='flex justify-center items-center p-1'>
                <span className=''><i className='fi fi-rr-loading flex justify-center items-center animate-spin text-base sm:text-xl'></i></span>
              </div>
            ) : user ? (
              <div className='flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap'>
                <Link to={'/profile'} className='flex justify-center items-center gap-1 hover:scale-95 transition-all'>
                  <i className='fi fi-rr-user text-base sm:text-xl text-purple-600 flex justify-center items-center'></i>
                  <span className='text-xs sm:text-sm text-zinc-600 hidden xs:inline'>
                    {user.firstname?.split('@')[0]}
                  </span>
                </Link>
                <button
                  onClick={handleLogout}
                  className='flex justify-center items-center gap-1 bg-pink-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 border border-transparent rounded-lg hover:cursor-pointer hover:scale-95 transition-all text-xs sm:text-base whitespace-nowrap'
                ><i className='fi fi-rr-exit flex justify-center items-center text-xs sm:text-sm'></i> Salir</button>
              </div>
            ) : (
              <>
                <Link to={'/register'} className='hidden sm:block'>
                  <button className='border border-zinc-200 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all text-xs sm:text-sm whitespace-nowrap'>Registrarse</button>
                </Link>
                <Link to={'/login'}>
                  <button className='flex justify-center items-center gap-1 bg-purple-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all text-xs sm:text-sm whitespace-nowrap'>
                    <i className='fi fi-rr-enter flex justify-center items-center text-xs sm:text-sm'></i> Ingresar
                  </button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
}