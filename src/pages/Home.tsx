import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/globalComponents/Navbar';
import Features from '../components/homeComponents/Features';
import ChooseZynthera from '../components/homeComponents/ChooseZynthera';
import HowLearn from '../components/homeComponents/HowLearn';
import Testimony from '../components/homeComponents/Testimony';
import CallToAction from '../components/homeComponents/CallToAction';
import Questions from '../components/homeComponents/Questions';
import FooterPage from '../components/globalComponents/FooterPage';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/authContext';

export default function Home() {
  const { user } = useAuth();
  return (
    <Fragment>
      <Navbar /> 
      <section className='w-full min-h-screen bg-zinc-100 text-black flex justify-center items-start px-4 text-fu'>
        <main className='flex flex-col lg:flex-row justify-between border-2 border-zinc-200 rounded-xl my-10 w-full max-w-7xl'>
          <div className='flex flex-col gap-5 p-6 sm:p-10 w-full lg:w-2/4'>
            <h1 className='font-extrabold text-4xl sm:text-6xl lg:text-8xl'>Aprendizaje</h1>
            <h1 className='font-extrabold text-6xl sm:text-8xl lg:text-9xl'><span className='text-purple-600'>S</span><span className='text-blue-600'>T</span><span className='text-orange-600'>E</span><span className='text-green-600'>M</span></h1>
            <p className='text-base sm:text-lg text-po'>Aprende STEM con diagramas, animaciones y laboratorios interactivos que convierten conceptos complejos en conocimientos claros.</p>
            <div className='flex flex-col sm:flex-row gap-2'>
              <Link to={'/cursos'}>
                <Button className='bg-purple-600 cursor-pointer active:scale-95' size={'lg'}><i className='fi fi-rr-ai-technology flex justify-center items-center'></i>Explorar</Button>
              </Link>
              {!user && (
                <>
                  <Link to={'/registro'}>
                    <Button className='bg-zinc-800 cursor-pointer active:scale-95' size={'lg'}>Registrarse</Button>
                  </Link>
                </>
              )}
              <Link to={'/laboratorios'}>
                <Button className='bg-zinc-800 cursor-pointer active:scale-95' size={'lg'}><i className='fi fi-rr-flask flex justify-center items-center text-xs sm:text-sm'></i>Laboratorios</Button>
              </Link>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
            <div className='w-full lg:w-xl aspect-square'>
              <img src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/home-resources/computer-image.png' alt='Computer Image' />
            </div>
          </div>
        </main>
      </section>
      <HowLearn />
      <ChooseZynthera />
      <Features />
      <CallToAction />
      <Testimony />
      <Questions />
      <FooterPage />
    </Fragment>
  );
}