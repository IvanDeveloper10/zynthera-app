import { Fragment } from 'react';

export default function WhatIsAlgorithm() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-purple-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-purple-600'></div>
            Introducción a los algoritmos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            ¿Qué es un algoritmo?
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Un algoritmo es una serie de pasos ordenados que seguimos para resolver
            un problema o realizar una tarea. Así como seguimos instrucciones
            para preparar un sandwich o para ganar un videojuego, las computadoras
            también necesitan instrucciones claras para saber qué hacer.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop'
            alt='Programming'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-purple-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-list-check flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>
              Piensa en una receta
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Cuando haces una receta de cocina sigues pasos en orden:
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>1. Buscar los ingredientes</li>
              <li>2. Mezclar los ingredientes</li>
              <li>3. Cocinar</li>
              <li>4. Servir la comida</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Eso también es un algoritmo porque existe un orden específico
              para lograr un resultado.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-purple-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-computer flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>
              ¿Cómo lo usan las computadoras?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Las computadoras usan algoritmos para absolutamente todo:
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Mostrar videos en YouTube</li>
              <li>• Buscar información en Google</li>
              <li>• Recomendar canciones</li>
              <li>• Crear videojuegos</li>
              <li>• Resolver operaciones matemáticas</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Sin algoritmos, una computadora no sabría qué hacer.
            </p>
          </div>

        </div>

        <div className='flex flex-col gap-6'>

          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo sencillo
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Imaginemos un algoritmo para cepillarse los dientes.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                number: '1',
                title: 'Tomar el cepillo',
                text: 'Primero necesitas tomar el cepillo de dientes.'
              },
              {
                number: '2',
                title: 'Colocar crema dental',
                text: 'Después colocas la crema sobre el cepillo.'
              },
              {
                number: '3',
                title: 'Cepillar los dientes',
                text: 'Ahora debes limpiar los dientes correctamente.'
              },
              {
                number: '4',
                title: 'Enjuagar',
                text: 'Finalmente limpias tu boca con agua.'
              }
            ].map((step) => (
              <div
                key={step.number}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <div className='w-14 h-14 rounded-2xl bg-purple-600 text-white flex justify-center items-center text-2xl font-bold'>
                  {step.number}
                </div>

                <h3 className='text-2xl font-bold leading-tight wrap-break-words'>
                  {step.title}
                </h3>

                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
                  {step.text}
                </p>
              </div>
            ))}

          </div>

        </div>

        <div className='overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950'>

          <div className='p-6 sm:p-8 lg:p-10 flex flex-col gap-5'>
            <div className='flex items-center gap-3 text-purple-400 font-semibold'>
              <i className='fi fi-rr-play flex justify-center items-center'></i>
              Recurso audiovisual
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl'>
              Explicación visual de como funcionan los algoritmos
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Abajo de encuentra el video de Magic Markers, explicando que son los algoritmos y como se encuentran a diario frecuentemente.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' title='Algorithms' allowFullScreen src="https://www.youtube.com/embed/U3CGMyjzlvM?si=TAgUm0_XsdzQ8yZk"></iframe>
          </div>

        </div>

        <div className='flex flex-col gap-6'>

          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejercicios para practicar
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>

            {[
              {
                icon: 'fi fi-rr-hamburger',
                title: 'Recetas',
                text: 'Mostrar cómo preparar comida paso a paso.'
              },
              {
                icon: 'fi fi-rr-gamepad',
                title: 'Videojuegos',
                text: 'Explicar cómo un personaje sigue instrucciones.'
              },
              {
                icon: 'fi fi-rr-robot',
                title: 'Robots',
                text: 'Enseñar robots siguiendo órdenes programadas.'
              },
              {
                icon: 'fi fi-rr-route',
                title: 'Mapas',
                text: 'Mostrar cómo GPS encuentra rutas paso a paso.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <i className={`${item.icon} text-4xl text-purple-600`}></i>

                <h3 className='text-2xl font-bold wrap-break-words'>
                  {item.title}
                </h3>

                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>
    </Fragment>
  );
}