import { Fragment } from 'react';

export default function PilesAndQueues() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Estructuras de datos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Pilas y colas
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Las pilas y las colas son estructuras de datos que organizan la información
            siguiendo reglas específicas. Mientras una pila funciona como una torre de
            platos, una cola se comporta como la fila de personas esperando para entrar
            a un cine.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop'
            alt='Stacks and queues'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-layer-plus flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Qué es una pila?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Una pila (Stack) sigue el principio LIFO (Last In, First Out), lo que
              significa que el último elemento en entrar es el primero en salir.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• El último elemento agregado sale primero.</li>
              <li>• Solo se puede acceder al elemento superior.</li>
              <li>• Las operaciones principales son Push y Pop.</li>
              <li>• Muy utilizada en navegadores y funciones.</li>
              <li>• Ideal para deshacer acciones.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Piensa en una pila de platos: siempre tomas el de arriba.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-arrow-right-arrow-left flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Qué es una cola?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Una cola (Queue) utiliza el principio FIFO (First In, First Out), donde el
              primer elemento que entra es el primero que sale.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• El primer elemento agregado sale primero.</li>
              <li>• Los nuevos elementos se agregan al final.</li>
              <li>• Se usan las operaciones Enqueue y Dequeue.</li>
              <li>• Muy utilizadas en impresión y sistemas operativos.</li>
              <li>• Perfectas para atender procesos por orden.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Es como hacer una fila para comprar una entrada.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo práctico
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Diferencia entre una pila y una cola.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '📚',
                title: 'Crear una pila',
                text: 'Agregamos libros uno encima de otro.'
              },
              {
                symbol: '⬆️',
                title: 'Quitar de la pila',
                text: 'Siempre retiramos el libro que está arriba.'
              },
              {
                symbol: '🚶',
                title: 'Crear una cola',
                text: 'Las personas hacen una fila para esperar.'
              },
              {
                symbol: '➡️',
                title: 'Atender la cola',
                text: 'La primera persona en llegar es la primera en ser atendida.'
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
              Aprende pilas y colas
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funcionan las estructuras Stack y Queue mediante ejemplos
              visuales y ejercicios prácticos mira el video de Hacker Rank.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Stacks and queues'
              allowFullScreen
              src='https://www.youtube.com/embed/wjI1WNcIntg'
            ></iframe>
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
                icon: 'fi fi-rr-layer-plus',
                title: 'Pila de libros',
                text: 'Simula una pila agregando y retirando libros.'
              },
              {
                icon: 'fi fi-rr-arrow-right-arrow-left',
                title: 'Fila del banco',
                text: 'Simula una cola donde llegan y salen clientes.'
              },
              {
                icon: 'fi fi-rr-browser',
                title: 'Historial del navegador',
                text: 'Representa el botón Atrás usando una pila.'
              },
              {
                icon: 'fi fi-rr-print',
                title: 'Cola de impresión',
                text: 'Simula documentos esperando para imprimirse.'
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