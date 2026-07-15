import { Fragment } from 'react';

export default function QuickSort() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de ordenamiento
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Quick Sort
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El Quick Sort es uno de los algoritmos de ordenamiento más rápidos y 
            ampliamente utilizados. Basado en la técnica de divide y vencerás, 
            selecciona un elemento como pivote y particiona el arreglo en dos 
            sub-arreglos: elementos menores y mayores que el pivote, ordenándolos 
            recursivamente.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Quick sort algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-bolt flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Quick Sort utiliza un pivote para dividir el arreglo en dos partes, 
              ordenando cada parte recursivamente.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Selecciona un elemento como pivote.</li>
              <li>• Particiona: coloca menores a la izquierda.</li>
              <li>• Coloca mayores a la derecha del pivote.</li>
              <li>• Ordena recursivamente cada sub-arreglo.</li>
              <li>• Complejidad O(n log n) en promedio.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como cuando organizas libros por tamaño: tomas uno de referencia y 
              colocas los más pequeños a un lado y los más grandes al otro.
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
              Quick Sort es famoso por su velocidad y eficiencia en la práctica, 
              aunque tiene algunas consideraciones importantes.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>In-place:</span> Ordena sin necesidad de memoria extra.</li>
              <li>• <span className='font-semibold'>No estable:</span> Puede alterar el orden de elementos iguales.</li>
              <li>• <span className='font-semibold'>Rápido:</span> Excelente rendimiento en promedio.</li>
              <li>• <span className='font-semibold'>Recursivo:</span> Fácil de implementar recursivamente.</li>
              <li>• <span className='font-semibold'>O(n²):</span> Peor caso con pivotes desfavorables.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              El algoritmo de ordenamiento más utilizado en la práctica por su 
              velocidad y eficiencia.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo el Quick Sort ordena un arreglo de números.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🎯',
                title: 'Paso 1: Elegir pivote',
                text: '[5, 3, 8, 4, 2] - Elegimos 5 como pivote.'
              },
              {
                symbol: '📊',
                title: 'Paso 2: Particionar',
                text: 'Menores a la izquierda: [3, 4, 2] | Pivote: 5 | Mayores: [8]'
              },
              {
                symbol: '🔄',
                title: 'Paso 3: Recursión',
                text: 'Ordenar [3, 4, 2] y [8] recursivamente.'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Arreglo ordenado',
                text: 'Resultado final: [2, 3, 4, 5, 8]'
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
              Aprende Quick Sort visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona el Quick Sort con animaciones y ejemplos 
              interactivos que hacen fácil entender este algoritmo revolucionario mira el video de Michael Sambol.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Quick sort explained'
              allowFullScreen
              src='https://www.youtube.com/embed/Hoixgm4-P4M'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Estrategias de pivote
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-arrow-left',
                title: 'Pivote primero',
                text: 'Selecciona el primer elemento. Simple pero puede ser lento.'
              },
              {
                icon: 'fi fi-rr-arrow-right',
                title: 'Pivote último',
                text: 'Selecciona el último elemento. Similar al primero.'
              },
              {
                icon: 'fi fi-rr-dice',
                title: 'Pivote aleatorio',
                text: 'Selecciona un elemento aleatorio. Excelente rendimiento.'
              },
              {
                icon: 'fi fi-rr-crosshair',
                title: 'Pivote mediana de tres',
                text: 'Usa la mediana de tres elementos. Muy eficiente.'
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

        <div className='bg-linear-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-orange-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-orange-900'>
                ¿Sabías que?
              </h2>
              <p className='text-orange-800 text-base sm:text-lg leading-relaxed'>
                Quick Sort fue desarrollado por Tony Hoare en 1959 y sigue siendo 
                uno de los algoritmos más utilizados. Su nombre proviene de su 
                velocidad, siendo hasta 2-3 veces más rápido que Merge Sort y 
                Heap Sort en la práctica, especialmente con la estrategia de 
                pivote aleatorio.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-zinc-900 rounded-3xl p-8 lg:p-10 border border-zinc-800'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Pseudocódigo de Quick Sort
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function quickSort(arreglo, inicio, fin):
    si inicio < fin:
        pivote = particionar(arreglo, inicio, fin)
        quickSort(arreglo, inicio, pivote - 1)
        quickSort(arreglo, pivote + 1, fin)

function particionar(arreglo, inicio, fin):
    pivote = arreglo[fin]  // Elegimos el último elemento como pivote
    i = inicio - 1
    
    para j desde inicio hasta fin - 1:
        si arreglo[j] <= pivote:
            i++
            intercambiar arreglo[i] y arreglo[j]
    
    intercambiar arreglo[i + 1] y arreglo[fin]
    retornar i + 1`}
            </pre>
          </div>
        </div>
      </section>
    </Fragment>
  );
}