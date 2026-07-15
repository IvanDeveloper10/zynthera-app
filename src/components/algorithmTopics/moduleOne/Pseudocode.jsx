import { Fragment } from 'react';

export default function Pseudocode() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-blue-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-blue-600'></div>
            Fundamentos de programación
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>Pseudocódigo</h1>
          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>El pseudocódigo es una forma de describir algoritmos utilizando un lenguaje informal y estructurado que combina elementos de programación con lenguaje natural. Es como escribir un borrador de tu código antes de implementarlo en un lenguaje de programación específico.</p>
        </div>
        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'
            alt='Pseudocode programming concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-code-branch flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>Estructuras básicas</h2>
            <p className='text-zinc-600 leading-relaxed'>El pseudocódigo utiliza estructuras comunes:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>📥 Entrada / Salida (Leer, Escribir)</li>
              <li>🔄 Bucles (Mientras, Repetir, Para)</li>
              <li>❓ Condicionales (Si-Entonces-SiNo)</li>
              <li>📋 Variables y Asignaciones</li>
              <li>🧩 Funciones y Procedimientos</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Estas estructuras permiten representar la lógica de cualquier programa.</p>
          </div>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-pencil flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>Ventajas del pseudocódigo</h2>
            <p className='text-zinc-600 leading-relaxed'>Beneficios de usar pseudocódigo:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• Independiente del lenguaje</li>
              <li>• Fácil de leer y entender</li>
              <li>• Ideal para planificar algoritmos</li>
              <li>• Sirve como documentación</li>
              <li>• Ayuda a depurar la lógica</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Es una herramienta esencial en el proceso de desarrollo de software.</p>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Ejemplo práctico</h2>
            <p className='text-zinc-600 text-base sm:text-lg'>Pseudocódigo para calcular el área de un rectángulo.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                number: '1',
                title: 'Inicio',
                text: 'Declarar variables para base, altura y área.',
                symbol: '🏁'
              },
              {
                number: '2',
                title: 'Entrada de datos',
                text: 'Leer la base y la altura del rectángulo.',
                symbol: '📥'
              },
              {
                number: '3',
                title: 'Procesamiento',
                text: 'Calcular el área multiplicando base × altura.',
                symbol: '⚙️'
              },
              {
                number: '4',
                title: 'Salida de resultado',
                text: 'Mostrar el área calculada al usuario.',
                symbol: '📤'
              }
            ].map((step) => (
              <div
                key={step.number}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <div className='w-14 h-14 rounded-2xl bg-zinc-100 text-white flex justify-center items-center text-3xl font-bold'>
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
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl'>Curso de pseudocódigo</h2>
            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>Domina el arte de escribir algoritmos en pseudocódigo con este tutorial completo que incluye ejemplos y ejercicios prácticos de Kiko Palomares.</p>
          </div>
          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/KcSD3r16Pl0?si=R6sdXlNTl6YtCvMI" title='Pseudocode' allowfullscreen></iframe>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Ejercicios para practicar</h2>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-temperature-high',
                title: 'Conversor de temperatura',
                text: 'Escribe pseudocódigo para convertir °C a °F.'
              },
              {
                icon: 'fi fi-rr-sort-alt',
                title: 'Ordenar números',
                text: 'Crea un algoritmo para ordenar 3 números.'
              },
              {
                icon: 'fi fi-rr-credit-card',
                title: 'Cajero automático',
                text: 'Diseña un algoritmo para retirar dinero.'
              },
              {
                icon: 'fi fi-rr-graduation-cap',
                title: 'Promedio de notas',
                text: 'Calcula el promedio de calificaciones.'
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