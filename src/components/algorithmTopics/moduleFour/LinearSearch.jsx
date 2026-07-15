import { Fragment } from 'react';

export default function LinearSearch() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de búsqueda
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Búsqueda Lineal
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            La búsqueda lineal o secuencial es el algoritmo de búsqueda más simple 
            y fundamental. Recorre cada elemento de una estructura de datos 
            secuencialmente hasta encontrar el elemento buscado o llegar al final, 
            siendo la base para entender algoritmos más complejos.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Linear search visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-search flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              La búsqueda lineal revisa cada elemento de la estructura en orden 
              hasta encontrar el valor deseado o recorrer todo el conjunto.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Empieza desde el primer elemento.</li>
              <li>• Compara cada elemento con el objetivo.</li>
              <li>• Si encuentra coincidencia, retorna la posición.</li>
              <li>• Si llega al final, el elemento no existe.</li>
              <li>• Complejidad O(n) en el peor caso.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como buscar un libro en una estantería revisando uno por uno.
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
              Aunque es simple, la búsqueda lineal tiene propiedades que la hacen 
              útil en ciertos escenarios.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Simple:</span> Fácil de entender e implementar.</li>
              <li>• <span className='font-semibold'>Universal:</span> Funciona en cualquier estructura.</li>
              <li>• <span className='font-semibold'>No requiere orden:</span> Puede usarse en datos desordenados.</li>
              <li>• <span className='font-semibold'>O(n):</span> Tiempo proporcional al tamaño de datos.</li>
              <li>• <span className='font-semibold'>O(1) memoria:</span> No requiere espacio adicional.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Perfecta para conjuntos pequeños o cuando los datos no están ordenados.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo la búsqueda lineal encuentra un elemento en un arreglo.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🎯',
                title: 'Paso 1: Definir objetivo',
                text: 'Buscamos el número 7 en [3, 8, 2, 7, 5]'
              },
              {
                symbol: '👆',
                title: 'Paso 2: Revisar posición 0',
                text: '¿3 es igual a 7? No. Seguimos buscando.'
              },
              {
                symbol: '👆',
                title: 'Paso 3: Revisar posición 3',
                text: '¿7 es igual a 7? ¡Sí! Encontrado en índice 3.'
              },
              {
                symbol: '❌',
                title: 'Paso 4: Elemento no encontrado',
                text: 'Si llegamos al final, el elemento no existe en el arreglo.'
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
              Aprende búsqueda lineal visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona la búsqueda lineal con animaciones y ejemplos 
              interactivos que hacen fácil entender este algoritmo fundamental mira el video de ProgramaTutos.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/PhoUgVwnLjs?si=8qYYOFDytUagajGi" title='Lineal Search' allowfullscreen></iframe>
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
                icon: 'fi fi-rr-list',
                title: 'Listas pequeñas',
                text: 'Ideal para buscar en arrays de tamaño reducido.'
              },
              {
                icon: 'fi fi-rr-database',
                title: 'Datos desordenados',
                text: 'Único método cuando no se puede ordenar la información.'
              },
              {
                icon: 'fi fi-rr-stream',
                title: 'Búsqueda en tiempo real',
                text: 'Útil para buscar en flujos de datos que llegan continuamente.'
              },
              {
                icon: 'fi fi-rr-cubes',
                title: 'Subrutina en algoritmos',
                text: 'Base para otros algoritmos de búsqueda más complejos.'
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

        <div className='bg-zinc-900 rounded-3xl p-8 lg:p-10 border border-zinc-800'>
          <h3 className='text-2xl font-bold text-white mb-4'>
            Implementación en código
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function busquedaLineal(arreglo, objetivo):
    // Recorremos el arreglo elemento por elemento
    para i desde 0 hasta longitud(arreglo) - 1:
        si arreglo[i] es igual a objetivo:
            retornar i  // Elemento encontrado
            
    retornar -1  // Elemento no encontrado

// Ejemplo de uso
arreglo = [3, 8, 2, 7, 5]
resultado = busquedaLineal(arreglo, 7)
// resultado será 3 (la posición del número 7)`}
            </pre>
          </div>
        </div>

        <div className='bg-linear-to-r from-teal-50 to-teal-100 border border-teal-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-teal-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-teal-900'>
                ¿Sabías que?
              </h2>
              <p className='text-teal-800 text-base sm:text-lg leading-relaxed'>
                Aunque la búsqueda lineal es el algoritmo más simple, sigue siendo 
                ampliamente utilizada en sistemas modernos. Por ejemplo, en 
                JavaScript, el método indexOf() de los arrays implementa una 
                búsqueda lineal, y muchos motores de bases de datos la utilizan 
                para conjuntos pequeños donde el overhead de índices más 
                complejos no se justifica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}