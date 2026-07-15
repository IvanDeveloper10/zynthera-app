import { Fragment } from 'react';

export default function BinaryTrees() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Estructuras de datos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Árboles binarios
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Los árboles binarios son estructuras jerárquicas donde cada nodo tiene 
            como máximo dos hijos: izquierdo y derecho. Son fundamentales en 
            informática para organizar datos de manera eficiente y facilitar 
            búsquedas rápidas.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1600&auto=format&fit=crop'
            alt='Binary tree structure'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-tree flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Qué es un árbol binario?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Un árbol binario es una estructura de datos no lineal donde cada nodo 
              puede tener hasta dos hijos, denominados hijo izquierdo y hijo derecho.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Cada nodo tiene máximo dos hijos.</li>
              <li>• Existe un nodo raíz principal.</li>
              <li>• Los nodos sin hijos son hojas.</li>
              <li>• Permite búsquedas eficientes.</li>
              <li>• Ideal para representar jerarquías.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como un árbol genealógico donde cada persona tiene máximo dos padres.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-caret-square-down flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Tipos de árboles binarios
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Existen varias variantes de árboles binarios, cada una con propiedades 
              específicas para diferentes casos de uso.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Árbol binario de búsqueda (BST).</li>
              <li>• Árbol AVL (auto-balanceado).</li>
              <li>• Árbol rojo-negro.</li>
              <li>• Árbol binario completo.</li>
              <li>• Árbol binario perfecto.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como un sistema de archivos donde las carpetas contienen subcarpetas.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo práctico
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Cómo funcionan los árboles binarios en la vida real.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '🌳',
                title: 'Crear un árbol',
                text: 'Iniciamos con un nodo raíz que contiene el primer valor.'
              },
              {
                symbol: '⬅️',
                title: 'Insertar a la izquierda',
                text: 'Agregamos valores menores a la izquierda del nodo.'
              },
              {
                symbol: '➡️',
                title: 'Insertar a la derecha',
                text: 'Colocamos valores mayores a la derecha del nodo.'
              },
              {
                symbol: '🔎',
                title: 'Buscar un nodo',
                text: 'Recorremos el árbol comparando valores hasta encontrar el objetivo.'
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
              Aprende árboles binarios
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Domina los árboles binarios, sus recorridos, inserciones y 
              aplicaciones prácticas en algoritmos y estructuras de datos mira el video de vida MRR - Programacion web
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/tBaOQeyXYqg?si=4huhdpcu0VDu9UbP" title='Binary Trees' allowfullscreen></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejercicios para practicar
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-file-code',
                title: 'Recorrido de árbol',
                text: 'Implementa recorridos in-order, pre-order y post-order.'
              },
              {
                icon: 'fi fi-rr-search',
                title: 'Búsqueda binaria',
                text: 'Busca un valor específico en un árbol binario de búsqueda.'
              },
              {
                icon: 'fi fi-rr-layer-group',
                title: 'Altura del árbol',
                text: 'Calcula la altura máxima desde la raíz hasta una hoja.'
              },
              {
                icon: 'fi fi-rr-balance-scale',
                title: 'Balance de árbol',
                text: 'Verifica si un árbol binario está balanceado.'
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
      </section>
    </Fragment>
  );
}