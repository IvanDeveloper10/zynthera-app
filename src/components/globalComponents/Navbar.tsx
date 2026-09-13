import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { supabase } from '../../lib/supabase';
import { toast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout =
    async () => {
      try {
        const {error } = await supabase.auth.signOut();
        if (error) {
          throw error
        }
        toast.add({
          title: 'Sesión cerrada',
          description: 'Has cerrado sesión correctamente.',
          type: 'success',
        });

        navigate('/', {
          replace: true,
        });
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        toast.add({
          title: 'No se pudo cerrar sesión',
          description: 'Ocurrió un error al cerrar tu sesión. Inténtalo nuevamente.',
          type: 'error',
        });
      }
    }
  return (
    <Fragment>
      <header className='w-full h-16 z-50 sticky top-0 text-fu flex justify-between items-center text-po py-4 px-4 sm:px-8 border-b-2 bg-white border-b-zinc-100'>
        <main>
          <h1 className='text-base sm:text-sm md:text-lg'>ZYNTHERA</h1>
        </main>
        <nav className='flex flex-wrap justify-end items-center gap-2 sm:gap-4 md:gap-8'>
          {user && !loading && (
            <>
              <Link to='/' className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'>
                <i className='fi fi-rr-home flex justify-center items-center text-xs sm:text-sm'></i>
                Inicio
              </Link>
              <Link to='/cursos' className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'>
                <i className='fi fi-rr-e-learning flex justify-center items-center text-xs sm:text-sm'></i>
                Cursos
              </Link>
              {profile?.role ===
                'profesor' && (
                <Link to='/dashboard-profesor' className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'>
                  <i className='fi fi-rr-dashboard flex justify-center items-center text-xs sm:text-sm'></i>
                  Dashboard
                </Link>
              )}
              <Link to='/juegos' className='flex justify-center items-center gap-1 text-xs sm:text-base whitespace-nowrap'>
                <i className='fi fi-rr-play flex justify-center items-center text-xs sm:text-sm'></i>
                Juegos
              </Link>
              <Link to='/laboratorios' className='flex justify-center items-center gap-1 text-sm sm:text-base whitespace-nowrap'>
                <i className='fi fi-rr-flask flex justify-center items-center text-xs sm:text-sm'></i>
                Laboratorios
              </Link>
            </>
          )}
        </nav>
        <div className='flex justify-center items-center gap-1 sm:gap-2 min-h-[40] w-40'>
          {loading ? (
            <div className='flex justify-center items-center p-1'>
              <i className='fi fi-rr-loading flex justify-center items-center animate-spin text-base sm:text-xl'></i>
            </div>
          ) : user ? (
            <div className='flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap'>
              <Link to='/perfil' className='flex justify-center items-center gap-1 hover:scale-95 transition-all'>
                <Button
                  variant='outline'
                  className='flex justify-center items-center gap-1 active:scale-95 cursor-pointer'
                  size='lg'>
                  <i className='fi fi-rr-user text-base sm:text-xl text-black flex justify-center items-center'></i>
                  <span className='text-xs sm:text-sm text-zinc-600 hidden xs:inline'>
                    {profile?.first_name ||
                      user.email?.split('@')[0]}
                  </span>
                </Button>
              </Link>
              <Button
                variant='destructive'
                size='lg'
                onClick={handleLogout}
                className='flex justify-center items-center gap-1 active:scale-95 cursor-pointer'>
                <i className='fi fi-rr-exit flex justify-center items-center text-xs sm:text-sm'></i>
                Salir
              </Button>
            </div>
          ) : (
            <>
              <Link to='/registro' className='hidden sm:block'>
                <Button
                  variant='outline'
                  size='lg'
                  className='flex justify-center items-center gap-1 active:scale-95 cursor-pointer'>
                  Registrarse
                </Button>
              </Link>
              <Link to='/ingreso'>
                <Button
                  size='lg'
                  className='flex justify-center items-center gap-1 active:scale-95 cursor-pointer'>
                  <i className='fi fi-rr-enter flex justify-center items-center text-xs sm:text-sm'></i>
                  Ingresar
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>
    </Fragment>
  )
}