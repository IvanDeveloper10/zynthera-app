import { Fragment } from 'react';

export default function BubbleSort() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de ordenamiento
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Bubble Sort
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El Bubble Sort es uno de los algoritmos de ordenamiento más simples y 
            didácticos. Funciona comparando pares de elementos adyacentes y 
            intercambiándolos si están en el orden incorrecto, haciendo que los 
            elementos más grandes "burbujeen" hacia el final del arreglo.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1600&auto=format&fit=crop'
            alt='Bubble sort algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-arrow-up flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              El algoritmo recorre el arreglo múltiples veces, comparando elementos 
              adyacentes y moviendo los más grandes hacia el final.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Compara elementos adyacentes.</li>
              <li>• Intercambia si están desordenados.</li>
              <li>• El elemento más grande sube al final.</li>
              <li>• Se repite hasta ordenar todo.</li>
              <li>• Complejidad O(n²) en el peor caso.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como cuando ordenas burbujas en un vaso: las más grandes suben a la 
              superficie.
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
              Aunque no es el algoritmo más eficiente, es excelente para aprender 
              conceptos básicos de ordenamiento.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Estable:</span> Mantiene el orden de elementos iguales.</li>
              <li>• <span className='font-semibold'>In-place:</span> No requiere memoria adicional.</li>
              <li>• <span className='font-semibold'>Adaptativo:</span> Puede detectar si ya está ordenado.</li>
              <li>• <span className='font-semibold'>Didáctico:</span> Fácil de entender e implementar.</li>
              <li>• <span className='font-semibold'>O(n²):</span> Promedio y peor caso.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Perfecto para empezar a entender cómo funcionan los algoritmos de 
              ordenamiento.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo el Bubble Sort ordena un arreglo de números.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🔢',
                title: 'Paso 1: Arreglo inicial',
                text: '[5, 3, 8, 4, 2] - Comparamos 5 y 3.'
              },
              {
                symbol: '🔄',
                title: 'Paso 2: Intercambio',
                text: '5 > 3, intercambiamos: [3, 5, 8, 4, 2]'
              },
              {
                symbol: '⬆️',
                title: 'Paso 3: Burbujeo',
                text: 'El 8 sube al final: [3, 5, 4, 2, 8]'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Arreglo ordenado',
                text: 'Repetimos hasta obtener: [2, 3, 4, 5, 8]'
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
              Aprende Bubble Sort visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona el Bubble Sort con animaciones y ejemplos 
              interactivos que hacen fácil entender este algoritmo clásico mira el video de Michael Sambol.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Bubble sort explained'
              allowFullScreen
              src='https://www.youtube.com/embed/xli_FI7CuzA'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Implementación en código
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-code',
                title: 'Bubble Sort básico',
                text: 'Implementación simple con dos ciclos anidados.'
              },
              {
                icon: 'fi fi-rr-optimization',
                title: 'Optimización',
                text: 'Agrega una bandera para detectar arreglos ordenados.'
              },
              {
                icon: 'fi fi-rr-chart',
                title: 'Análisis de complejidad',
                text: 'Estudia el rendimiento con diferentes conjuntos de datos.'
              },
              {
                icon: 'fi fi-rr-play-alt',
                title: 'Visualización interactiva',
                text: 'Crea una animación para ver el algoritmo en acción.'
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

        <div className='bg-linear-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-blue-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-blue-900'>
                ¿Sabías que?
              </h2>
              <p className='text-blue-800 text-base sm:text-lg leading-relaxed'>
                El Bubble Sort es uno de los algoritmos más antiguos y se usa 
                principalmente con fines educativos. Aunque no es eficiente para 
                grandes conjuntos de datos, su simplicidad lo hace perfecto para 
                entender los fundamentos del ordenamiento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}