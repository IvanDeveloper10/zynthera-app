import { Fragment } from 'react';

export default function BinarySearch() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de búsqueda
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Búsqueda Binaria
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            La búsqueda binaria es un algoritmo eficiente que encuentra un elemento 
            en un conjunto ordenado dividiendo repetidamente el intervalo de 
            búsqueda a la mitad. Es mucho más rápido que la búsqueda lineal para 
            conjuntos grandes, reduciendo la complejidad de O(n) a O(log n).
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Binary search visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-search-alt flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              La búsqueda binaria divide el espacio de búsqueda a la mitad en cada 
              paso, comparando el elemento objetivo con el punto medio.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Requiere datos ordenados.</li>
              <li>• Encuentra el elemento medio del intervalo.</li>
              <li>• Compara con el valor buscado.</li>
              <li>• Descarta la mitad donde no puede estar.</li>
              <li>• Complejidad O(log n) en todos los casos.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como buscar una palabra en un diccionario: abres por la mitad y 
              decides si buscar en la izquierda o derecha.
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
              La búsqueda binaria es uno de los algoritmos más eficientes y 
              ampliamente utilizados en informática.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Eficiente:</span> O(log n) tiempo de ejecución.</li>
              <li>• <span className='font-semibold'>Rápida:</span> Miles de veces más rápida que lineal.</li>
              <li>• <span className='font-semibold'>Requiere orden:</span> Datos deben estar pre-ordenados.</li>
              <li>• <span className='font-semibold'>Recursiva o iterativa:</span> Ambas implementaciones posibles.</li>
              <li>• <span className='font-semibold'>O(1) memoria:</span> Espacio constante en versión iterativa.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              El estándar de oro para búsquedas en conjuntos ordenados.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo la búsqueda binaria encuentra un elemento en un arreglo ordenado.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🎯',
                title: 'Paso 1: Definir objetivos',
                text: 'Buscar 7 en [1, 3, 5, 7, 9, 11, 13]'
              },
              {
                symbol: '📐',
                title: 'Paso 2: Encontrar medio',
                text: 'Inicio=0, Fin=6, Medio=3 → valor=7'
              },
              {
                symbol: '✅',
                title: 'Paso 3: Coincidencia',
                text: '¡Encontrado! 7 está en la posición 3.'
              },
              {
                symbol: '🔄',
                title: 'Paso 4: Si no se encuentra',
                text: 'Se ajustan límites y se repite hasta encontrar o terminar.'
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
              Aprende búsqueda binaria visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona la búsqueda binaria con animaciones y ejemplos 
              interactivos que hacen fácil entender este algoritmo fundamental. Mira el video de Fireship
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Binary search explained'
              allowFullScreen
              src='https://www.youtube.com/embed/MFhxShGxHWc'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Comparación: Lineal vs Binaria
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-arrow-right',
                title: 'Búsqueda Lineal',
                text: 'O(n) - Revisa uno por uno. Simple pero lenta para grandes conjuntos.'
              },
              {
                icon: 'fi fi-rr-chart-pie',
                title: 'Búsqueda Binaria',
                text: 'O(log n) - Divide y conquista. Rápida y eficiente.'
              },
              {
                icon: 'fi fi-rr-check-circle',
                title: 'Ventaja Lineal',
                text: 'No requiere datos ordenados. Funciona en cualquier lista.'
              },
              {
                icon: 'fi fi-rr-bolt',
                title: 'Ventaja Binaria',
                text: 'Exponencialmente más rápida para grandes conjuntos de datos.'
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
{`function busquedaBinaria(arreglo, objetivo):
    inicio = 0
    fin = longitud(arreglo) - 1
    
    mientras inicio <= fin:
        medio = (inicio + fin) / 2  // División entera
        
        si arreglo[medio] es igual a objetivo:
            retornar medio  // Elemento encontrado
            
        si arreglo[medio] < objetivo:
            inicio = medio + 1  // Buscar en la mitad derecha
        sino:
            fin = medio - 1  // Buscar en la mitad izquierda
    
    retornar -1  // Elemento no encontrado

// Ejemplo de uso
arreglo = [1, 3, 5, 7, 9, 11, 13]
resultado = busquedaBinaria(arreglo, 7)
// resultado será 3 (la posición del número 7)`}
            </pre>
          </div>
        </div>

        <div className='bg-linear-to-r from-cyan-50 to-cyan-100 border border-cyan-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-cyan-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-cyan-900'>
                ¿Sabías que?
              </h2>
              <p className='text-cyan-800 text-base sm:text-lg leading-relaxed'>
                La búsqueda binaria fue descrita por primera vez en 1946, pero 
                el primer algoritmo correcto para todos los casos no se publicó 
                hasta 1962. Hoy en día, está implementada en prácticamente todos 
                los lenguajes de programación modernos (como bisect en Python, 
                Arrays.binarySearch en Java, o binary_search en C++) y es 
                fundamental en bases de datos y sistemas de archivos.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-blue-50 border border-blue-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-blue-900 mb-4'>
            🎯 Ventaja clave
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='bg-white rounded-2xl p-6'>
              <div className='text-4xl font-black text-blue-600'>10</div>
              <p className='text-sm text-zinc-600'>Elementos</p>
              <div className='mt-2 text-lg font-semibold text-zinc-800'>Lineal: 10 pasos</div>
              <div className='text-lg font-semibold text-green-600'>Binaria: 4 pasos</div>
            </div>
            <div className='bg-white rounded-2xl p-6'>
              <div className='text-4xl font-black text-blue-600'>1,000,000</div>
              <p className='text-sm text-zinc-600'>Elementos</p>
              <div className='mt-2 text-lg font-semibold text-zinc-800'>Lineal: 1,000,000 pasos</div>
              <div className='text-lg font-semibold text-green-600'>Binaria: 20 pasos</div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}