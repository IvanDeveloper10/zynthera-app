import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


export default function ChooseZynthera() {
  return (
    <Fragment>
      <section className='flex flex-col items-center my-20 px-5'>
        <main className='my-10 text-center'>
          <h1 className='font-bold text-fu'>Ventajas</h1>
          <h1 className='font-bold text-4xl sm:text-6xl text-fu'>Por qué elegir Zynthera</h1>
          <h1 className='font-light text-fu'>Domina conceptos que antes parecían imposibles</h1>
        </main>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl text-fu'>
          <Card className='relative mx-auto w-full max-w-sm pt-0'>
            <img
              src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/home-resources/programming-image.jpg'
              alt='Programming Image'
              className='relative z-20 aspect-video w-full h-52 object-cover'
            />
            <CardHeader className='h-40 flex flex-col justify-start gap-2'>
              <Badge variant='secondary' className='font-bold'>Comprensión profunda</Badge>
              <CardTitle className='text-2xl text-fu'>Entiende el razonamiento detrás del código</CardTitle>
              <CardDescription className='font-light'>
                Los métodos visuales penetran donde las palabras fallan. Ves cómo funciona, no solo lees sobre ello.
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-center items-center gap-2'>
              <Link to='/cursos' className='w-full'>
                <Button className='w-full flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'}>Explorar</Button>
              </Link>
              <Link to='/cursos' className='w-full'>
                <Button className='w-full flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'} variant={'outline'}>Ir <i className='fi fi-rr-angle-right flex justify-center items-center'></i></Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className='relative mx-auto w-full max-w-sm pt-0'>
            <img
              src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/home-resources/people-group-image.jpg'
              alt='People Group Image'
              className='relative z-20 aspect-video w-full h-52 object-cover'
            />
            <CardHeader className='h-40 flex flex-col justify-start gap-2'>
              <Badge variant='secondary' className='font-bold'>Progreso medible</Badge>
              <CardTitle className='text-2xl text-fu'>Avanza a tu propio ritmo sin presiones</CardTitle>
              <CardDescription className='font-light'>
                Cada laboratorio completado es una victoria. Construyes confianza con cada paso, sin competencia artificial.
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-center items-center gap-2'>
              <Link to='/cursos' className='w-full'>
                <Button className='w-full flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'}>Explorar</Button>
              </Link>
              <Link to='/cursos' className='w-full'>
                <Button className='w-full flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'} variant={'outline'}>Ir <i className='fi fi-rr-angle-right flex justify-center items-center'></i></Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className='relative mx-auto w-full max-w-sm pt-0'>
            <img
              src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/home-resources/vr-image.jpg'
              alt='Vr Image'
              className='relative z-20 aspect-video w-full h-52 object-cover'
            />
            <CardHeader className='h-40 flex flex-col justify-start gap-2'>
              <Badge variant='secondary' className='font-bold'>Aprendizaje inmersivo</Badge>
              <CardTitle className='text-2xl text-fu'>Experimenta la tecnología en tiempo real</CardTitle>
              <CardDescription className='font-light'>
                Sumérgete en simulaciones interactivas donde puedes probar, fallar y aprender sin límites.
              </CardDescription>
            </CardHeader>
            <CardFooter className='flex justify-center items-center gap-2'>
              <Link to='/cursos' className='w-full'>
                <Button className='w-full flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'}>Explorar</Button>
              </Link>
              <Link to='/cursos' className='w-full'>
                <Button className='w-full flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'} variant={'outline'}>Ir demo <i className='fi fi-rr-angle-right flex justify-center items-center'></i></Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </Fragment>
  );
}