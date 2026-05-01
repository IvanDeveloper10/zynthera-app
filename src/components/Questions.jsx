import { Fragment, useState } from 'react';

export default function Questions() {

  const [activateIndex, setActivateIndex] = useState(null);

  const questions = [
    {
      question: '¿Qué nivel de experiencia necesito?',
      answer: 'Zynthera está diseñado para todos, desde completos principiantes hasta desarrolladores experimentados. Los cursos se adaptan a tu ritmo.'
    },
    {
      question: '¿Puedo descargar el contenido?',
      answer: 'Ofrecemos guías en PDF y notas descargables. Sin embargo, los laboratorios requieren acceso en linea.'
    },
    {
      question: '¿Hay certificados disponibles?',
      answer: 'Sí. Al completar un curso recibes un certificado verificable que puedes compartir.'
    },
    {
      question: '¿Cuánto tiempo toma un curso?',
      answer: 'Depende del curso, Algunos toman 2-3 horas, otros más avanzados pueden tomar más tiempo.'
    },
    {
      question: '¿Qué navegadores son compatibles?',
      answer: 'Chrome, Firefox Safari y Edge. Recomendamos mantener tu navegador actualizado.'
    }
  ];

  const toggle = (index) => {
    setActivateIndex(activateIndex === index ? null : index);
  }
  return (
    <Fragment>
      <section className='w-full flex justify-center px-5 my-20'>
        <div className='w-full max-w-4xl flex flex-col gap-5'>
          <div>
            <h1 className='text-4xl sm:text-6xl font-bold text-fu'>Preguntas</h1>
            <p className='text-zinc-600'>Respuestas a lo que necesitas saber sobre Zynthera</p>
          </div>
          <div className='flex flex-col gap-4'>
            {questions.map((item, index) => (
              <div key={index} className='border-2 border-zinc-200 rounded-lg p-5 bg-zinc-50 transition-all'>
                <button onClick={() => toggle(index)} className='w-full flex justify-between items-center text-left hover:cursor-pointer'>
                  <h2 className='font-semibold text-lg text-fu'>
                    {item.question}
                  </h2>
                  <span className='text-xl'>
                    {activateIndex === index ? (
                      <i className='fi fi-rr-minus flex justify-center items-center'></i>
                    ) : (
                      <i className='fi fi-rr-plus flex justify-center items-center'></i>
                    )}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  activateIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                }`}>
                  <p className='text-zinc-600 text-sm text-fu'>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}