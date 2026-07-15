import { Fragment } from 'react';

export default function Flowcharts() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-blue-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-blue-600'></div>
            Visualización de procesos
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>Diagramas de flujo</h1>
          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>Un diagrama de flujo es una representación visual de un proceso o algoritmo. Utiliza símbolos geométricos conectados por flechas para mostrar la secuencia de pasos, decisiones y resultados. Es como un mapa que guía la ejecución de una tarea paso a paso.</p>
        </div>
        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
            alt='Flowchart diagram'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-diagram-project flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>Símbolos básicos</h2>
            <p className='text-zinc-600 leading-relaxed'>Los diagramas de flujo usan símbolos estandarizados:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>⬤ Inicio / Fin (óvalo)</li>
              <li><i className='fi fi-ss-rectangle-horizontal'></i> Proceso (rectángulo)</li>
              <li><i className='fi fi-ss-rhombus'></i> Decisión (rombo)</li>
              <li><img src='/image.png' alt='' width={20} /> Entrada / Salida (paralelogramo)</li>
              <li>→ Flechas de dirección</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Cada símbolo tiene un significado específico que ayuda a leer el flujo del proceso.</p>
          </div>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-flowchart flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>¿Para qué sirven?</h2>
            <p className='text-zinc-600 leading-relaxed'>Los diagramas de flujo son útiles para:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Planificar proyectos</li>
              <li>• Documentar procesos</li>
              <li>• Resolver problemas</li>
              <li>• Enseñar procedimientos</li>
              <li>• Depurar programas</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Ayudan a visualizar procesos complejos de manera clara y ordenada.</p>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Ejemplo práctico</h2>
            <p className='text-zinc-600 text-base sm:text-lg'>Diagrama de flujo para saber si un número es par o impar.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                number: '1',
                title: 'Inicio',
                text: 'Comienza el proceso en el óvalo de inicio.',
                symbol: '⭕'
              },
              {
                number: '2',
                title: 'Entrada de número',
                text: 'Lee el número ingresado por el usuario.',
                symbol: '▱'
              },
              {
                number: '3',
                title: '¿Es divisible entre 2?',
                text: 'Decisión: si es divisible, es par; si no, es impar.',
                symbol: '◇'
              },
              {
                number: '4',
                title: 'Resultado',
                text: 'Muestra si el número es par o impar.',
                symbol: '▭'
              }
            ].map((step) => (
              <div
                key={step.number}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center text-3xl font-bold'>
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
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl'>Tutorial de diagramas de flujo</h2>
            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>Aprende cómo crear y leer diagramas de flujo con este video explicativo que muestra ejemplos prácticos de Jorge Cogollo.</p>
          </div>
          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/Kucgc6NpGwc?si=y6_msNV4bi0IaVhv" title='Flowchart' allowfullscreen></iframe>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Ejercicios para practicar</h2>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-coffee-pot',
                title: 'Preparar café',
                text: 'Diseña un diagrama para preparar una taza de café.'
              },
              {
                icon: 'fi fi-rr-crossroads',
                title: 'Semáforo',
                text: 'Representa el funcionamiento de un semáforo.'
              },
              {
                icon: 'fi fi-rr-calculator',
                title: 'Calculadora',
                text: 'Haz un diagrama para sumar dos números.'
              },
              {
                icon: 'fi fi-rr-smartphone',
                title: 'Desbloquear celular',
                text: 'Crea el proceso para desbloquear un teléfono.'
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