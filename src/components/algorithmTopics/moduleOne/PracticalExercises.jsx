import { Fragment } from 'react';

export default function PracticalExercises() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-blue-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-blue-600'></div>
            Aprende haciendo
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>Ejercicios prácticos de algoritmos</h1>
          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>Los algoritmos son como recetas de cocina: una serie de pasos para lograr un objetivo. Aquí encontrarás ejercicios divertidos para que aprendas a crear tus propios algoritmos resolviendo problemas de la vida real.</p>
        </div>
        
        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop'
            alt='Niños aprendiendo algoritmos'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>

        {/* Primaria - Ejercicios básicos */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold'>Para primaria</div>
              <h2 className='text-3xl lg:text-4xl font-black'>Ejercicios para niños</h2>
            </div>
            <p className='text-zinc-600 text-base sm:text-lg'>Ejercicios sencillos para entender qué es un algoritmo.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-toast',
                title: 'Preparar un sándwich',
                level: 'Fácil',
                description: 'Escribe los pasos para hacer un sándwich de jamón y queso. ¿Qué necesitas? ¿Qué haces primero?',
                hint: 'Piensa en: pan, jamón, queso, y cómo los unes.'
              },
              {
                icon: 'fi fi-rr-brush',
                title: 'Cepillarse los dientes',
                level: 'Fácil',
                description: 'Crea un algoritmo de 5 pasos para cepillarte los dientes correctamente.',
                hint: 'No olvides la pasta dental y el enjuague final.'
              },
              {
                icon: 'fi fi-rr-sack',
                title: 'Empacar una mochila',
                level: 'Intermedio',
                description: 'Haz una lista de pasos para empacar tu mochila para la escuela. ¿Qué pones primero y por qué?',
                hint: 'Piensa en el peso y el espacio disponible.'
              },
              {
                icon: 'fi fi-rr-crossing',
                title: 'Cruzar la calle',
                level: 'Fácil',
                description: 'Escribe el algoritmo para cruzar una calle de manera segura. ¡Incluye todos los pasos importantes!',
                hint: 'Mirar a ambos lados es muy importante.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start justify-between'>
                  <i className={`${item.icon} text-4xl text-blue-600`}></i>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.level === 'Fácil' ? 'bg-green-100 text-green-700' : 
                    item.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-red-100 text-red-700'
                  }`}>{item.level}</span>
                </div>
                <h3 className='text-2xl font-bold wrap-break-words'>
                  {item.title}
                </h3>
                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
                  {item.description}
                </p>
                <div className='mt-2 p-3 bg-blue-50 rounded-xl border border-blue-100'>
                  <p className='text-sm text-blue-700 font-medium'>💡 Pista: {item.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secundaria - Ejercicios intermedios */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold'>Para secundaria</div>
              <h2 className='text-3xl lg:text-4xl font-black'>Ejercicios para adolescentes</h2>
            </div>
            <p className='text-zinc-600 text-base sm:text-lg'>Retos que requieren más pensamiento lógico y estructuras de control.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-calculator',
                title: 'Calculadora de promedio',
                level: 'Intermedio',
                description: 'Diseña un algoritmo que calcule el promedio de 5 calificaciones y determine si el estudiante aprobó (nota ≥ 6).',
                hint: 'Usa variables para cada nota y una condición para aprobar.'
              },
              {
                icon: 'fi fi-rr-shopping-cart',
                title: 'Cajero automático',
                level: 'Intermedio',
                description: 'Crea un algoritmo para retirar dinero de un cajero. El usuario debe ingresar la cantidad y el sistema debe validar que tenga saldo suficiente.',
                hint: 'Necesitas variables: saldo, cantidad a retirar, y una decisión.'
              },
              {
                icon: 'fi fi-rr-clock',
                title: 'Convertir horas a minutos',
                level: 'Intermedio',
                description: 'Escribe un algoritmo que convierta horas en minutos y segundos. Por ejemplo: 2 horas = 120 minutos = 7200 segundos.',
                hint: '1 hora = 60 minutos = 3600 segundos.'
              },
              {
                icon: 'fi fi-rr-check-circle',
                title: 'Número par o impar',
                level: 'Intermedio',
                description: 'Crea un algoritmo que reciba un número y determine si es par o impar. ¡Usa el operador módulo!',
                hint: 'Un número es par si al dividirlo entre 2 el residuo es 0.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start justify-between'>
                  <i className={`${item.icon} text-4xl text-blue-600`}></i>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.level === 'Fácil' ? 'bg-green-100 text-green-700' : 
                    item.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-red-100 text-red-700'
                  }`}>{item.level}</span>
                </div>
                <h3 className='text-2xl font-bold wrap-break-words'>
                  {item.title}
                </h3>
                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
                  {item.description}
                </p>
                <div className='mt-2 p-3 bg-blue-50 rounded-xl border border-blue-100'>
                  <p className='text-sm text-blue-700 font-medium'>💡 Pista: {item.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Retos avanzados */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
              <div className='px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-bold'>Retos especiales</div>
              <h2 className='text-3xl lg:text-4xl font-black'>Problemas de la vida real</h2>
            </div>
            <p className='text-zinc-600 text-base sm:text-lg'>Aplica lo aprendido a situaciones cotidianas.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-pizza',
                title: 'Repartir pizzas entre amigos',
                level: 'Avanzado',
                description: 'Tienes 3 pizzas y 8 amigos. ¿Cuántas porciones le tocan a cada uno? ¿Sobra algo? Diseña el algoritmo incluyendo condiciones.',
                hint: 'Usa variables y operaciones aritméticas con división y módulo.'
              },
              {
                icon: 'fi fi-rr-gym',
                title: 'Rutina de ejercicio semanal',
                level: 'Avanzado',
                description: 'Crea un algoritmo que planifique una rutina de ejercicio de 5 días. Debe alternar entre cardio y fuerza.',
                hint: 'Usa estructuras de repetición y condiciones.'
              },
              {
                icon: 'fi fi-rr-smartphone',
                title: 'Control de datos móviles',
                level: 'Avanzado',
                description: 'Diseña un algoritmo que avise cuando los datos móviles estén por acabarse (menos de 100MB) y que calcule cuántos días durarán.',
                hint: 'Necesitas variables para el saldo de datos y consumo diario.'
              },
              {
                icon: 'fi fi-rr-receipt',
                title: 'Calculadora de propinas',
                level: 'Avanzado',
                description: 'Crea un algoritmo que calcule la propina en un restaurante. El usuario ingresa el total y elige 10%, 15% o 20%.',
                hint: 'Usa porcentajes y muestra el total a pagar con propina.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-white border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow'
              >
                <div className='flex items-start justify-between'>
                  <i className={`${item.icon} text-4xl text-blue-600`}></i>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.level === 'Fácil' ? 'bg-green-100 text-green-700' : 
                    item.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-700' : 
                    'bg-red-100 text-red-700'
                  }`}>{item.level}</span>
                </div>
                <h3 className='text-2xl font-bold wrap-break-words'>
                  {item.title}
                </h3>
                <p className='text-zinc-600 leading-relaxed wrap-break-words'>
                  {item.description}
                </p>
                <div className='mt-2 p-3 bg-blue-50 rounded-xl border border-blue-100'>
                  <p className='text-sm text-blue-700 font-medium'>💡 Pista: {item.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video tutorial */}
        <div className='overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950'>
          <div className='p-6 sm:p-8 lg:p-10 flex flex-col gap-5'>
            <div className='flex items-center gap-3 text-blue-400 font-semibold'>
              <i className='fi fi-rr-play flex justify-center items-center'></i>
              Aprende con videos
            </div>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl'>Algoritmos para niños</h2>
            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>Video divertido que explica qué son los algoritmos usando ejemplos cotidianos. ¡Perfecto para estudiantes de todas las edades!</p>
          </div>
          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' src="https://www.youtube.com/embed/ozIO-HDFqNY?si=dKNIugi1O9WLsFHC" title='Practical Exercise' allowfullscreen></iframe>
          </div>
        </div>

        {/* Recursos adicionales */}
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Consejos para resolver ejercicios</h2>
          </div>
          <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-list',
                title: 'Paso a paso',
                text: 'Escribe cada paso claramente. No te saltes ninguno. Piensa como si estuvieras explicando a un robot.'
              },
              {
                icon: 'fi fi-rr-test',
                title: 'Prueba tu algoritmo',
                text: 'Sigue tus propios pasos como si fueras la computadora para ver si funciona correctamente.'
              },
              {
                icon: 'fi fi-rr-lightbulb',
                title: 'Simplifica',
                text: 'Si tu algoritmo es muy complicado, busca una manera más sencilla de hacer lo mismo.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 flex flex-col gap-4'
              >
                <i className={`${item.icon} text-4xl text-blue-600`}></i>
                <h3 className='text-xl font-bold wrap-break-words'>
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