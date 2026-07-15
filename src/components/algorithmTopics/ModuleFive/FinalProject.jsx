import { Fragment } from 'react';

export default function FinalProject() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-green-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
            Proyecto final
          </div>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>
            Sistema de Gestión de Procesos
          </h1>

          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>
            Construye un sistema completo de gestión de procesos que integra todas 
            las estructuras de datos y algoritmos aprendidos: pilas, colas, hash maps, 
            árboles binarios, algoritmos de ordenamiento, búsqueda y optimización. 
            Este proyecto final demuestra tu dominio de los conceptos fundamentales 
            de la programación.
          </p>
        </div>

        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
            alt='Final project system architecture'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-diagram-project flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Descripción del proyecto
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Desarrolla un sistema de gestión de procesos que utiliza diferentes 
              estructuras de datos y algoritmos para manejar la información de 
              manera eficiente y demostrar todos los conceptos aprendidos.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Gestión de procesos con prioridades.</li>
              <li>• Historial de acciones (deshacer/rehacer).</li>
              <li>• Búsqueda rápida de procesos.</li>
              <li>• Organización jerárquica de procesos.</li>
              <li>• Sistema de planificación y optimización.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Una solución completa que integra todas las estructuras de datos en 
              un sistema funcional y profesional.
            </p>
          </div>

          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-green-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-structure flex justify-center items-center text-2xl'></i>
            </div>

            <h2 className='text-2xl lg:text-3xl font-bold'>
              Componentes del sistema
            </h2>

            <p className='text-zinc-600 leading-relaxed'>
              Cada componente del sistema utiliza una estructura de datos específica 
              para maximizar la eficiencia y organización.
            </p>

            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-semibold'>Hash Map:</span> Almacenar procesos por ID.</li>
              <li>• <span className='font-semibold'>Pila (Stack):</span> Historial de acciones.</li>
              <li>• <span className='font-semibold'>Cola (Queue):</span> Procesos en espera.</li>
              <li>• <span className='font-semibold'>Árbol Binario:</span> Organización jerárquica.</li>
              <li>• <span className='font-semibold'>Algoritmos:</span> Búsqueda, ordenamiento y optimización.</li>
            </ul>

            <p className='text-zinc-600 leading-relaxed'>
              Una arquitectura robusta que demuestra la integración de múltiples 
              estructuras de datos y algoritmos.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Fases del proyecto
            </h2>

            <p className='text-zinc-600 text-base sm:text-lg'>
              Sigue estas fases para construir tu sistema de gestión de procesos completo.
            </p>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                symbol: '📋',
                title: 'Fase 1: Planificación',
                text: 'Define los requisitos, arquitectura y estructuras de datos a utilizar.'
              },
              {
                symbol: '⚙️',
                title: 'Fase 2: Configuración',
                text: 'Configura el entorno de desarrollo y las dependencias necesarias.'
              },
              {
                symbol: '📚',
                title: 'Fase 3: Implementación',
                text: 'Codifica cada estructura de datos y sus operaciones.'
              },
              {
                symbol: '🔗',
                title: 'Fase 4: Integración',
                text: 'Integra todas las estructuras en un sistema funcional.'
              },
              {
                symbol: '🧪',
                title: 'Fase 5: Pruebas',
                text: 'Prueba el sistema con diferentes casos de uso y escenarios.'
              },
              {
                symbol: '🚀',
                title: 'Fase 6: Despliegue',
                text: 'Despliega el sistema y documenta el código para futuras referencias.'
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
              Guía completa del proyecto
            </h2>

            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>
              Sigue esta guía paso a paso para construir tu sistema de gestión de 
              procesos, integrando todas las estructuras de datos y algoritmos 
              aprendidos en el curso. Este video pertenece a codebasics.
            </p>
          </div>

          <div className='aspect-video w-full'>
            <iframe
              className='w-full h-full'
              title='Final project guide'
              allowFullScreen
              src='https://www.youtube.com/embed/_t2GVaQasRY'
            ></iframe>
          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <h2 className='text-3xl lg:text-4xl font-black'>
              Módulos del sistema
            </h2>
          </div>

          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-users',
                title: 'Gestión de usuarios',
                text: 'Crear, modificar y eliminar usuarios del sistema con hash maps para búsqueda rápida.'
              },
              {
                icon: 'fi fi-rr-clock',
                title: 'Historial de acciones',
                text: 'Mantén un historial completo de acciones usando pilas para deshacer y rehacer.'
              },
              {
                icon: 'fi fi-rr-bell',
                title: 'Procesos en espera',
                text: 'Gestiona procesos pendientes con colas para atención por orden de llegada o prioridad.'
              },
              {
                icon: 'fi fi-rr-chart-tree',
                title: 'Jerarquía de procesos',
                text: 'Organiza procesos en árboles binarios para representar dependencias y subprocesos.'
              },
              {
                icon: 'fi fi-rr-search-alt',
                title: 'Búsqueda y filtrado',
                text: 'Implementa búsqueda binaria para encontrar procesos rápidamente por ID o nombre.'
              },
              {
                icon: 'fi fi-rr-dashboard',
                title: 'Dashboard interactivo',
                text: 'Visualiza todos los procesos con estadísticas de rendimiento y estado actual.'
              },
              {
                icon: 'fi fi-rr-chart-line',
                title: 'Optimización de recursos',
                text: 'Aplica programación dinámica y greedy para optimizar la asignación de recursos.'
              },
              {
                icon: 'fi fi-rr-route',
                title: 'Planificación de procesos',
                text: 'Utiliza Dijkstra y BFS para encontrar rutas óptimas en la planificación de procesos.'
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
            Estructura del código
          </h3>
          <div className='bg-zinc-800 rounded-2xl p-6 font-mono text-sm text-green-400 overflow-x-auto'>
            <pre className='whitespace-pre-wrap'>
{`// Estructura principal del sistema
class SistemaGestionProcesos {
    constructor() {
        this.procesos = new Map();           // Hash Map: procesos por ID
        this.historial = new Stack();        // Pila: historial de acciones
        this.colaEspera = new Queue();       // Cola: procesos en espera
        this.arbolProcesos = new BinaryTree(); // Árbol: jerarquía
        this.usuarios = new Map();           // Hash Map: usuarios
        this.planificador = new Scheduler();  // Planificador de procesos
    }
    
    // Métodos principales
    crearProceso(datos) { /* ... */ }
    modificarProceso(id, datos) { /* ... */ }
    eliminarProceso(id) { /* ... */ }
    buscarProceso(id) { /* ... */ }
    deshacerAccion() { /* ... */ }
    rehacerAccion() { /* ... */ }
    optimizarRecursos() { /* ... */ }
    planificarProcesos() { /* ... */ }
}`}
            </pre>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
          {[
            {
              icon: 'fi fi-rr-check-circle',
              title: 'Completo',
              desc: 'Integra todas las estructuras de datos y algoritmos del curso.',
              bg: 'from-emerald-50 to-emerald-100',
              border: 'border-emerald-200',
              text: 'text-emerald-900'
            },
            {
              icon: 'fi fi-rr-code',
              title: 'Bien documentado',
              desc: 'Código con comentarios claros y documentación completa.',
              bg: 'from-blue-50 to-blue-100',
              border: 'border-blue-200',
              text: 'text-blue-900'
            },
            {
              icon: 'fi fi-rr-test',
              title: 'Probado',
              desc: 'Pruebas unitarias y de integración para todos los módulos.',
              bg: 'from-purple-50 to-purple-100',
              border: 'border-purple-200',
              text: 'text-purple-900'
            },
            {
              icon: 'fi fi-rr-rocket',
              title: 'Listo para producción',
              desc: 'Sistema robusto y escalable para uso en producción.',
              bg: 'from-amber-50 to-amber-100',
              border: 'border-amber-200',
              text: 'text-amber-900'
            }
          ].map((item) => (
            <div 
              key={item.title}
              className={`bg-linear-to-br ${item.bg} border ${item.border} rounded-2xl p-5 flex flex-col gap-3`}
            >
              <div className='text-3xl'><i className={`${item.icon} text-green-600`}></i></div>
              <h3 className={`text-xl font-bold ${item.text}`}>{item.title}</h3>
              <p className={`${item.text} leading-relaxed opacity-90 text-sm`}>{item.desc}</p>
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
                Objetivos de aprendizaje
              </h2>
              <ul className='text-indigo-800 text-base sm:text-lg leading-relaxed list-disc list-inside space-y-2 mt-2'>
                <li>Integrar múltiples estructuras de datos en un sistema real</li>
                <li>Aplicar algoritmos de ordenamiento y búsqueda en contexto</li>
                <li>Implementar técnicas de optimización (programación dinámica, greedy)</li>
                <li>Diseñar una arquitectura de software robusta y escalable</li>
                <li>Desarrollar habilidades de resolución de problemas complejos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-linear-to-r from-green-50 to-green-100 border border-green-200 rounded-3xl p-8 lg:p-10 flex flex-col gap-6'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-green-600 text-white flex justify-center items-center shrink-0'>
              <i className='fi fi-rr-rocket text-xl'></i>
            </div>
            <div>
              <h2 className='text-2xl lg:text-3xl font-black text-green-900'>
                ¡Comienza tu proyecto final ahora!
              </h2>
              <p className='text-green-800 text-base sm:text-lg leading-relaxed'>
                Este proyecto final integra todos los conceptos aprendidos en el curso. 
                Demuestra tu dominio de pilas, colas, hash maps, árboles binarios, 
                algoritmos de ordenamiento, búsqueda y optimización. Es la oportunidad 
                perfecta para construir un proyecto completo que puedes agregar a tu 
                portafolio profesional.
              </p>
            </div>
          </div>

          {/* <div className='flex flex-wrap gap-4 mt-4'>
            <button className='px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition-colors flex items-center gap-2'>
              <i className='fi fi-rr-play'></i>
              Iniciar proyecto
            </button>
            <button className='px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-700 font-bold rounded-2xl border border-zinc-200 transition-colors flex items-center gap-2'>
              <i className='fi fi-rr-download'></i>
              Descargar plantilla
            </button>
            <button className='px-8 py-4 bg-white hover:bg-zinc-50 text-zinc-700 font-bold rounded-2xl border border-zinc-200 transition-colors flex items-center gap-2'>
              <i className='fi fi-rr-document'></i>
              Ver documentación
            </button>
          </div> */}
        </div>
      </section>
    </Fragment>
  );
}