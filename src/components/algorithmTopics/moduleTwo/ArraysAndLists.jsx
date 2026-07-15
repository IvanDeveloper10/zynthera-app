import { Fragment } from 'react';

export default function ArraysAndLists() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-blue-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-blue-600'></div>
            Estructuras de datos
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>Arrays y listas</h1>
          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>Los arrays y listas son como contenedores especiales que te permiten guardar muchos datos en un solo lugar. Imagina que tienes una caja con compartimentos donde puedes guardar tus juguetes favoritos, cada uno en su espacio. Así funcionan estas estructuras en programación.</p>
        </div>
        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
            alt='Arrays and lists concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-folder flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>¿Qué es un array?</h2>
            <p className='text-zinc-600 leading-relaxed'>Un array es una colección de elementos que se guardan en posiciones consecutivas:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Todos los elementos son del mismo tipo</li>
              <li>• Cada posición tiene un número (índice) que empieza en 0</li>
              <li>• Tamaño fijo que se define al crearlo</li>
              <li>• Acceso rápido a cualquier elemento</li>
              <li>• Ideal para datos que no cambian de tamaño</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Los arrays son como una fila de casilleros numerados.</p>
          </div>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-link-alt flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>¿Qué es una lista?</h2>
            <p className='text-zinc-600 leading-relaxed'>Una lista es como una cadena de eslabones donde cada elemento sabe dónde está el siguiente:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Puede crecer o encogerse dinámicamente</li>
              <li>• Cada elemento (nodo) tiene datos y un enlace al siguiente</li>
              <li>• Fácil de insertar y eliminar elementos</li>
              <li>• No necesita espacio continuo en memoria</li>
              <li>• Perfecta para datos que cambian frecuentemente</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Las listas son como un tren que puede agregar o quitar vagones.</p>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Ejemplo práctico</h2>
            <p className='text-zinc-600 text-base sm:text-lg'>Cómo guardar y mostrar una lista de compras.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                number: '1',
                title: 'Crear array/lista',
                text: 'Declaramos un array o lista vacía para guardar los productos.',
                symbol: '📋'
              },
              {
                number: '2',
                title: 'Agregar elementos',
                text: 'Añadimos productos uno por uno: "pan", "leche", "huevos".',
                symbol: '➕'
              },
              {
                number: '3',
                title: 'Acceder a elementos',
                text: 'Podemos ver el primer producto (índice 0) o el último.',
                symbol: '🔍'
              },
              {
                number: '4',
                title: 'Recorrer y mostrar',
                text: 'Usamos un bucle para mostrar todos los productos de la lista.',
                symbol: '📤'
              }
            ].map((step) => (
              <div
                key={step.number}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <div className='w-14 h-14 rounded-2xl bg-zinc-100 flex justify-center items-center text-3xl font-bold'>
                  {step.symbol}
                </div>
                <h3 className='text-2xl font-bold leading-tight wrap-break-words'>
                  {step.title}
                </h3>
                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950'>
          <div className='p-6 sm:p-8 lg:p-10 flex flex-col gap-5'>
            <div className='flex items-center gap-3 text-blue-400 font-semibold'>
              <i className='fi fi-rr-play flex justify-center items-center'></i>
              Recurso audiovisual
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl'>Arrays y listas explicados</h2>
            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>Aprende a usar arrays y listas con ejemplos visuales y prácticos que te ayudarán a entender cómo guardar y organizar información en tus programas, mira el video de Retro.</p>
          </div>
          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/_FsRvYZNbnc?si=V3LNgs8aHnUrhZ5E" title='Arrays And Lists' allowfullscreen></iframe>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Ejercicios para practicar</h2>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-list-ul',
                title: 'Lista de productos',
                text: 'Crea un array con 5 productos de tu supermercado favorito y muéstralos todos.'
              },
              {
                icon: 'fi fi-rr-notes',
                title: 'Calificaciones de clase',
                text: 'Guarda 6 calificaciones en un array y calcula el promedio.'
              },
              {
                icon: 'fi fi-rr-friends',
                title: 'Lista de amigos',
                text: 'Crea una lista con nombres de amigos, agrega uno nuevo y elimina el segundo.'
              },
              {
                icon: 'fi fi-rr-sort',
                title: 'Ordenar números',
                text: 'Tienes un array [8, 3, 5, 1, 9], ordénalo de menor a mayor.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <i className={`${item.icon} text-4xl text-blue-600`}></i>
                <h3 className='text-2xl font-bold wrap-break-words'>
                  {item.title}
                </h3>
                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
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