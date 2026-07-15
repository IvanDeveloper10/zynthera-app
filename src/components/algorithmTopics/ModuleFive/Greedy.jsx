import { Fragment } from 'react';

export default function Greedy() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Paradigmas de programación
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Algoritmos Voraces (Greedy)
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Los algoritmos voraces (greedy) toman la decisión localmente óptima en 
            cada paso con la esperanza de encontrar la solución global óptima. Son 
            rápidos, fáciles de implementar y funcionan perfectamente para problemas 
            donde la elección local también es globalmente óptima.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Greedy algorithm concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-hand-holding-box flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              El enfoque greedy toma decisiones simples y rápidas, eligiendo siempre 
              la mejor opción disponible en el momento sin considerar el futuro.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Toma la mejor decisión en cada paso.</li>
              <li>• No reconsidera decisiones previas.</li>
              <li>• Rápido y eficiente.</li>
              <li>• Fácil de implementar.</li>
              <li>• No siempre garantiza la solución óptima global.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como cuando estás en un buffet y tomas el plato más apetitoso primero, 
              sin pensar en lo que vendrá después.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-crown flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Características principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Los algoritmos greedy tienen propiedades que los hacen únicos y muy 
              útiles en ciertos contextos.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Eficiencia:</span> Generalmente O(n) o O(n log n).</li>
              <li>• <span className='font-semibold'>Simplicidad:</span> Fáciles de entender y codificar.</li>
              <li>• <span className='font-semibold'>Propiedad de elección:</span> La decisión local es global.</li>
              <li>• <span className='font-semibold'>No retrocede:</span> Una vez tomada, no se cambia.</li>
              <li>• <span className='font-semibold'>Óptimo local:</span> No siempre es global.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              La solución perfecta para problemas donde lo que parece mejor ahora 
              también lo es a largo plazo.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo: Cambio de monedas
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo el algoritmo greedy da el cambio con el menor número de monedas.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '💰',
                title: 'Paso 1: Monedas disponibles',
                text: '[25¢, 10¢, 5¢, 1¢] - Queremos dar cambio de 63¢'
              },
              {
                symbol: '🪙',
                title: 'Paso 2: Elegir la mayor',
                text: '25¢ (2 veces) → 50¢, nos sobran 13¢'
              },
              {
                symbol: '🪙',
                title: 'Paso 3: Continuar con la siguiente',
                text: '10¢ (1 vez) → 10¢, nos sobran 3¢'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Completar cambio',
                text: '5¢ (0), 1¢ (3) → Total: 2×25 + 1×10 + 3×1 = 63¢ (6 monedas)'
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
              Aprende algoritmos greedy visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funcionan los algoritmos greedy con animaciones y 
              ejemplos interactivos que hacen fácil entender esta técnica fundamental. Mira el video de GeeksforGeeks.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Greedy algorithms explained'
              allowFullScreen
              src='https://www.youtube.com/embed/HzeK7g8cD0Y'
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
                icon: 'fi fi-rr-coins',
                title: 'Cambio de monedas',
                text: 'Encuentra el mínimo número de monedas para dar un cambio (con monedas canónicas).'
              },
              {
                icon: 'fi fi-rr-calendar',
                title: 'Planificación de tareas',
                text: 'Selecciona el máximo número de tareas que no se superpongan en el tiempo.'
              },
              {
                icon: 'fi fi-rr-route',
                title: 'Camino más corto (Dijkstra)',
                text: 'Dijkstra es un algoritmo greedy que encuentra el camino más corto en grafos.'
              },
              {
                icon: 'fi fi-rr-codes',
                title: 'Códigos de Huffman',
                text: 'Algoritmo greedy para compresión de datos, asignando códigos más cortos a símbolos frecuentes.'
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
            Algoritmo Greedy para cambio de monedas
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function cambioMonedas(cantidad, monedas):
    // Ordenar monedas de mayor a menor
    monedas.ordenarDescendente()
    resultado = []
    
    para cada moneda en monedas:
        mientras cantidad >= moneda:
            cantidad -= moneda
            resultado.agregar(moneda)
    
    si cantidad == 0:
        retornar resultado
    sino:
        retornar "No se puede dar el cambio exacto"

// Ejemplo: cambioMonedas(63, [25, 10, 5, 1])
// Resultado: [25, 25, 10, 1, 1, 1]`}
            </pre>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: '⚡',
              title: 'Ultra rápido',
              desc: 'Los algoritmos greedy son extremadamente rápidos, a menudo lineales, ideales para tiempo real.',
              bg: 'from-amber-50 to-amber-100',
              border: 'border-amber-200',
              text: 'text-amber-900'
            },
            {
              icon: '🧠',
              title: 'Fáciles de implementar',
              desc: 'Su lógica simple los hace fáciles de codificar, depurar y mantener en producción.',
              bg: 'from-lime-50 to-lime-100',
              border: 'border-lime-200',
              text: 'text-lime-900'
            },
            {
              icon: '🎯',
              title: 'Perfectos para optimización',
              desc: 'Excelentes para problemas donde la solución óptima global se construye con decisiones locales.',
              bg: 'from-teal-50 to-teal-100',
              border: 'border-teal-200',
              text: 'text-teal-900'
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

        <div className='bg-linear-to-r from-rose-50 to-rose-100 border border-rose-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-rose-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-rose-900'>
                ¿Sabías que?
              </h2>
              <p className='text-rose-800 text-base sm:text-lg leading-relaxed'>
                El algoritmo greedy para el problema del cambio de monedas funciona 
                perfectamente con monedas canónicas (como las del sistema euro o 
                dólar), pero falla con conjuntos de monedas no canónicas. Por 
                ejemplo, con monedas [1, 3, 4], para dar cambio de 6¢, el greedy 
                daría 4+1+1 (3 monedas), pero la solución óptima es 3+3 (2 monedas). 
                Este es un ejemplo clásico de por qué hay que verificar que un 
                enfoque greedy realmente produce la solución óptima para cada 
                problema específico.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-red-50 border border-red-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-red-900 mb-4'>
            ⚠️ Greedy vs Programación Dinámica
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='bg-white rounded-2xl p-6 border border-red-100'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-2xl'>🟢</span>
                <h4 className='text-xl font-bold text-green-700'>Greedy</h4>
              </div>
              <ul className='space-y-2 text-sm text-zinc-700'>
                <li>Más rápido (O(n) o O(n log n))</li>
                <li>Menos memoria</li>
                <li>Fácil de implementar</li>
                <li>No siempre es óptimo</li>
                <li>Difícil de justificar</li>
              </ul>
            </div>
            <div className='bg-white rounded-2xl p-6 border border-blue-100'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-2xl'>🔵</span>
                <h4 className='text-xl font-bold text-blue-700'>Programación Dinámica</h4>
              </div>
              <ul className='space-y-2 text-sm text-zinc-700'>
                <li>Siempre encuentra el óptimo</li>
                <li>Amplio rango de problemas</li>
                <li>Resultados garantizados</li>
                <li>Más lento</li>
                <li>Más memoria</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}