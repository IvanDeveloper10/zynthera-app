import { Fragment } from 'react';

export default function BigO() {
  return (
    <Fragment>
      <section className='w-full max-w-full overflow-hidden flex flex-col gap-10 lg:gap-14'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-3 text-blue-600 font-semibold text-sm sm:text-base'>
            <div className='w-3 h-3 rounded-full bg-blue-600'></div>
            Eficiencia de algoritmos
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-po leading-[0.95] wrap-break-words'>Notación Big O</h1>
          <p className='text-base sm:text-lg text-zinc-600 leading-relaxed max-w-4xl'>La notación Big O nos ayuda a saber qué tan rápido o lento es un programa. Es como una calificación que le ponemos a nuestros algoritmos para saber si son buenos, regulares o malos cuando trabajan con mucha información.</p>
        </div>
        <div className='w-full overflow-hidden rounded-3xl border border-zinc-200'>
          <img
            src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop'
            alt='Big O notation concept'
            className='w-full h-[220] sm:h-[320] lg:h-[450] object-cover'
          />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-chart-line-up flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>Tipos de Big O</h2>
            <p className='text-zinc-600 leading-relaxed'>Imagina que tienes que buscar un libro en una biblioteca:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li><span className='font-bold'>O(1) - Súper rápido</span> 🚀<br/>Sabes exactamente dónde está el libro</li>
              <li><span className='font-bold'>O(log n) - Muy rápido</span> ⚡<br/>Vas a la sección y buscas por orden</li>
              <li><span className='font-bold'>O(n) - Normal</span> 📚<br/>Revisas libro por libro hasta encontrarlo</li>
              <li><span className='font-bold'>O(n²) - Lento</span> 🐢<br/>Comparas cada libro con todos los demás</li>
              <li><span className='font-bold'>O(2^n) - Súper lento</span> 🐌<br/>Haces muchas combinaciones sin sentido</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Entre más pequeña sea la O, mejor es el algoritmo.</p>
          </div>
          <div className='min-w-0 bg-zinc-100 border border-zinc-200 rounded-3xl p-6 lg:p-8 flex flex-col gap-5'>
            <div className='w-14 h-14 rounded-2xl bg-blue-600 text-white flex justify-center items-center'>
              <i className='fi fi-rr-crown flex justify-center items-center text-2xl'></i>
            </div>
            <h2 className='text-2xl lg:text-3xl font-bold leading-tight'>¿Por qué es importante?</h2>
            <p className='text-zinc-600 leading-relaxed'>El Big O nos ayuda a:</p>
            <ul className='flex flex-col gap-3 text-zinc-700'>
              <li>• <span className='font-bold'>Elegir el mejor camino</span><br/>Como cuando eliges la ruta más corta para llegar a la escuela</li>
              <li>• <span className='font-bold'>Evitar programas lentos</span><br/>Nadie quiere esperar mucho tiempo</li>
              <li>• <span className='font-bold'>Ahorrar memoria</span><br/>Usar solo lo necesario</li>
              <li>• <span className='font-bold'>Hacer programas felices</span><br/>Que trabajen rápido y bien</li>
            </ul>
            <p className='text-zinc-600 leading-relaxed'>Es como aprender a ser un programador más inteligente.</p>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Entendiendo con ejemplos</h2>
            <p className='text-zinc-600 text-base sm:text-lg'>Vamos a ver cómo funciona con cosas que conoces.</p>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                number: '1',
                title: 'Buscar un número en una lista',
                text: 'Si tienes 10 números y buscas uno, revisas hasta encontrarlo. Eso es O(n). Con 100 números, revisas 100. Es como buscar un juguete en tu cuarto.',
                symbol: '🔎'
              },
              {
                number: '2',
                title: 'Diccionario o guía telefónica',
                text: 'Abres por la mitad, ves si está antes o después, y así hasta encontrarlo. Eso es O(log n). Con 1000 páginas, solo necesitas 10 pasos. ¡Súper rápido!',
                symbol: '📖'
              },
              {
                number: '3',
                title: 'Sumar dos números',
                text: 'Siempre haces una sola operación, sin importar si los números son grandes o pequeños. Eso es O(1). Como saber cuánto es 2+2, siempre es rápido.',
                symbol: '➕'
              },
              {
                number: '4',
                title: 'Comparar todos contra todos',
                text: 'Cuando comparas cada elemento con todos los demás, es O(n²). Si tienes 10 elementos, haces 100 comparaciones. Con 100, haces 10,000. ¡Se vuelve muy lento!',
                symbol: '🔄'
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
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-4xl'>Big O explicado para niños</h2>
            <p className='text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl'>Aprende sobre la eficiencia de los algoritmos con ejemplos divertidos y fáciles de entender. ¡Ideal para futuros programadores! Mira este video de Michael Sambol</p>
          </div>
          <div className='aspect-video w-full'>
            <iframe className='w-full h-full' title='Big O for beginners' allowFullScreen src="https://www.youtube.com/embed/__vX2sjlpXU?si=z6uMv7FeEIQFDMBl"></iframe>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-3xl lg:text-4xl font-black'>Practica con estos retos</h2>
          </div>
          <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-2'>
            {[
              {
                icon: 'fi fi-rr-pizza-slice',
                title: 'Repartir pizzas',
                text: 'Tienes que repartir pizzas a 10 amigos. ¿Qué Big O sería si le das una a cada uno?'
              },
              {
                icon: 'fi fi-rr-stairs',
                title: 'Subir escaleras',
                text: 'Si subes una escalera de 100 escalones, ¿cuántos pasos das? ¿Es O(n)?'
              },
              {
                icon: 'fi fi-rr-book',
                title: 'Leer un libro',
                text: 'Buscas una palabra en un libro de 500 páginas. ¿Cómo lo harías más rápido?'
              },
              {
                icon: 'fi fi-rr-school',
                title: 'Lista de estudiantes',
                text: 'Tienes que encontrar a un estudiante en una lista de 1000 nombres. ¿Cuál es la mejor manera?'
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