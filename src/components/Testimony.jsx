import { Fragment, useState } from 'react';

export default function Testimony() {

  const testimonies = [
    {
      name: 'Maria López',
      role: 'Estudiante de programación',
      text: 'Finalmente entiendo cómo funcionan los algoritmos. Las animaciones lo hacen obvio.',
      rating: 5
    },
    {
      name: 'Carlos Pérez',
      role: 'Desarrollador frontend',
      text: 'Aprendí React mucho más rápido gracias a esta plataforma web.',
      rating: 5
    },
    {
      name: 'Ana Torres',
      role: 'Estudiante de programación',
      text: 'Los ejemplos son claros y prácticos, super recomendado este recurso web.',
      rating: 4
    }
  ];

  const [index, setIndex] = useState(0);
  
  const prev = () => {
    setIndex(index === 0 ? testimonies.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === testimonies.length - 1 ? 0 : index + 1);
  };

  return (
    <Fragment>
      <section className='flex flex-col lg:flex-row justify-center items-center gap-10 text-fu my-20 py-10 px-5'>
        <main className='text-center lg:text-left max-w-xl'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Testimonios</h1>
          <p className='text-zinc-600 mt-2'>Historias de quienes ya aprendieron con nosotros</p>
        </main>
        <div className='flex flex-col items-center gap-4 mt-6 w-full max-w-md'>
          <div className='bg-white shadow-lg rounded-lg p-6 w-full text-center'>
            <div className='flex justify-center mb-2 text-yellow-500'>{'★'.repeat(testimonies[index].rating)}</div>
            <p className='italic mb-4 text-zinc-600'>"{testimonies[index].text}"</p>
            <h3 className='font-bold'>{testimonies[index].name}</h3>
            <span className='text-sm text-gray-500'>{testimonies[index].role}</span>
          </div>
          <div className='flex items-center gap-4'>
            <button onClick={prev} className='p-2 border border-zinc-200 rounded-lg hover:scale-95 transition-all'><i className='fi fi-rr-angle-left flex items-center justify-center'></i></button>
            <div className='flex gap-2'>
              {testimonies.map((_, i) => (
                <span 
                  key={i} 
                  onClick={() => setIndex(i)} 
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className='p-2 border border-zinc-200 rounded-lg hover:scale-95 transition-all'><i className='fi fi-rr-angle-right flex items-center justify-center'></i></button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}