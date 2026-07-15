import { Fragment } from 'react';

export default function Backtracking() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Paradigmas de programación
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Backtracking
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            El backtracking es una técnica algorítmica que explora todas las 
            soluciones posibles de manera sistemática, retrocediendo cuando una 
            opción no conduce a una solución válida. Es la base para resolver 
            problemas de satisfacción de restricciones, puzzles y optimización 
            combinatoria.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop'
            alt='Backtracking algorithm concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-undo flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Cómo funciona?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              El backtracking explora el espacio de soluciones construyendo 
              soluciones parciales y retrocediendo cuando se violan restricciones.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Construye soluciones paso a paso.</li>
              <li>• Verifica restricciones en cada paso.</li>
              <li>• Retrocede si se viola una restricción.</li>
              <li>• Explora todas las posibilidades.</li>
              <li>• Podado para eliminar ramas inviables.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como resolver un laberinto: avanzas y si encuentras un callejón sin 
              salida, retrocedes y pruebas otra ruta.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-layer-group flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Características principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              El backtracking tiene propiedades que lo hacen poderoso para resolver 
              problemas complejos.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Exhaustivo:</span> Explora todas las soluciones.</li>
              <li>• <span className='font-semibold'>Podado:</span> Elimina ramas inviables temprano.</li>
              <li>• <span className='font-semibold'>Recursivo:</span> Naturalmente implementado con recursión.</li>
              <li>• <span className='font-semibold'>Flexible:</span> Aplica a múltiples problemas.</li>
              <li>• <span className='font-semibold'>Complejidad:</span> Exponencial en el peor caso.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              La técnica perfecta cuando necesitas encontrar todas las soluciones 
              o la mejor solución bajo restricciones.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo: Problema de las N Reinas
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Visualiza cómo el backtracking coloca N reinas en un tablero de N×N 
              sin que se ataquen entre sí.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '👑',
                title: 'Paso 1: Colocar primera reina',
                text: 'Colocamos la reina en la fila 0, columna 0.'
              },
              {
                symbol: '➡️',
                title: 'Paso 2: Intentar siguiente fila',
                text: 'Intentamos colocar la reina 1 en columnas válidas.'
              },
              {
                symbol: '↩️',
                title: 'Paso 3: Retroceder si falla',
                text: 'Si no hay columna válida, retrocedemos y movemos la reina anterior.'
              },
              {
                symbol: '✅',
                title: 'Paso 4: Solución encontrada',
                text: 'Cuando todas las reinas están colocadas, tenemos una solución.'
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
              Aprende Backtracking visualmente
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funciona el backtracking con animaciones y ejemplos 
              interactivos que hacen fácil entender esta poderosa técnica. Mira el video de Bitflip.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/p9m2LHBW81M?si=96NfOni2ni2MDhPT" title='Backtracking' allowfullscreen></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Problemas clásicos de Backtracking
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-chess-board',
                title: 'Problema de las N Reinas',
                text: 'Coloca N reinas en un tablero sin que se ataquen entre sí.'
              },
              {
                icon: 'fi fi-rr-puzzle',
                title: 'Sudoku',
                text: 'Resuelve un puzzle de Sudoku llenando las celdas vacías con números válidos.'
              },
              {
                icon: 'fi fi-rr-briefcase',
                title: 'Mochila 0/1',
                text: 'Selecciona objetos para maximizar el valor sin exceder la capacidad.'
              },
              {
                icon: 'fi fi-rr-route',
                title: 'Caballo de ajedrez',
                text: 'Encuentra un recorrido del caballo visitando todas las casillas sin repetir.'
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
            Pseudocódigo de Backtracking
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`function backtracking(candidato):
    si esSolucion(candidato):
        procesarSolucion(candidato)
        retornar
    
    para cada opcion in generarOpciones(candidato):
        si esValida(opcion):
            realizarMovimiento(opcion)
            backtracking(opcion)
            deshacerMovimiento(opcion)  // Retroceder

// Ejemplo: Problema de las N Reinas
function resolverNReinas(n):
    tablero = nuevo tablero n x n
    backtrackingReinas(tablero, 0)

function backtrackingReinas(tablero, fila):
    si fila == n:
        mostrarTablero(tablero)
        retornar
    
    para columna desde 0 hasta n-1:
        si esSeguro(tablero, fila, columna):
            tablero[fila][columna] = '👑'
            backtrackingReinas(tablero, fila + 1)
            tablero[fila][columna] = '.'  // Retroceder`}
            </pre>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[
            {
              icon: 'fi fi-rr-undo-alt',
              title: 'Retroceso inteligente',
              desc: 'El backtracking no es solo retroceder, es retroceder de forma inteligente para explorar el espacio de soluciones de manera eficiente.',
              bg: 'from-violet-50 to-violet-100',
              border: 'border-violet-200',
              text: 'text-violet-900'
            },
            {
              icon: 'fi fi-rr-scissors',
              title: 'Poda de ramas',
              desc: 'El podado es clave: elimina ramas del árbol de búsqueda que no pueden llevar a una solución válida.',
              bg: 'from-fuchsia-50 to-fuchsia-100',
              border: 'border-fuchsia-200',
              text: 'text-fuchsia-900'
            },
            {
              icon: 'fi fi-rr-tree',
              title: 'Árbol de exploración',
              desc: 'El backtracking construye un árbol de decisiones donde cada nodo es un paso hacia la solución y las hojas son soluciones completas.',
              bg: 'from-sky-50 to-sky-100',
              border: 'border-sky-200',
              text: 'text-sky-900'
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

        <div className='bg-linear-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-emerald-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-lightbulb text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-emerald-900'>
                ¿Sabías que?
              </h2>
              <p className='text-emerald-800 text-base sm:text-lg leading-relaxed'>
                El backtracking es la técnica detrás de los solucionadores de 
                Sudoku más eficientes, los sistemas de inteligencia artificial 
                para juegos de mesa como el ajedrez, y los sistemas de 
                planificación en robótica. El algoritmo fue formalizado por 
                primera vez por el matemático suizo G. Polya en 1945, pero 
                se popularizó en la década de 1960 con los primeros programas 
                de computadora para resolver problemas de satisfacción de 
                restricciones.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-indigo-50 border border-indigo-200 rounded-3xl p-8 lg:p-10'>
          <h3 className='text-2xl font-black text-indigo-900 mb-4'>
            🎯 Backtracking vs Fuerza Bruta
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div className='bg-white rounded-2xl p-4 border border-indigo-100'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>🎯</span>
                <h4 className='font-bold text-indigo-800'>Backtracking</h4>
              </div>
              <ul className='space-y-1 text-sm text-zinc-700'>
                <li>• Explora con poda inteligente</li>
                <li>• Descarta soluciones inviables temprano</li>
                <li>• Más eficiente que fuerza bruta</li>
                <li>• Ideal para CSP (Constraint Satisfaction Problems)</li>
              </ul>
            </div>
            <div className='bg-white rounded-2xl p-4 border border-red-100'>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-xl'>💪</span>
                <h4 className='font-bold text-red-800'>Fuerza Bruta</h4>
              </div>
              <ul className='space-y-1 text-sm text-zinc-700'>
                <li>• Genera todas las combinaciones</li>
                <li>• No considera restricciones hasta el final</li>
                <li>• Muy ineficiente para problemas grandes</li>
                <li>• Simple pero impráctico para N grande</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}