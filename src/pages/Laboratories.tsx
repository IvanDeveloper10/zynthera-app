import { Fragment } from 'react';
import Navbar from '../components/globalComponents/Navbar';

export default function Laboratories() {
  return (
    <Fragment>
      <Navbar />
      <section className='px-20 h-screen w-full flex justify-center items-center'>
        <h1 className='text-2xl font-extrabold'>¡Aun no hay laboratorios disponibles! Espera a que el desarrollador agregue uno.</h1>
      </section>
    </Fragment>
  );
}