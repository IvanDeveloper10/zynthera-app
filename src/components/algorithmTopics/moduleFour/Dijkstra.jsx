import { Fragment } from 'react';

export default function Dijkstra() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de grafos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Algoritmo de Dijkstra
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El algoritmo de Dijkstra es uno de los algoritmos más importantes en 
            ciencias de la computación. Encuentra el camino más corto desde un nodo 
            origen a todos los demás nodos en un grafo ponderado con pesos no 
            negativos, siendo fundamental en sistemas de navegación, redes y 
            optimización de rutas.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1600&auto=format&fit=crop'
            alt='Dijkstra algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-route flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Dijkstra utiliza una estrategia de "relajación" para encontrar la 
              distancia más corta, actualizando progresivamente las distancias 
              mínimas a cada nodo desde el origen.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Asigna distancia 0 al nodo origen, infinito a los demás.</li>
              <li>• Selecciona el nodo no visitado con menor distancia.</li>
              <li>• Actualiza las distancias de sus vecinos.</li>
              <li>• Marca el nodo como visitado.</li>
              <li>• Repite hasta visitar todos los nodos.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como encontrar la ruta más corta en un mapa considerando las distancias 
              entre ciudades.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-stats flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Características principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              El algoritmo de Dijkstra tiene propiedades que lo hacen único y 
              ampliamente utilizado.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Eficiente:</span> O((V + E) log V) con cola de prioridad.</li>
              <li>• <span className='font-semibold'>Pesos no negativos:</span> Requiere pesos ≥ 0.</li>
              <li>• <span className='font-semibold'>Greedy:</span> Toma decisiones óptimas locales.</li>
              <li>• <span className='font-semibold'>Camino más corto:</span> Garantiza la solución óptima.</li>
              <li>• <span className='font-semibold'>Amplio uso:</span> GPS, redes, logística.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              El estándar de oro para encontrar caminos más cortos en grafos ponderados.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo Dijkstra encuentra el camino más corto desde A hasta todos los nodos.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🎯',
                title: 'Paso 1: Inicializar',
                text: 'A=0, B=∞, C=∞, D=∞. Seleccionamos A (0).'
              },
              {
                symbol: '🔄',
                title: 'Paso 2: Relajar vecinos',
                text: 'A→B=4, A→C=2. Actualizamos B=4, C=2. Seleccionamos C (2).'
              },
              {
                symbol: '⬆️',
                title: 'Paso 3: Continuar relajando',
                text: 'C→B=1 (2+1=3 < 4), C→D=5 (2+5=7). Actualizamos B=3, D=7.'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Camino más corto',
                text: 'Distancias finales: A=0, B=3, C=2, D=7 (A→C→B→D)'
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
              Aprende Dijkstra visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona el algoritmo de Dijkstra con animaciones y 
              ejemplos interactivos que hacen fácil entender este algoritmo. Mira el video de
              fundamental. Mira el video de Michael Sambol.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title="Dijkstra's algorithm explained"
              allowFullScreen
              src='https://www.youtube.com/embed/_lHSawdgXpI'
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
                icon: 'fi fi-rr-map-marker',
                title: 'Sistemas GPS',
                text: 'Encuentra la ruta más corta entre dos ubicaciones considerando distancias y tráfico.'
              },
              {
                icon: 'fi fi-rr-network',
                title: 'Redes de computadoras',
                text: 'Determina la ruta más eficiente para transmitir datos entre routers.'
              },
              {
                icon: 'fi fi-rr-truck',
                title: 'Logística y transporte',
                text: 'Optimiza rutas de entrega y distribución de mercancías.'
              },
              {
                icon: 'fi fi-rr-smartphone',
                title: 'Aplicaciones móviles',
                text: 'Bases de Uber, Google Maps y Waze para encontrar rutas óptimas.'
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
            Pseudocódigo de Dijkstra
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function Dijkstra(grafo, origen):
    distancias = {}
    visitados = new Set()
    colaPrioridad = new PriorityQueue()
    
    // Inicializar distancias
    para cada nodo en grafo:
        distancias[nodo] = INFINITO
    distancias[origen] = 0
    
    colaPrioridad.encolar(origen, 0)
    
    mientras colaPrioridad no esté vacía:
        nodoActual = colaPrioridad.desencolar()
        
        si nodoActual en visitados:
            continuar
            
        visitados.agregar(nodoActual)
        
        para cada vecino en grafo.obtenerVecinos(nodoActual):
            distancia = distancias[nodoActual] + peso(nodoActual, vecino)
            
            si distancia < distancias[vecino]:
                distancias[vecino] = distancia
                colaPrioridad.encolar(vecino, distancia)
    
    retornar distancias`}
            </pre>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            {
              icon: '🚗',
              title: 'Google Maps',
              desc: 'Dijkstra es la base para calcular las rutas más rápidas considerando tráfico, distancias y condiciones de la carretera.',
              bg: 'from-blue-50 to-blue-100',
              border: 'border-blue-200',
              text: 'text-blue-900'
            },
            {
              icon: '🌐',
              title: 'Protocolos de enrutamiento',
              desc: 'Protocolos como OSPF usan variantes de Dijkstra para encontrar las rutas más cortas en redes de computadoras.',
              bg: 'from-green-50 to-green-100',
              border: 'border-green-200',
              text: 'text-green-900'
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
                ¿Sabías que?
              </h2>
              <p className='text-indigo-800 text-base sm:text-lg leading-relaxed'>
                El algoritmo de Dijkstra fue desarrollado por el científico 
                computacional holandés Edsger W. Dijkstra en 1956, durante solo 
                20 minutos mientras tomaba un café. Lo publicó en 1959 y desde 
                entonces se ha convertido en uno de los algoritmos más citados 
                y utilizados en informática. Originalmente fue diseñado para 
                encontrar la ruta más corta en una red de carreteras, y hoy en 
                día es la base de prácticamente todos los sistemas de navegación 
                modernos.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-yellow-50 border border-yellow-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-yellow-900 mb-4'>
            Limitación importante
          </h3>
          <p className='text-yellow-800 text-base sm:text-lg leading-relaxed'>
            El algoritmo de Dijkstra <span className='font-bold'>NO funciona</span> 
            con aristas de peso negativo. Para grafos con pesos negativos, se debe 
            usar el algoritmo de Bellman-Ford. Sin embargo, para la gran mayoría 
            de aplicaciones prácticas (GPS, redes, logística), los pesos son 
            siempre positivos, haciendo de Dijkstra la elección perfecta.
          </p>
        </div>
      </section>
    </Fragment>
  );
}