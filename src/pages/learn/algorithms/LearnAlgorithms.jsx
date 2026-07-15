import { Fragment, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import FooterPage from '../../../components/FooterPage';

const modules = [
  {
    id: '01',
    title: 'Fundamentos de Algoritmos',
    description: 'Aprende cómo funcionan los algoritmos, pseudocódigo y complejidad temporal.',
    lessons: [
      '¿Qué es un algoritmo?',
      'Diagramas de flujo',
      'Pseudocódigo',
      'Introducción a Big O',
      'Ejercicios prácticos'
    ]
  },
  {
    id: '02',
    title: 'Estructuras de Datos',
    description: 'Comprende arrays, listas, pilas, colas y árboles binarios.',
    lessons: [
      'Arrays y listas',
      'Pilas y colas',
      'Hash maps',
      'Árboles binarios',
      'Proyecto práctico'
    ]
  },
  {
    id: '03',
    title: 'Algoritmos de Ordenamiento',
    description: 'Domina Bubble Sort, Merge Sort, Quick Sort y técnicas modernas.',
    lessons: [
      'Bubble Sort',
      'Insertion Sort',
      'Merge Sort',
      'Quick Sort',
      'Comparación de rendimiento'
    ]
  },
  {
    id: '04',
    title: 'Búsqueda y Grafos',
    description: 'Explora BFS, DFS y algoritmos de rutas óptimas.',
    lessons: [
      'Búsqueda lineal',
      'Búsqueda binaria',
      'BFS',
      'DFS',
      'Algoritmo de Dijkstra'
    ]
  },
  {
    id: '05',
    title: 'Algoritmos Avanzados',
    description: 'Aprende programación dinámica, greedy y backtracking.',
    lessons: [
      'Programación dinámica',
      'Greedy algorithms',
      'Backtracking',
      'Problema de la mochila',
      'Proyecto final'
    ]
  }
];

const benefits = [
  {
    title: 'Explicaciones visuales',
    description: 'Aprende conceptos complejos mediante diagramas animados y simulaciones modernas.',
    image: 'https://cdn.hackclub.com/019e26b9-2435-7244-9d48-3fbcff0b5ea5/pexels-vanessa-garcia-6326072.jpg'
  },
  {
    title: 'Proyectos reales',
    description: 'Construye sistemas funcionales mientras fortaleces tu lógica computacional.',
    image: 'https://cdn.hackclub.com/019e26ba-8a58-76f4-bd02-25152dcd88a1/pexels-vanessa-loring-7868836.jpg'
  },
  {
    title: 'Aprendizaje moderno',
    description: 'Una experiencia inmersiva diseñada para aprender tecnología de forma clara.',
    image: 'https://cdn.hackclub.com/019e26bb-586b-7fad-97ce-df1941de691a/pexels-bipspatiala-31864442.jpghttps://cdn.hackclub.com/019e24c7-4f96-7d32-aece-3299ba7306b7/tech-image.png'
  }
];

const ModuleCard = memo(({ module }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-zinc-100 border-2 border-zinc-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-300'>
      <button
        onClick={() => setOpen(!open)}
        className='w-full p-6 sm:p-8 flex justify-between items-start gap-5 hover:bg-zinc-200/40 transition-all duration-300 hover:cursor-pointer'
      >
        <div className='flex gap-5 text-left'>
          <div className='min-w-14 h-14 rounded-xl bg-purple-600 text-white flex justify-center items-center font-bold text-lg shadow-lg shadow-purple-600/20'>
            {module.id}
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-2xl sm:text-3xl font-bold text-po leading-tight'>
              {module.title}
            </h1>
            <p className='text-po leading-relaxed max-w-3xl'>
              {module.description}
            </p>
          </div>
        </div>
        <div
          className={`
            min-w-12 h-12 rounded-xl bg-white border border-zinc-200
            flex justify-center items-center text-zinc-600
            transition-all duration-500
            ${open ? 'rotate-180' : ''}
          `}
        >
          <i className='fi fi-rr-angle-small-down flex justify-center items-center text-2xl'></i>
        </div>
      </button>
      <div
        className={`
          grid transition-all duration-500 ease-in-out
          ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'}
        `}
      >
        <div className='overflow-hidden'>
          <div className='px-6 sm:px-8 pb-8 border-t border-zinc-200'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-8'>
              {module.lessons.map((lesson, index) => (
                <div
                  key={index}
                  className='bg-white border border-zinc-200 rounded-xl p-4 flex items-center gap-4 hover:scale-[1.02] hover:border-purple-300 transition-all duration-300'
                >
                  <div className='min-w-10 h-10 rounded-lg bg-purple-600 text-white flex justify-center items-center'>
                    <i className='fi fi-rr-check flex justify-center items-center'></i>
                  </div>
                  <span className='text-po font-medium'>
                    {lesson}
                  </span>
                </div>
              ))}
            </div>
            <div className='flex flex-wrap gap-4 pt-8'>
              <button className='bg-purple-600 text-white px-8 py-2 rounded-lg hover:scale-95 hover:bg-purple-500 transition-all duration-300 hover:cursor-pointer'>Empezar módulo</button>
              <button className='border-2 border-zinc-300 bg-white px-8 py-2 rounded-lg hover:bg-zinc-100 transition-all duration-300 hover:cursor-pointer'>Ver contenido</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function LearnAlgorithms() {
  return (
    <Fragment>
      <Navbar />
      <section className='w-full min-h-screen bg-zinc-100 text-black flex flex-col items-center px-4 text-fu overflow-hidden'>
        <main className='flex flex-col lg:flex-row justify-between border-2 border-zinc-200 rounded-xl my-10 w-full max-w-7xl bg-zinc-100 overflow-hidden'>
          <div className='flex flex-col gap-6 p-6 sm:p-10 w-full lg:w-2/4'>
            <div className='flex items-center gap-2 bg-purple-100 border border-purple-200 text-purple-700 px-4 py-2 rounded-lg w-fit text-sm font-semibold'>
              <i className='fi fi-rr-chart-tree flex justify-center items-center'></i>
              Curso profesional de algoritmos
            </div>
            <h1 className='font-extrabold text-4xl sm:text-6xl lg:text-8xl text-po leading-none'>Aprende Algoritmos</h1>
            <p className='text-base sm:text-lg text-po leading-relaxed'>Domina estructuras de datos, optimización, lógica computacional, grafos y algoritmos modernos mediante experiencias visuales, ejercicios interactivos y proyectos reales.</p>
            <div className='flex flex-col sm:flex-row gap-5'>
              <Link to={'/courses/learn/learn-algorithms/page-lessons-algorithms'}>
                <button className='flex justify-center items-center gap-2 bg-purple-600 px-8 py-2 rounded-lg text-white hover:scale-95 hover:cursor-pointer transition-all'>
                  <i className='fi fi-rr-play flex justify-center items-center'></i>
                  Explorar
                </button>
              </Link>
              <button className='bg-zinc-800 px-8 py-2 rounded-lg text-white hover:scale-95 hover:cursor-pointer transition-all'>Ver módulos</button>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4'>
              <div className='bg-white border border-zinc-200 rounded-xl p-4'>
                <h1 className='text-3xl font-bold text-purple-600'>24h</h1>
                <p className='text-sm text-zinc-500'>Duración</p>
              </div>
              <div className='bg-white border border-zinc-200 rounded-xl p-4'>
                <h1 className='text-3xl font-bold text-purple-600'>8</h1>
                <p className='text-sm text-zinc-500'>Módulos</p>
              </div>
              <div className='bg-white border border-zinc-200 rounded-xl p-4'>
                <h1 className='text-3xl font-bold text-purple-600'>5K+</h1>
                <p className='text-sm text-zinc-500'>Estudiantes</p>
              </div>
              <div className='bg-white border border-zinc-200 rounded-xl p-4'>
                <h1 className='text-3xl font-bold text-purple-600'>4.9</h1>
                <p className='text-sm text-zinc-500'>Rating</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end w-full lg:w-auto relative'>
            <div className='absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'></div>
            <div className='w-full lg:w-xl aspect-square flex justify-center items-center p-6'>
              <img
                src='https://cdn.hackclub.com/019e24ba-b964-73bd-8d2e-36e98119f00b/learn-programming.png'
                alt='Learn Algorithms'
                className='w-full h-full object-contain hover:scale-[1.02] transition-all duration-500 drop-shadow-2xl'
              />
            </div>
          </div>
        </main>
        <section className='flex flex-col items-center my-20 w-full'>
          <main className='my-10 text-center'>
            <h1 className='font-bold text-fu'>Ventajas</h1>
            <h1 className='font-bold text-4xl sm:text-6xl text-fu'>Aprende de forma moderna</h1>
            <h1 className='font-light text-fu'>Diseñado para una experiencia visual y práctica</h1>
          </main>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='rounded-xl overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md transition-all bg-zinc-100 border-2 border-zinc-200'
              >
                <img
                  src={benefit.image}
                  className='w-full h-52 object-cover'
                  alt={benefit.title}
                />
                <div className='flex flex-col gap-3 p-6 flex-1'>
                  <h1 className='font-bold text-fu text-sm'>Educación tecnológica</h1>
                  <h1 className='text-fu text-3xl font-semibold leading-tight'>
                    {benefit.title}
                  </h1>
                  <p className='text-fu text-sm text-zinc-600'>
                    {benefit.description}
                  </p>
                  <div className='mt-auto flex gap-3 items-center'>
                    <button className='text-fu border-2 border-zinc-300 px-5 py-1 rounded-lg hover:cursor-pointer hover:scale-95 transition-all'>Explorar</button>
                    <Link
                      to='/courses'
                      className='flex justify-center items-center gap-2 hover:scale-95 transition-all text-fu'
                    >
                      Más
                      <i className='fi fi-rr-angle-right flex justify-center items-center text-xs'></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className='w-full max-w-7xl flex flex-col gap-10 mb-24'>
          <div className='flex flex-col gap-4 text-center items-center'>
            <h1 className='font-bold text-fu'>Contenido</h1>
            <h1 className='font-bold text-4xl sm:text-6xl text-fu'>Explora los módulos</h1>
            <p className='text-po max-w-3xl'>Aprende desde fundamentos hasta técnicas avanzadas con una experiencia moderna y totalmente práctica.</p>
          </div>
          <div className='flex flex-col gap-6'>
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
              />
            ))}
          </div>
        </section>
        <section className='w-full max-w-7xl mb-24'>
          <div className='bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 relative'>
            <div className='absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full'></div>
            <div className='relative flex flex-col lg:flex-row justify-between items-center gap-10 p-8 sm:p-12'>
              <div className='max-w-3xl flex flex-col gap-4'>
                <h1 className='text-white text-4xl sm:text-5xl font-bold leading-tight'>Obtén tu certificado profesional</h1>
                <p className='text-zinc-400 text-lg'>Completa los módulos, ejercicios y proyectos para fortalecer tu perfil profesional.</p>
              </div>
              <Link to='/courses'>
                <button className='bg-purple-600 text-white px-8 py-3 rounded-lg hover:scale-95 hover:bg-purple-500 transition-all duration-300 whitespace-nowrap hover:cursor-pointer'>Explorar más cursos</button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <FooterPage />
    </Fragment>
  );
}