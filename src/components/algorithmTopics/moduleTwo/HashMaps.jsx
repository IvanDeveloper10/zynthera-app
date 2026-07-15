import { Fragment } from 'react';

export default function HashMaps() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Estructuras de datos
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Hash Maps
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Los hash maps (también conocidos como diccionarios o tablas hash) son 
            estructuras de datos que almacenan pares clave-valor, permitiendo 
            acceder a los valores de manera rápida y eficiente usando una clave única.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
            alt='Hash maps data structure'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-key flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              ¿Qué es un Hash Map?
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Un hash map es una estructura que asocia claves únicas con valores, 
              usando una función hash para calcular la posición de almacenamiento.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Almacena pares clave-valor.</li>
              <li>• Acceso rápido O(1) en promedio.</li>
              <li>• Las claves deben ser únicas.</li>
              <li>• Usa una función hash para indexar.</li>
              <li>• Ideal para búsquedas rápidas.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Piensa en un diccionario: buscas una palabra (clave) y encuentras su 
              definición (valor).
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-function flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Operaciones principales
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Las operaciones básicas de un hash map son rápidas y eficientes, 
              permitiendo manipular los datos con facilidad.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Insertar: añadir un nuevo par clave-valor.</li>
              <li>• Buscar: obtener el valor de una clave.</li>
              <li>• Eliminar: remover un par clave-valor.</li>
              <li>• Actualizar: modificar el valor de una clave.</li>
              <li>• Verificar: comprobar si una clave existe.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Como una agenda telefónica donde buscas un nombre y encuentras el número.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Ejemplo práctico
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Cómo funcionan los hash maps en situaciones cotidianas.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '📇',
                title: 'Crear un hash map',
                text: 'Inicializamos un diccionario vacío para almacenar datos.'
              },
              {
                symbol: '✏️',
                title: 'Insertar datos',
                text: 'Agregamos pares clave-valor como "nombre: Juan".'
              },
              {
                symbol: '🔍',
                title: 'Buscar por clave',
                text: 'Consultamos el valor usando su clave única.'
              },
              {
                symbol: '🗑️',
                title: 'Eliminar datos',
                text: 'Removemos un par clave-valor cuando ya no es necesario.'
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
              Aprende Hash Maps
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Descubre cómo funcionan los hash maps, sus aplicaciones y cómo 
              implementarlos en tus proyectos con ejemplos prácticos mira el video de Chio Code.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/CrXDTPE4DQI?si=g358BJf0NPl79mR5" title='Hash Maps' allowfullscreen></iframe>
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
                icon: 'fi fi-rr-users',
                title: 'Agenda telefónica',
                text: 'Crea un hash map para almacenar contactos y números.'
              },
              {
                icon: 'fi fi-rr-shopping-cart',
                title: 'Carrito de compras',
                text: 'Usa un hash map para gestionar productos y cantidades.'
              },
              {
                icon: 'fi fi-rr-database',
                title: 'Contador de palabras',
                text: 'Cuenta la frecuencia de cada palabra en un texto.'
              },
              {
                icon: 'fi fi-rr-globe',
                title: 'Traductor simple',
                text: 'Implementa un diccionario para traducir palabras.'
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