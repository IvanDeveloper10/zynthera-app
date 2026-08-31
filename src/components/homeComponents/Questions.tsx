import { Fragment } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Questions() {
  const questions = [
    {
      question: '¿Qué nivel de experiencia necesito?',
      answer: 'Zynthera está diseñado para todos, desde completos principiantes hasta desarrolladores experimentados. Los cursos se adaptan a tu ritmo.',
    },
    {
      question: '¿Puedo descargar el contenido?',
      answer: 'Ofrecemos guías en PDF y notas descargables. Sin embargo, los laboratorios requieren acceso en línea.',
    },
    {
      question: '¿Hay certificados disponibles?',
      answer: 'Sí. Al completar un curso recibes un certificado verificable que puedes compartir.',
    },
    {
      question: '¿Cuánto tiempo toma un curso?',
      answer: 'Depende del curso. Algunos toman 2-3 horas, mientras que otros más avanzados pueden tomar más tiempo.',
    },
    {
      question: '¿Qué navegadores son compatibles?',
      answer: 'Chrome, Firefox, Safari y Edge. Recomendamos mantener tu navegador actualizado.',
    },
  ];
  return (
    <Fragment>
      <section className='w-full flex justify-center px-5 my-20'>
        <div className='w-full max-w-4xl flex flex-col gap-5'>
          <div className='text-fu'>
            <h1 className='text-4xl sm:text-6xl font-bold'>
              Preguntas
            </h1>
            <p className='text-zinc-600'>
              Respuestas a lo que necesitas saber sobre Zynthera
            </p>
          </div>
          <Accordion className='flex flex-col gap-4'>
            {questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='rounded-lg bg-zinc-50 px-5'
              >
                <AccordionTrigger className='py-5 text-left text-lg font-semibold text-fu hover:no-underline cursor-pointer'>
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className='pb-5 text-sm text-zinc-600 text-fu'>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Fragment>
  );
}