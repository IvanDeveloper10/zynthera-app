import { Fragment } from 'react';

export default function Knapsack() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Problemas de optimización
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Problema de la Mochila (Knapsack)
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El problema de la mochila es uno de los problemas más clásicos en 
            optimización combinatoria. Consiste en seleccionar un conjunto de 
            objetos con pesos y valores para maximizar el valor total sin 
            exceder la capacidad de la mochila. Es fundamental en áreas como 
            logística, finanzas e inteligencia artificial.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Knapsack problem concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-suitcase flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Qué es el problema?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Dado un conjunto de objetos con peso y valor, y una mochila con 
              capacidad limitada, debes seleccionar los objetos que maximicen 
              el valor total sin exceder la capacidad.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Cada objeto tiene peso y valor.</li>
              <li>• Capacidad máxima de la mochila.</li>
              <li>• Maximizar el valor total.</li>
              <li>• No exceder la capacidad.</li>
              <li>• Dos variantes: 0/1 y fraccionario.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como hacer la maleta para un viaje: quieres llevar los objetos más 
              valiosos sin pasarte del peso permitido.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-layer-group flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Variantes del problema
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Existen dos variantes principales del problema de la mochila, cada 
              una con enfoques y soluciones diferentes.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>0/1 Knapsack:</span> Cada objeto se toma o no se toma.</li>
              <li>• <span className='font-semibold'>Fraccionario:</span> Se pueden tomar fracciones de objetos.</li>
              <li>• <span className='font-semibold'>0/1:</span> Se resuelve con programación dinámica.</li>
              <li>• <span className='font-semibold'>Fraccionario:</span> Se resuelve con algoritmo greedy.</li>
              <li>• <span className='font-semibold'>Complejidad:</span> NP-completo en 0/1.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              La elección de la variante depende del problema y las restricciones 
              del mundo real.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso (0/1 Knapsack)
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo resolver el problema de la mochila con programación dinámica.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '📦',
                title: 'Paso 1: Objetos disponibles',
                text: 'Objeto 1: peso=2, valor=3 | Objeto 2: peso=3, valor=4 | Objeto 3: peso=4, valor=5 | Capacidad=5'
              },
              {
                symbol: '📊',
                title: 'Paso 2: Crear tabla DP',
                text: 'Tabla de (n+1) × (capacidad+1) para almacenar valores máximos.'
              },
              {
                symbol: '🔄',
                title: 'Paso 3: Llenar la tabla',
                text: 'Para cada objeto y capacidad, decidir si incluir o no el objeto.'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Resultado óptimo',
                text: 'Seleccionar objetos 1 y 2: peso total=5, valor total=7 (máximo)'
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
              Aprende el problema de la mochila
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo resolver el problema de la mochila con programación 
              dinámica y greedy, con ejemplos visuales y explicaciones detalladas. Mira el video de WilliamFiset.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Knapsack problem explained'
              allowFullScreen
              src='https://www.youtube.com/embed/cJ21moQpofY'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Aplicaciones en el mundo real
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-box',
                title: 'Logística y transporte',
                text: 'Optimiza la carga de camiones y contenedores maximizando el valor de la carga.'
              },
              {
                icon: 'fi fi-rr-chart-pie',
                title: 'Inversiones financieras',
                text: 'Selecciona inversiones maximizando el retorno con capital limitado.'
              },
              {
                icon: 'fi fi-rr-vector',
                title: 'Diseño de productos',
                text: 'Selecciona características de productos con restricciones de presupuesto.'
              },
              {
                icon: 'fi fi-rr-cpu',
                title: 'Computación en la nube',
                text: 'Asigna recursos de servidores a tareas maximizando la eficiencia.'
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
            Solución con Programación Dinámica (0/1 Knapsack)
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
              <h4 className='text-white font-bold text-base mb-2'>Código en Python:</h4>
              <pre className='whitespace-pre-wrap'>
{`def knapsack01(pesos, valores, capacidad):
    n = len(valores)
    dp = [[0] * (capacidad + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacidad + 1):
            if pesos[i-1] <= w:
                dp[i][w] = max(
                    valores[i-1] + dp[i-1][w-pesos[i-1]],
                    dp[i-1][w]
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacidad]`}
              </pre>
            </div>
            <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
              <h4 className='text-white font-bold text-base mb-2'>Solución Greedy (Fraccionario):</h4>
              <pre className='whitespace-pre-wrap'>
{`def knapsackFraccionario(pesos, valores, capacidad):
    objetos = [(valores[i]/pesos[i], pesos[i], valores[i]) 
               for i in range(len(pesos))]
    objetos.sort(reverse=True)  # Ordenar por densidad de valor
    
    valorTotal = 0
    for densidad, peso, valor in objetos:
        if capacidad >= peso:
            capacidad -= peso
            valorTotal += valor
        else:
            valorTotal += densidad * capacidad
            break
    
    return valorTotal`}
              </pre>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: 'fi fi-rr-diamond',
              title: 'Valor vs Peso',
              desc: 'La clave está en la relación valor/peso. Los objetos con mejor densidad de valor son los más atractivos.',
              bg: 'from-amber-50 to-amber-100',
              border: 'border-amber-200',
              text: 'text-amber-900'
            },
            {
              icon: 'fi fi-rr-calculator',
              title: 'Programación Dinámica',
              desc: 'La solución óptima para 0/1 Knapsack requiere programación dinámica, explorando todas las combinaciones.',
              bg: 'from-blue-50 to-blue-100',
              border: 'border-blue-200',
              text: 'text-blue-900'
            },
            {
              icon: 'fi fi-rr-ruler',
              title: 'Estrategia Greedy',
              desc: 'Para la versión fraccionaria, el enfoque greedy es óptimo: tomar siempre el objeto con mayor densidad.',
              bg: 'from-green-50 to-green-100',
              border: 'border-green-200',
              text: 'text-green-900'
            }
          ].map((item) => (
            <div 
              key={item.title}
              className={`bg-linear-to-br ${item.bg} border ${item.border} rounded-3xl p-6 lg:p-8 flex flex-col gap-4`}
            >
              <div className='text-4xl'><i className={`${item.icon} text-green-600`}></i></div>
              <h3 className={`text-2xl font-bold ${item.text}`}>{item.title}</h3>
              <p className={`${item.text} leading-relaxed opacity-90`}>{item.desc}</p>
            </div>
          ))}
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
                El problema de la mochila es uno de los 21 problemas NP-completos 
                clásicos de Karp. A pesar de su simplicidad, es fundamental en 
                teoría de la complejidad. En la práctica, se resuelve con 
                programación dinámica para casos moderados (hasta unos miles 
                de objetos), pero para problemas muy grandes se usan 
                aproximaciones, algoritmos genéticos o búsqueda local. 
                Curiosamente, el problema tiene aplicaciones en el mundo real 
                que van desde la industria textil hasta la inversión en bolsa 
                de valores.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-slate-900 mb-4'>
            📊 Comparativa de soluciones
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='bg-white rounded-2xl p-4 border border-blue-200'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>💡</span>
                <h4 className='font-bold text-blue-700'>Fuerza Bruta</h4>
              </div>
              <p className='text-sm text-zinc-600'>O(2^n) - Explora todas las combinaciones. Solo para n pequeño.</p>
            </div>
            <div className='bg-white rounded-2xl p-4 border border-green-200'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>🚀</span>
                <h4 className='font-bold text-green-700'>Programación Dinámica</h4>
              </div>
              <p className='text-sm text-zinc-600'>O(n·W) - Óptimo para 0/1 Knapsack. Pseudopolinomial.</p>
            </div>
            <div className='bg-white rounded-2xl p-4 border border-amber-200'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>⚡</span>
                <h4 className='font-bold text-amber-700'>Greedy</h4>
              </div>
              <p className='text-sm text-zinc-600'>O(n log n) - Óptimo para fraccionario. Aproximado para 0/1.</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}