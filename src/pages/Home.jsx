import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TransformedEducation from '../components/homeComponents/TransformedEducation';
import Features from '../components/homeComponents/Features';
import ChooseZynthera from '../components/homeComponents/ChooseZynthera';
import HowLearn from '../components/homeComponents/HowLearn';
import Testimony from '../components/homeComponents/Testimony';
import CallToAction from '../components/homeComponents/CallToAction';
import Questions from '../components/homeComponents/Questions';
import FooterPage from '../components/FooterPage';
import { AuthContext } from '../context/AuthContext';

export default function Home() {

  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      <Navbar /> 
      <section className='w-full min-h-screen bg-zinc-100 text-black flex justify-center items-start px-4 text-fu'>
        <main className='flex flex-col lg:flex-row justify-between border-2 border-zinc-200 rounded-xl my-10 w-full max-w-7xl'>
          <div className='flex flex-col gap-5 p-6 sm:p-10 w-full lg:w-2/4'>
            <h1 className='font-extrabold text-4xl sm:text-6xl lg:text-8xl text-po'>Aprende Tecnologia</h1>
            <p className='text-base sm:text-lg text-po'>Zynthera transforma conceptos complejos en experiencias claras. Diagramas dinámicos, animaciones fluidas, y laboratorios prácticos te guían desde lo básico hasta lo avanzado en programación, matemáticas, bases de datos, algoritmos y pensamiento computacional.</p>
            <div className='flex flex-col sm:flex-row gap-5'>
              <Link to={'/courses'}>
                <button className='flex justify-center items-center gap-1 bg-purple-600 px-8 py-2 rounded-lg text-white hover:scale-95 hover:cursor-pointer transition-all'><i className='fi fi-rr-ai-technology flex justify-center items-center'></i>Explorar</button>
              </Link>
              {!user && (
                <Link>
                  <button className='bg-zinc-800 px-8 py-2 rounded-lg text-white hover:scale-95 hover:cursor-pointer transition-all'>Registrarse</button>
                </Link>
              )}
              {user && (
                <Link>
                  <button className='flex justify-center items-center gap-1 bg-zinc-800 px-8 py-2 rounded-lg text-white hover:scale-95 hover:cursor-pointer transition-all'><i className='fi fi-rr-flask flex justify-center items-center text-xs sm:text-sm'></i>Laboratorios</button>
                </Link>
              )}
            </div>
          </div>
          <div className='flex justify-center lg:justify-end w-full lg:w-auto'>
            <div className='w-full lg:w-xl aspect-square'>
              <img src='https://cdn.hackclub.com/019e24c7-4f96-7d32-aece-3299ba7306b7/tech-image.png' alt='Image Main Page' />
            </div>
          </div>
        </main>
      </section>
      {/* <TransformedEducation /> */}
      <Features />
      <ChooseZynthera />
      <HowLearn />
      <CallToAction />
      <Testimony />
      <Questions />
      <FooterPage />
    </Fragment>
  );
}