import { Fragment } from 'react';

export default function MergeSort() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de ordenamiento
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Merge Sort
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El Merge Sort es un algoritmo de ordenamiento eficiente basado en la 
            técnica de divide y vencerás. Divide el arreglo en mitades, ordena cada 
            mitad recursivamente y luego las fusiona (merge) para obtener el arreglo 
            final ordenado, garantizando un rendimiento consistente.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1600&auto=format&fit=crop'
            alt='Merge sort algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-merge flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Merge Sort divide el problema en subproblemas más pequeños, los resuelve 
              y combina las soluciones para obtener el resultado final.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Divide el arreglo en dos mitades.</li>
              <li>• Ordena recursivamente cada mitad.</li>
              <li>• Fusiona (merge) las mitades ordenadas.</li>
              <li>• Continúa hasta que todo esté ordenado.</li>
              <li>• Complejidad O(n log n) siempre.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como si juntaras dos barajas ordenadas en una sola manteniendo el orden.
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
              Merge Sort es uno de los algoritmos más robustos y consistentes en 
              términos de rendimiento.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Estable:</span> Mantiene el orden de elementos iguales.</li>
              <li>• <span className='font-semibold'>Consistente:</span> Siempre O(n log n) en todos los casos.</li>
              <li>• <span className='font-semibold'>Divide y vencerás:</span> Estrategia recursiva eficiente.</li>
              <li>• <span className='font-semibold'>O(n) memoria:</span> Requiere espacio adicional para el merge.</li>
              <li>• <span className='font-semibold'>Paralelizable:</span> Las mitades se pueden procesar en paralelo.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Ideal para grandes conjuntos de datos donde el rendimiento predecible 
              es crucial.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo el Merge Sort ordena un arreglo de números.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '✂️',
                title: 'Paso 1: Dividir',
                text: '[5, 3, 8, 4, 2] → [5, 3] y [8, 4, 2]'
              },
              {
                symbol: '🔄',
                title: 'Paso 2: Ordenar mitades',
                text: '[3, 5] y [2, 4, 8] después de ordenar recursivamente'
              },
              {
                symbol: '🔗',
                title: 'Paso 3: Fusionar (Merge)',
                text: 'Combinamos [3, 5] y [2, 4, 8] comparando elementos'
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
              Aprende Merge Sort visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona el Merge Sort con animaciones y ejemplos 
              interactivos que hacen fácil entender este poderoso algoritmo mira el video de Michael Sambol.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Merge sort explained'
              allowFullScreen
              src='https://www.youtube.com/embed/4VqmGXwpLqc'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Comparación de rendimiento
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-chart-line',
                title: 'Mejor caso',
                text: 'O(n log n) - Excelente rendimiento consistente.'
              },
              {
                icon: 'fi fi-rr-chart-bar',
                title: 'Caso promedio',
                text: 'O(n log n) - Mantiene el rendimiento en cualquier escenario.'
              },
              {
                icon: 'fi fi-rr-chart-down',
                title: 'Peor caso',
                text: 'O(n log n) - Nunca degrada su rendimiento.'
              },
              {
                icon: 'fi fi-rr-memory',
                title: 'Uso de memoria',
                text: 'O(n) - Necesita espacio adicional para el merge.'
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

        <div className='bg-linear-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-purple-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-purple-900'>
                ¿Sabías que?
              </h2>
              <p className='text-purple-800 text-base sm:text-lg leading-relaxed'>
                Merge Sort es el algoritmo de ordenamiento estándar utilizado en 
                muchos lenguajes de programación para ordenar listas enlazadas, 
                ya que su rendimiento es predecible y no depende de cómo estén 
                distribuidos los datos. Además, es fácilmente paralelizable, 
                aprovechando múltiples núcleos de CPU.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-zinc-900 rounded-3xl p-8 lg:p-10 border border-zinc-800'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Pseudocódigo de Merge Sort
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function mergeSort(arreglo):
    si longitud(arreglo) <= 1:
        retornar arreglo
    
    medio = longitud(arreglo) / 2
    izquierda = mergeSort(arreglo[0:medio])
    derecha = mergeSort(arreglo[medio:longitud])
    
    retornar merge(izquierda, derecha)

function merge(izquierda, derecha):
    resultado = []
    i = j = 0
    
    mientras i < longitud(izquierda) y j < longitud(derecha):
        si izquierda[i] <= derecha[j]:
            agregar izquierda[i] a resultado
            i++
        sino:
            agregar derecha[j] a resultado
            j++
    
    agregar elementos restantes de izquierda a resultado
    agregar elementos restantes de derecha a resultado
    
    retornar resultado`}
            </pre>
          </div>
        </div>
      </section>
    </Fragment>
  );
}