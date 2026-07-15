import { Fragment } from 'react';

export default function InsertionSort() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de ordenamiento
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Insertion Sort
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El Insertion Sort es un algoritmo de ordenamiento que construye el arreglo 
            final de forma iterativa, tomando un elemento a la vez e insertándolo en 
            la posición correcta dentro de la parte ya ordenada, similar a cómo 
            ordenamos cartas en nuestra mano.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Insertion sort algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-arrow-small-right flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              El algoritmo recorre el arreglo y para cada elemento, lo inserta en la 
              posición correcta dentro de los elementos ya procesados.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Empieza con el primer elemento como ordenado.</li>
              <li>• Toma el siguiente elemento y lo compara con los anteriores.</li>
              <li>• Lo desplaza hasta encontrar su posición correcta.</li>
              <li>• Repite hasta ordenar todo el arreglo.</li>
              <li>• Complejidad O(n²) en el peor caso.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como cuando ordenas naipes en tu mano: tomas uno y lo colocas en su 
              lugar correcto entre los que ya tienes.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-stats flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Características
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Insertion Sort es eficiente para conjuntos pequeños y tiene propiedades 
              que lo hacen útil en ciertos escenarios.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Adaptativo:</span> Muy eficiente si los datos están casi ordenados.</li>
              <li>• <span className='font-semibold'>Estable:</span> Mantiene el orden relativo de elementos iguales.</li>
              <li>• <span className='font-semibold'>In-place:</span> Requiere O(1) memoria adicional.</li>
              <li>• <span className='font-semibold'>Online:</span> Puede ordenar datos mientras llegan.</li>
              <li>• <span className='font-semibold'>Eficiente:</span> O(n) en el mejor caso (ordenado).</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Perfecto para datasets pequeños o casi ordenados, superando a otros 
              algoritmos más complejos.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo el Insertion Sort ordena un arreglo de números.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🃏',
                title: 'Paso 1: Arreglo inicial',
                text: '[5, 3, 8, 4, 2] - 5 ya está "ordenado".'
              },
              {
                symbol: '📌',
                title: 'Paso 2: Insertar 3',
                text: '3 < 5, desplazamos 5: [3, 5, 8, 4, 2]'
              },
              {
                symbol: '📍',
                title: 'Paso 3: Insertar 8',
                text: '8 > 5, queda en su lugar: [3, 5, 8, 4, 2]'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Insertar 4 y 2',
                text: 'Colocamos cada elemento: [2, 3, 4, 5, 8]'
              }
            ].map((step, index) => (
              <div
                key={index}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <div className='w-14 h-14 rounded-2xl bg-zinc-100 flex justify-center items-center text-3xl'>
                  {step.symbol}
                </div>

                <h3 className='text-2xl font-bold'>
                  {step.title}
                </h3>

                <p className='text-zinc-600 leading-relaxed'>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950'>
          <div className='p-6 sm:p-8 lg:p-10 flex flex-col gap-5'>
            <div className='flex items-center gap-3 text-green-400 font-semibold'>
              <i className='fi fi-rr-play'></i>
              Recurso audiovisual
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white'>
              Aprende Insertion Sort visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona el Insertion Sort con animaciones y ejemplos 
              interactivos que hacen fácil entender este algoritmo intuitivo mira el video de GeeksforGeeks.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Insertion sort explained'
              allowFullScreen
              src='https://www.youtube.com/embed/OGzPmgsI-pQ'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Aplicaciones prácticas
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-cards',
                title: 'Ordenar naipes',
                text: 'Simula cómo un jugador ordena cartas en su mano.'
              },
              {
                icon: 'fi fi-rr-database',
                title: 'Datos casi ordenados',
                text: 'Ideal para conjuntos que ya están casi organizados.'
              },
              {
                icon: 'fi fi-rr-stream',
                title: 'Datos en tiempo real',
                text: 'Ordena datos que llegan continuamente (online).'
              },
              {
                icon: 'fi fi-rr-cubes',
                title: 'Subrutinas en algoritmos',
                text: 'Útil como sub-algoritmo en Sorting avanzados como Timsort.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <i className={`${item.icon} text-4xl text-green-600`}></i>

                <h3 className='text-2xl font-bold'>
                  {item.title}
                </h3>

                <p className='text-zinc-600 leading-relaxed'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-green-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-green-900'>
                ¿Sabías que?
              </h2>
              <p className='text-green-800 text-base sm:text-lg leading-relaxed'>
                Insertion Sort es el algoritmo de ordenamiento utilizado 
                por muchos sistemas de ordenamiento híbridos como Timsort (usado en 
                Python y Java) para pequeños conjuntos de datos debido a su 
                eficiencia en arrays casi ordenados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}