import { Fragment } from 'react';

export default function PracticeProject() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Proyecto práctico
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Sistema de gestión de tareas
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Construye un sistema completo de gestión de tareas aplicando todas las 
            estructuras de datos aprendidas: pilas, colas, hash maps y árboles 
            binarios para crear una solución profesional y funcional.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=1600&auto=format&fit=crop'
            alt='Task management project'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-list-check flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Descripción del proyecto
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Desarrolla una aplicación de gestión de tareas que utilice diferentes 
              estructuras de datos para manejar la información de manera eficiente.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Gestión de tareas con prioridades.</li>
              <li>• Historial de acciones (deshacer/rehacer).</li>
              <li>• Búsqueda rápida de tareas.</li>
              <li>• Organización jerárquica de proyectos.</li>
              <li>• Sistema de notificaciones por orden.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Una herramienta completa similar a Trello o Asana pero construida 
              desde cero con estructuras de datos fundamentales.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-structure flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Estructuras utilizadas
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Cada estructura de datos juega un rol específico en el sistema para 
              maximizar la eficiencia y organización.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Hash Map:</span> Almacenar tareas por ID.</li>
              <li>• <span className='font-semibold'>Pila (Stack):</span> Historial de acciones.</li>
              <li>• <span className='font-semibold'>Cola (Queue):</span> Notificaciones pendientes.</li>
              <li>• <span className='font-semibold'>Árbol Binario:</span> Organizar por prioridad.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Una arquitectura robusta que demuestra el poder de combinar diferentes 
              estructuras de datos.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Pasos del proyecto
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Sigue estos pasos para construir tu sistema de gestión de tareas.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '📋',
                title: 'Paso 1: Planificación',
                text: 'Define los requisitos del sistema y las estructuras a utilizar.'
              },
              {
                symbol: '⚙️',
                title: 'Paso 2: Configuración',
                text: 'Configura el entorno de desarrollo y las dependencias necesarias.'
              },
              {
                symbol: '📚',
                title: 'Paso 3: Implementación',
                text: 'Codifica cada estructura de datos y sus operaciones.'
              },
              {
                symbol: '🚀',
                title: 'Paso 4: Integración',
                text: 'Integra todas las estructuras en un sistema funcional.'
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

        {/* <div className='overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950'>
          <div className='p-6 sm:p-8 lg:p-10 flex flex-col gap-5'>
            <div className='flex items-center gap-3 text-green-400 font-semibold'>
              <i className='fi fi-rr-code-branch'></i>
              Repositorio del proyecto
            </div>

            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white'>
              Código fuente completo
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Accede al repositorio con el código completo del sistema de gestión 
              de tareas, incluyendo todas las estructuras de datos implementadas 
              y documentación detallada.
            </p>

            <div className='flex flex-wrap gap-3 mt-4'>
              <a
                href='#'
                className='inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl transition-colors'
              >
                <i className='fi fi-rr-brand-github'></i>
                Ver en GitHub
              </a>
              <a
                href='#'
                className='inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-2xl transition-colors'
              >
                <i className='fi fi-rr-download'></i>
                Descargar código
              </a>
            </div>
          </div>
        </div> */}

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Características del proyecto
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-check-circle',
                title: 'CRUD completo',
                text: 'Crear, leer, actualizar y eliminar tareas eficientemente.'
              },
              {
                icon: 'fi fi-rr-clock',
                title: 'Historial de acciones',
                text: 'Deshacer y rehacer operaciones con el historial de cambios.'
              },
              {
                icon: 'fi fi-rr-bell',
                title: 'Notificaciones en cola',
                text: 'Sistema de notificaciones FIFO para eventos importantes.'
              },
              {
                icon: 'fi fi-rr-chart-tree',
                title: 'Organización jerárquica',
                text: 'Clasifica tareas por prioridad usando árboles binarios.'
              },
              {
                icon: 'fi fi-rr-search-alt',
                title: 'Búsqueda eficiente',
                text: 'Encuentra tareas rápidamente con hash maps optimizados.'
              },
              {
                icon: 'fi fi-rr-dashboard',
                title: 'Dashboard interactivo',
                text: 'Visualiza el estado de todas las tareas en tiempo real.'
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

        {/* <div className='bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-green-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-rocket text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-green-900'>
                ¡Comienza tu proyecto ahora!
              </h2>
              <p className='text-green-800 text-base sm:text-lg leading-relaxed'>
                Aplica todos los conocimientos adquiridos sobre estructuras de datos 
                construyendo una aplicación real y funcional. Este proyecto te ayudará 
                a consolidar tu aprendizaje y crear un portafolio impresionante.
              </p>
            </div>
          </div>

          <div className='flex flex-wrap gap-4'>
            <button className='px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-colors flex items-center gap-2'>
              <i className='fi fi-rr-play'></i>
              Iniciar proyecto
            </button>
            <button className='px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-700 font-bold rounded-2xl border border-zinc-200 transition-colors flex items-center gap-2'>
              <i className='fi fi-rr-document'></i>
              Ver documentación
            </button>
          </div>
        </div> */}
      </section>
    </Fragment>
  );
}