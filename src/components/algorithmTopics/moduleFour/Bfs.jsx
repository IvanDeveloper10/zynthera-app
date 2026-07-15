import { Fragment } from 'react';

export default function Bfs() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de grafos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            BFS - Búsqueda en Anchura
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            La Búsqueda en Anchura (BFS, por sus siglas en inglés) es un algoritmo 
            de recorrido de grafos que explora todos los nodos de un nivel antes 
            de pasar al siguiente. Es fundamental para encontrar caminos más cortos 
            en grafos no ponderados y tiene múltiples aplicaciones prácticas.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1600&auto=format&fit=crop'
            alt='BFS algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-share-alt flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              BFS explora los nodos por niveles, utilizando una cola para mantener 
              el orden de exploración y asegurar que se visitan todos los nodos 
              a una distancia dada antes de avanzar.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Comienza desde un nodo raíz.</li>
              <li>• Usa una cola (Queue) para gestionar los nodos.</li>
              <li>• Visita todos los vecinos de un nodo antes de continuar.</li>
              <li>• Marca los nodos visitados para evitar ciclos.</li>
              <li>• Complejidad O(V + E) donde V es vértices y E aristas.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como una onda expansiva que se propaga desde el centro hacia afuera.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-route flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Aplicaciones principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              BFS es versátil y se utiliza en numerosos problemas de la vida real.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Camino más corto:</span> En grafos no ponderados.</li>
              <li>• <span className='font-semibold'>Web crawling:</span> Para indexar páginas web.</li>
              <li>• <span className='font-semibold'>Redes sociales:</span> Encontrar conexiones entre personas.</li>
              <li>• <span className='font-semibold'>GPS:</span> Calcular rutas en mapas.</li>
              <li>• <span className='font-semibold'>Juegos:</span> Resolver laberintos y puzzles.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              El algoritmo preferido para encontrar la solución más corta.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo BFS recorre un grafo desde el nodo A.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🔵',
                title: 'Paso 1: Nodo inicial',
                text: 'A -> Cola: [A], Visitados: {A}'
              },
              {
                symbol: '🟢',
                title: 'Paso 2: Nivel 1',
                text: 'A -> B, C -> Cola: [B, C], Visitados: {A, B, C}'
              },
              {
                symbol: '🟡',
                title: 'Paso 3: Nivel 2',
                text: 'B -> D, E -> Cola: [C, D, E], Visitados: {A, B, C, D, E}'
              },
              {
                symbol: '🔴',
                title: 'Paso 4: Nivel 3',
                text: 'C -> F -> Cola: [D, E, F], Visitados: {A, B, C, D, E, F}'
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
              Aprende BFS visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona BFS con animaciones y ejemplos interactivos 
              que hacen fácil entender este algoritmo fundamental. Mira el video de WilliamFiset.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='BFS algorithm explained'
              allowFullScreen
              src='https://www.youtube.com/embed/oDqjPvD54Ss'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              BFS vs DFS
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-arrows-h',
                title: 'BFS - Búsqueda en Anchura',
                text: 'Explora por niveles. Usa cola. Encuentra caminos más cortos. Mayor uso de memoria.'
              },
              {
                icon: 'fi fi-rr-arrows-v',
                title: 'DFS - Búsqueda en Profundidad',
                text: 'Explora en profundidad. Usa pila. No garantiza camino más corto. Menor uso de memoria.'
              },
              {
                icon: 'fi fi-rr-check-circle',
                title: 'Cuándo usar BFS',
                text: 'Cuando necesitas el camino más corto o la distancia mínima entre nodos.'
              },
              {
                icon: 'fi fi-rr-bolt',
                title: 'Cuándo usar DFS',
                text: 'Cuando necesitas explorar todas las soluciones o el espacio de memoria es limitado.'
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
            Pseudocódigo de BFS
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function BFS(grafo, nodoInicio):
    cola = new Queue()
    visitados = new Set()
    
    // Marcar el nodo inicial como visitado y encolarlo
    visitados.agregar(nodoInicio)
    cola.encolar(nodoInicio)
    
    mientras cola no esté vacía:
        nodo = cola.desencolar()
        procesar(nodo)  // Aquí puedes realizar la operación deseada
        
        para cada vecino en grafo.obtenerVecinos(nodo):
            si vecino no está en visitados:
                visitados.agregar(vecino)
                cola.encolar(vecino)`}
            </pre>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {[
            {
              icon: '🌐',
              title: 'Web Crawling',
              desc: 'Los motores de búsqueda usan BFS para indexar páginas web, explorando enlaces por niveles.',
              bg: 'from-blue-50 to-blue-100',
              border: 'border-blue-200',
              text: 'text-blue-900'
            },
            {
              icon: '📱',
              title: 'Redes Sociales',
              desc: 'LinkedIn usa BFS para encontrar conexiones de segundo y tercer grado entre usuarios.',
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

        <div className='bg-linear-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-amber-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-amber-900'>
                ¿Sabías que?
              </h2>
              <p className='text-amber-800 text-base sm:text-lg leading-relaxed'>
                BFS es el algoritmo base para encontrar la ruta más corta en Google 
                Maps cuando no hay tráfico. También se utiliza en juegos para 
                encontrar el camino más corto entre dos puntos, en redes de 
                computadoras para encontrar la ruta más corta entre routers, y 
                en inteligencia artificial para resolver problemas como el 
                cubo de Rubik o el puzzle de 15 piezas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}