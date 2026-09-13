import { Fragment } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Testimony() {

  const testimonies = [
    {
      name: 'Maria López',
      role: 'Estudiante de programación',
      text: 'Finalmente entiendo cómo funcionan los algoritmos. Las animaciones lo hacen obvio.',
      rating: 5
    },
    {
      name: 'Carlos Pérez',
      role: 'Desarrollador frontend',
      text: 'Aprendí React mucho más rápido gracias a esta plataforma web.',
      rating: 5
    },
    {
      name: 'Ana Torres',
      role: 'Estudiante de programación',
      text: 'Los ejemplos son claros y prácticos, super recomendado este recurso web.',
      rating: 4
    }
  ];

  return (
    <Fragment>
      <section className='flex flex-col lg:flex-row justify-center items-center gap-10 text-fu my-20 py-10 px-5'>
        <main className='text-center lg:text-left max-w-xl'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Testimonios</h1>
          <p className='text-zinc-600 mt-2'>Historias de quienes ya aprendieron con nosotros</p>
        </main>
        <div className='flex flex-col items-center gap-4 mt-6 w-full max-w-md'>
          <Carousel className='w-full sm:max-w-xs'>
            <CarouselContent>
              {testimonies.map((testimony, index) => (
                <CarouselItem key={index}>
                  <div className='p-1'>
                    <Card>
                      <CardContent className='flex flex-col justify-center gap-4 p-6 aspect-square'>
                        <div className='flex'>
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <span
                              key={starIndex}
                              className={`text-xl ${
                                starIndex < testimony.rating
                                  ? 'text-yellow-400'
                                  : 'text-zinc-300'
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>

                        <p className='text-zinc-600 italic'>
                          "{testimony.text}"
                        </p>

                        <div className='mt-auto'>
                          <h3 className='font-semibold text-lg'>
                            {testimony.name}
                          </h3>
                          <p className='text-sm text-zinc-500'>
                            {testimony.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='cursor-pointer' />
            <CarouselNext className='cursor-pointer' />
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
}