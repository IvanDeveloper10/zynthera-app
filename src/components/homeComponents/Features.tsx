import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Features() {
  return (
    <Fragment>
      <section className='w-full h-full flex flex-col bg-zinc-100 text-black py-10 px-2'>
        <main className='my-10'>
          <h1 className='font-bold text-center text-fu'>Caracteristicas</h1>
          <h1 className='font-bold text-center text-fu text-6xl'>Lo que te espera aqui</h1>
          <h1 className='font-light text-center text-fu'>Visualiza cada concepto con claridad</h1>
        </main>
        <div className='flex justify-center gap-10 flex-wrap'>
          <Card className='relative justify-end bg-zinc-800 text-white max-w-sm w-64 max-[350px]:w-full'>
            <CardHeader className='h-48 flex flex-col justify-start gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <CardTitle className='text-2xl text-fu'>Diagramas que hablan por si solos</CardTitle>
              <CardDescription className='font-light text-white text-fu'>
                Representaciones graficas que desglosan la complejidad
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-start items-center gap-2 bg-zinc-800 text-white'>
              <span className='flex h-full items-end text-fu'>
                <Link to={'/cursos'} className='flex justify-start items-center gap-2 text-base'>Explorar <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </span>
            </CardFooter>
          </Card>

          <Card className='relative justify-end bg-zinc-800 text-white max-w-sm w-64 max-[350px]:w-full'>
            <CardHeader className='h-48 flex flex-col justify-start gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <CardTitle className='text-2xl text-fu'>Animaciones que cobran vida</CardTitle>
              <CardDescription className='font-light text-white text-fu'>
                Movimiento fluido que revela procesos paso a paso
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-start items-center gap-2 bg-zinc-800 text-white'>
              <span className='flex h-full items-end text-fu'>
                <Link to={'/cursos'} className='flex justify-start items-center gap-2 text-base'>Descubrir <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </span>
            </CardFooter>
          </Card>
          
          <Card className='relative justify-end bg-zinc-800 text-white max-w-sm w-64 max-[350px]:w-full'>
            <CardHeader className='h-48 flex flex-col justify-start gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <CardTitle className='text-2xl text-fu'>Laboratorios donde experimentas</CardTitle>
              <CardDescription className='font-light text-white text-fu'>
                Codigo ejecutable que responde a tus cambios
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-start items-center gap-2 bg-zinc-800 text-white'>
              <span className='flex h-full items-end text-fu'>
                <Link to={'/laboratorios'} className='flex justify-start items-center gap-2 text-base'>Practicar <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </span>
            </CardFooter>
          </Card>

          <Card className='relative justify-end bg-zinc-800 text-white max-w-sm w-64 max-[350px]:w-full'>
            <CardHeader className='h-48 flex flex-col justify-start gap-2'>
              <i className='fi fi-rr-cube flex justify-start items-center text-4xl'></i>
              <CardTitle className='text-2xl text-fu'>Aprendizaje que se pega</CardTitle>
              <CardDescription className='font-light text-white text-fu'>
                Retención profunda a través de la interacción
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-start items-center gap-2 bg-zinc-800 text-white'>
              <span className='flex h-full items-end text-fu'>
                <Link to={'/cursos'} className='flex justify-start items-center gap-2 text-base'>Comenzar <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i></Link>
              </span>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Fragment>
  );
}