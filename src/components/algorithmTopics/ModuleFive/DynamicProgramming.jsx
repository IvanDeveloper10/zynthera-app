import { Fragment } from 'react';

export default function DynamicProgramming() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Paradigmas de programación
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Programación Dinámica
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            La programación dinámica es una técnica de optimización que resuelve 
            problemas complejos dividiéndolos en subproblemas más simples, 
            almacenando las soluciones para evitar recalcularlas. Es fundamental 
            para resolver problemas de optimización donde las soluciones óptimas 
            se construyen a partir de soluciones óptimas de subproblemas.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Dynamic programming concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-diagram-project flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              La programación dinámica se basa en dos principios fundamentales: 
              subestructura óptima y superposición de subproblemas.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Divide el problema en subproblemas más pequeños.</li>
              <li>• Resuelve cada subproblema una sola vez.</li>
              <li>• Almacena los resultados para reutilizarlos.</li>
              <li>• Combina soluciones para obtener la óptima global.</li>
              <li>• Reduce exponencial a tiempo polinomial.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como construir una torre con bloques: usas bloques más pequeños que ya 
              has construido para hacer estructuras más grandes.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-memory flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Enfoques principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Existen dos formas de implementar programación dinámica, cada una con 
              sus ventajas y casos de uso.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Top-down (Memoización):</span> Recursivo con caché.</li>
              <li>• <span className='font-semibold'>Bottom-up (Tabulación):</span> Iterativo con tabla.</li>
              <li>• <span className='font-semibold'>Memoización:</span> Más fácil de implementar.</li>
              <li>• <span className='font-semibold'>Tabulación:</span> Más eficiente en espacio.</li>
              <li>• <span className='font-semibold'>Ambos:</span> Misma complejidad temporal.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              La elección entre enfoques depende del problema y las preferencias 
              del programador.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo: Secuencia de Fibonacci
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Compara cómo la programación dinámica optimiza el cálculo de Fibonacci.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🐌',
                title: 'Recursivo simple',
                text: 'fib(n) = fib(n-1) + fib(n-2) - O(2^n) exponencial'
              },
              {
                symbol: '📝',
                title: 'Memoización (Top-down)',
                text: 'Almacena resultados en caché - O(n) lineal'
              },
              {
                symbol: '📊',
                title: 'Tabulación (Bottom-up)',
                text: 'Calcula desde abajo hacia arriba - O(n) lineal'
              },
              {
                symbol: '💡',
                title: 'Optimización de espacio',
                text: 'Solo guarda dos valores anteriores - O(1) memoria'
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
              Aprende programación dinámica visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona la programación dinámica con animaciones y 
              ejemplos interactivos que hacen fácil entender esta poderosa técnica. Mira el video de freeCodeCamp.org.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Dynamic programming explained'
              allowFullScreen
              src='https://www.youtube.com/embed/oBt53YbR9Kk'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Problemas clásicos
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-coins',
                title: 'Cambio de monedas',
                text: 'Encuentra el número mínimo de monedas para formar una cantidad.'
              },
              {
                icon: 'fi fi-rr-suitcase',
                title: 'Problema de la mochila',
                text: 'Maximiza el valor de objetos que caben en una mochila con capacidad limitada.'
              },
              {
                icon: 'fi fi-rr-text',
                title: 'Subsecuencia común más larga',
                text: 'Encuentra la secuencia de caracteres más larga común a dos strings.'
              },
              {
                icon: 'fi fi-rr-stairs',
                title: 'Escaleras (Subir escalones)',
                text: 'Encuentra el número de formas de subir escaleras con pasos de 1 o 2.'
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
            Fibonacci con Programación Dinámica
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
              <h4 className='text-white font-bold text-base mb-2'>Memoización (Top-down):</h4>
              <pre className='whitespace-pre-wrap'>
{`function fibMemo(n, memo = {}):
    si n en memo:
        retornar memo[n]
    si n <= 1:
        retornar n
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    retornar memo[n]

// Complejidad: O(n) tiempo, O(n) espacio`}
              </pre>
            </div>
            <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
              <h4 className='text-white font-bold text-base mb-2'>Tabulación (Bottom-up):</h4>
              <pre className='whitespace-pre-wrap'>
{`function fibTab(n):
    si n <= 1:
        retornar n
    dp = [0] * (n + 1)
    dp[0] = 0
    dp[1] = 1
    para i desde 2 hasta n:
        dp[i] = dp[i-1] + dp[i-2]
    retornar dp[n]

// Complejidad: O(n) tiempo, O(n) espacio`}
              </pre>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: '🚀',
              title: 'Optimización exponencial',
              desc: 'Reduce problemas de O(2^n) a O(n²) o O(n³), haciendo posibles soluciones que antes eran inviables.',
              bg: 'from-purple-50 to-purple-100',
              border: 'border-purple-200',
              text: 'text-purple-900'
            },
            {
              icon: '💾',
              title: 'Memorización inteligente',
              desc: 'Almacena resultados intermedios para reutilizarlos, evitando recalcular lo que ya se ha resuelto.',
              bg: 'from-pink-50 to-pink-100',
              border: 'border-pink-200',
              text: 'text-pink-900'
            },
            {
              icon: '🧩',
              title: 'Divide y optimiza',
              desc: 'Combina la estrategia de divide y vencerás con la optimización de almacenar resultados.',
              bg: 'from-indigo-50 to-indigo-100',
              border: 'border-indigo-200',
              text: 'text-indigo-900'
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
                El término "programación dinámica" fue acuñado por Richard Bellman 
                en la década de 1950. Lo eligió porque sonaba impresionante y 
                así podía obtener financiamiento para sus investigaciones en la 
                RAND Corporation. Bellman necesitaba un nombre que sonara bien 
                para un proyecto del gobierno, y "dinámico" era una palabra que 
                los burócratas encontraban atractiva, aunque en realidad su 
                enfoque no tiene nada que ver con la programación tradicional.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-emerald-50 border border-emerald-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-emerald-900 mb-4'>
            🎯 Cuándo usar Programación Dinámica
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='bg-white rounded-2xl p-4 border border-emerald-100'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>✅</span>
                <h4 className='font-bold text-emerald-800'>Condiciones necesarias</h4>
              </div>
              <ul className='space-y-1 text-sm text-zinc-700'>
                <li>• Subestructura óptima</li>
                <li>• Superposición de subproblemas</li>
                <li>• Problema de optimización</li>
              </ul>
            </div>
            <div className='bg-white rounded-2xl p-4 border border-emerald-100'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>📊</span>
                <h4 className='font-bold text-emerald-800'>Ventajas clave</h4>
              </div>
              <ul className='space-y-1 text-sm text-zinc-700'>
                <li>• Reduce tiempo exponencial</li>
                <li>• Solución óptima garantizada</li>
                <li>• Amplio rango de aplicaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}