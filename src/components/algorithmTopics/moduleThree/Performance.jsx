import { Fragment } from 'react';

export default function Performance() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Análisis de rendimiento
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Comparativa de algoritmos de ordenamiento
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Compara el rendimiento de los algoritmos de ordenamiento más populares 
            en diferentes escenarios. Esta guía te ayudará a elegir el algoritmo 
            correcto según tus necesidades y el tamaño de tus datos.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
            alt='Performance comparison chart'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-chart-line flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Complejidad temporal
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              La complejidad temporal mide cómo el tiempo de ejecución crece con 
              el tamaño de la entrada (n).
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>O(n²):</span> Bubble Sort, Insertion Sort (peor caso).</li>
              <li>• <span className='font-semibold'>O(n log n):</span> Merge Sort, Quick Sort (promedio).</li>
              <li>• <span className='font-semibold'>O(n):</span> Mejor caso de Insertion Sort.</li>
              <li>• <span className='font-semibold'>O(n²) peor caso:</span> Quick Sort con mal pivote.</li>
              <li>• <span className='font-semibold'>O(n log n):</span> Siempre en Merge Sort.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              La notación Big O nos ayuda a entender el rendimiento teórico.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-memory flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Complejidad espacial
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              La complejidad espacial mide cuánta memoria adicional requiere el 
              algoritmo para ejecutarse.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>O(1):</span> Bubble Sort, Insertion Sort, Quick Sort.</li>
              <li>• <span className='font-semibold'>O(n):</span> Merge Sort (requiere arreglo auxiliar).</li>
              <li>• <span className='font-semibold'>O(log n):</span> Quick Sort (memoria del stack recursivo).</li>
              <li>• <span className='font-semibold'>In-place:</span> Ordenan sin memoria adicional significativa.</li>
              <li>• <span className='font-semibold'>Estables:</span> Merge Sort, Insertion Sort.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              La memoria disponible puede ser un factor crítico en ciertas aplicaciones.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Tabla comparativa
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Comparación detallada de todos los algoritmos de ordenamiento.
            </p>
          </div>

          <div className='overflow-x-auto rounded-3xl border border-zinc-200 bg-white'>
            <table className='w-full text-left'>
              <thead>
                <tr className='bg-zinc-100 border-b border-zinc-200'>
                  <th className='px-6 py-4 font-bold text-zinc-700'>Algoritmo</th>
                  <th className='px-6 py-4 font-bold text-zinc-700'>Mejor caso</th>
                  <th className='px-6 py-4 font-bold text-zinc-700'>Caso promedio</th>
                  <th className='px-6 py-4 font-bold text-zinc-700'>Peor caso</th>
                  <th className='px-6 py-4 font-bold text-zinc-700'>Memoria</th>
                  <th className='px-6 py-4 font-bold text-zinc-700'>Estable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Bubble Sort',
                    best: 'O(n)',
                    avg: 'O(n²)',
                    worst: 'O(n²)',
                    memory: 'O(1)',
                    stable: '✅ Sí'
                  },
                  {
                    name: 'Insertion Sort',
                    best: 'O(n)',
                    avg: 'O(n²)',
                    worst: 'O(n²)',
                    memory: 'O(1)',
                    stable: '✅ Sí'
                  },
                  {
                    name: 'Merge Sort',
                    best: 'O(n log n)',
                    avg: 'O(n log n)',
                    worst: 'O(n log n)',
                    memory: 'O(n)',
                    stable: '✅ Sí'
                  },
                  {
                    name: 'Quick Sort',
                    best: 'O(n log n)',
                    avg: 'O(n log n)',
                    worst: 'O(n²)',
                    memory: 'O(log n)',
                    stable: '❌ No'
                  }
                ].map((algo, index) => (
                  <tr 
                    key={algo.name}
                    className={`border-b border-zinc-100 hover:bg-green-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'
                    }`}
                  >
                    <td className='px-6 py-4 font-semibold text-zinc-800'>{algo.name}</td>
                    <td className='px-6 py-4 text-zinc-600'>{algo.best}</td>
                    <td className='px-6 py-4 text-zinc-600'>{algo.avg}</td>
                    <td className='px-6 py-4 text-zinc-600'>{algo.worst}</td>
                    <td className='px-6 py-4 text-zinc-600'>{algo.memory}</td>
                    <td className='px-6 py-4 text-zinc-600'>{algo.stable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className='overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950'>
          <div className='p-6 sm:p-8 lg:p-10 flex flex-col gap-5'>
            <div className='flex items-center gap-3 text-green-400 font-semibold'>
              <i className='fi fi-rr-play'></i>
              Recurso audiovisual
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white'>
              Visualización de rendimiento
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Observa cómo se comportan los diferentes algoritmos en tiempo real 
              con animaciones y comparativas visuales mira el video de Timo Bingman.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Sorting algorithms performance comparison'
              allowFullScreen
              src='https://www.youtube.com/embed/kPRA0W1kECg'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Cuándo usar cada algoritmo
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-bubbles',
                title: 'Bubble Sort',
                text: 'Solo para aprendizaje. No recomendado para producción.'
              },
              {
                icon: 'fi fi-rr-playing-cards',
                title: 'Insertion Sort',
                text: 'Excelente para conjuntos pequeños o casi ordenados.'
              },
              {
                icon: 'fi fi-rr-merge',
                title: 'Merge Sort',
                text: 'Ideal para grandes conjuntos y datos enlazados.'
              },
              {
                icon: 'fi fi-rr-bolt',
                title: 'Quick Sort',
                text: 'El más rápido en la práctica. Perfecto para la mayoría de casos.'
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

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: '🚀',
              title: 'Alta velocidad',
              desc: 'Quick Sort es el más rápido en promedio para la mayoría de los conjuntos de datos.',
              bg: 'from-blue-50 to-blue-100',
              border: 'border-blue-200',
              text: 'text-blue-900'
            },
            {
              icon: '💾',
              title: 'Baja memoria',
              desc: 'Quick Sort e Insertion Sort requieren poca memoria adicional, ideales para sistemas embebidos.',
              bg: 'from-green-50 to-green-100',
              border: 'border-green-200',
              text: 'text-green-900'
            },
            {
              icon: '🔄',
              title: 'Alta estabilidad',
              desc: 'Merge Sort e Insertion Sort mantienen el orden relativo de elementos iguales, perfecto para datos estructurados.',
              bg: 'from-purple-50 to-purple-100',
              border: 'border-purple-200',
              text: 'text-purple-900'
            }
          ].map((item) => (
            <div 
              key={item.title}
              className={`bg-linear-to-br ${item.bg} border ${item.border} rounded-3xl p-6 lg:p-8 flex flex-col gap-4`}
            >
              <div className='text-4xl'>{item.icon}</div>
              <h3 className={`text-2xl font-bold ${item.text}`}>{item.title}</h3>
              <p className={`${item.text} leading-relaxed opacity-90`}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className='bg-linear-to-r from-indigo-50 to-indigo-100 border border-indigo-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-indigo-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-indigo-900'>
                Consejo práctico
              </h2>
              <p className='text-indigo-800 text-base sm:text-lg leading-relaxed'>
                Para la mayoría de las aplicaciones, Quick Sort ofrece el mejor 
                rendimiento general. Sin embargo, si necesitas un algoritmo estable 
                y predecible, Merge Sort es la mejor opción. Para conjuntos pequeños 
                o datos casi ordenados, Insertion Sort puede superar a algoritmos 
                más complejos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}