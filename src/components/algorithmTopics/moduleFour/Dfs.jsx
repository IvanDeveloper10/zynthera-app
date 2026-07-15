import { Fragment } from 'react';

export default function Dfs() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Algoritmos de grafos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            DFS - Búsqueda en Profundidad
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            La Búsqueda en Profundidad (DFS, por sus siglas en inglés) es un algoritmo 
            de recorrido de grafos que explora tan profundo como sea posible a lo 
            largo de cada rama antes de retroceder. Es fundamental para resolver 
            problemas de conectividad, detección de ciclos y ordenamiento topológico.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1600&auto=format&fit=crop'
            alt='DFS algorithm visualization'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-arrow-down flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              DFS explora un grafo siguiendo una ruta hasta el final, retrocediendo 
              cuando no hay más nodos por explorar, utilizando una pila (stack) o 
              recursión para mantener el camino.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Comienza desde un nodo raíz.</li>
              <li>• Usa una pila (Stack) o recursión.</li>
              <li>• Explora todo el camino antes de retroceder.</li>
              <li>• Marca los nodos visitados para evitar ciclos.</li>
              <li>• Complejidad O(V + E) donde V es vértices y E aristas.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como explorar un laberinto: avanzas hasta el fondo y si es un callejón 
              sin salida, retrocedes para probar otra ruta.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-puzzle flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Aplicaciones principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              DFS es extremadamente versátil y se usa en múltiples problemas.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Detección de ciclos:</span> En grafos dirigidos y no dirigidos.</li>
              <li>• <span className='font-semibold'>Ordenamiento topológico:</span> Para dependencias en proyectos.</li>
              <li>• <span className='font-semibold'>Resolución de laberintos:</span> Encontrar una salida.</li>
              <li>• <span className='font-semibold'>Análisis de redes:</span> Encontrar componentes conexos.</li>
              <li>• <span className='font-semibold'>IA y juegos:</span> Resolver puzzles y tomar decisiones.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              El algoritmo preferido cuando necesitas explorar todas las posibilidades.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo paso a paso
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo DFS recorre un grafo desde el nodo A.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🔵',
                title: 'Paso 1: Nodo inicial',
                text: 'A -> Pila: [A], Visitados: {A}'
              },
              {
                symbol: '🟢',
                title: 'Paso 2: Explorar profundidad',
                text: 'A -> B -> D -> Pila: [A, B, D], Visitados: {A, B, D}'
              },
              {
                symbol: '🟡',
                title: 'Paso 3: Retroceder',
                text: 'D no tiene vecinos, retrocedemos a B -> E'
              },
              {
                symbol: '🔴',
                title: 'Paso 4: Completar recorrido',
                text: 'Todos los nodos visitados: {A, B, D, E, C, F}'
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
              Aprende DFS visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona DFS con animaciones y ejemplos interactivos 
              que hacen fácil entender este algoritmo fundamental. Mira el video de Reducible.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='DFS algorithm explained'
              allowFullScreen
              src='https://www.youtube.com/embed/PMMc4VsIacU'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              DFS: Recursivo vs Iterativo
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-loop',
                title: 'DFS Recursivo',
                text: 'Más elegante y fácil de implementar. Usa el stack de llamadas del sistema. Puede causar desbordamiento en grafos muy grandes.'
              },
              {
                icon: 'fi fi-rr-stack',
                title: 'DFS Iterativo',
                text: 'Usa una pila explícita. Más control sobre la memoria. Evita problemas de recursión profunda.'
              },
              {
                icon: 'fi fi-rr-check-circle',
                title: 'Ventaja Recursiva',
                text: 'Código más limpio y fácil de entender. Ideal para entrevistas y problemas educativos.'
              },
              {
                icon: 'fi fi-rr-bolt',
                title: 'Ventaja Iterativa',
                text: 'Mayor control y seguridad. Recomendado para producción con datos grandes.'
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
            Pseudocódigo de DFS (Recursivo e Iterativo)
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
              <h4 className='text-white font-bold text-base mb-2'>Recursivo:</h4>
              <pre className='whitespace-pre-wrap'>
{`function DFSRecursivo(grafo, nodo, visitados):
    visitados.agregar(nodo)
    procesar(nodo)
    
    para cada vecino en grafo.obtenerVecinos(nodo):
        si vecino no está en visitados:
            DFSRecursivo(grafo, vecino, visitados)`}
              </pre>
            </div>
            <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
              <h4 className='text-white font-bold text-base mb-2'>Iterativo:</h4>
              <pre className='whitespace-pre-wrap'>
{`function DFSIterativo(grafo, nodoInicio):
    pila = new Stack()
    visitados = new Set()
    
    pila.push(nodoInicio)
    
    mientras pila no esté vacía:
        nodo = pila.pop()
        
        si nodo no está en visitados:
            visitados.agregar(nodo)
            procesar(nodo)
            
            para cada vecino en grafo.obtenerVecinos(nodo):
                si vecino no está en visitados:
                    pila.push(vecino)`}
              </pre>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: '🧩',
              title: 'Resuelve laberintos',
              desc: 'DFS es ideal para encontrar una salida en laberintos porque explora completamente un camino antes de cambiar.',
              bg: 'from-purple-50 to-purple-100',
              border: 'border-purple-200',
              text: 'text-purple-900'
            },
            {
              icon: '📊',
              title: 'Detección de ciclos',
              desc: 'Permite identificar ciclos en grafos dirigidos y no dirigidos, esencial para sistemas con dependencias.',
              bg: 'from-red-50 to-red-100',
              border: 'border-red-200',
              text: 'text-red-900'
            },
            {
              icon: '🗺️',
              title: 'Mapas y rutas',
              desc: 'Encuentra caminos en mapas, ideal para explorar rutas alternativas y encontrar soluciones.',
              bg: 'from-yellow-50 to-yellow-100',
              border: 'border-yellow-200',
              text: 'text-yellow-900'
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
                El algoritmo DFS fue utilizado por el legendario explorador noruego 
                Thor Heyerdahl para planificar sus expediciones en el océano Pacífico. 
                En la informática moderna, es fundamental para el garbage collection 
                (recolección de basura) en lenguajes como Java y Python, para 
                resolver puzzles como el Sudoku, y en sistemas de recomendación 
                para explorar relaciones entre usuarios y productos.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-blue-50 border border-blue-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-blue-900 mb-4'>
            🎯 BFS vs DFS - Cuándo usar cada uno
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='bg-white rounded-2xl p-6 border border-blue-100'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-2xl'>📊</span>
                <h4 className='text-xl font-bold text-blue-800'>BFS</h4>
              </div>
              <ul className='space-y-2 text-sm text-zinc-700'>
                <li>Encuentra el camino más corto</li>
                <li>Mejor para grafos poco profundos</li>
                <li>Usa más memoria (cola)</li>
                <li>Ideal para redes sociales</li>
              </ul>
            </div>
            <div className='bg-white rounded-2xl p-6 border border-rose-100'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-2xl'>🔍</span>
                <h4 className='text-xl font-bold text-rose-800'>DFS</h4>
              </div>
              <ul className='space-y-2 text-sm text-zinc-700'>
                <li>Explora todas las soluciones</li>
                <li>Mejor para grafos profundos</li>
                <li>Usa menos memoria (pila)</li>
                <li>Ideal para puzzles y juegos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}