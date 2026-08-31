import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

export default function CallToAction() {
  return (
    <Fragment>
      <section className='w-full flex justify-center px-5 mt-20 text-fu'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10'>
          <div className='flex flex-col gap-5 w-full lg:w-1/2'>
            <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl'>Comienza tu viaje hoy</h1>
            <p className='text-zinc-600'>Acceso inmediato a cursos, laboratorios y recursos que transformarán tu comprensión de la tecnología.</p>
            <div className='flex flex-wrap gap-3'>
              <Link to='/registro'>
                <Button className='flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'}>Registrarse</Button>
              </Link>
              <Link to='/cursos'>
                <Button className='flex justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'} variant={'outline'}>Ir <i className='fi fi-rr-angle-right flex justify-center items-center'></i></Button>
              </Link>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img 
              src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/home-resources/programmer-image.jpg' 
              alt='Image Programmer' 
              className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl'
            />
          </div>
        </div>
      </section>
      {/* <section className='w-full flex justify-center px-5 mt-20 text-fu'>
        <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center gap-10'>
          <div className='w-full lg:w-1/2 order-1 lg:order-0'>
            <img 
              src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/home-resources/informate-image.jpg' 
              alt='Informate Image' 
              className='w-full h-64 sm:h-80 lg:h-full object-cover rounded-xl'
            />
          </div>
          <div className='flex flex-col gap-5 w-full lg:w-1/2'>
            <h1 className='font-bold text-4xl sm:text-5xl lg:text-6xl'>Mantente informado</h1>
            <p className='text-zinc-600'>Recibe actualizaciones sobre nuevos cursos, laboratorios y recursos educativos directamente en tu bandeja.</p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <Input type='email' placeholder='Tu correo aquí'  />
              <Button className='flex bg-purple-600 justify-center items-center gap-1 cursor-pointer active:scale-95' size={'lg'}>Suscribirse</Button>
            </div>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}