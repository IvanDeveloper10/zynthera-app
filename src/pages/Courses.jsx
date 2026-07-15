import { Fragment, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterPage from '../components/FooterPage';

const coursesData = [
  {
    id: 'algoritmos',
    title: 'Algoritmos',
    description:
      'Domina estructuras, búsqueda y resolución eficiente de problemas.',
    category: 'programacion',
    level: 'Intermedio',
    duration: '24 horas',
    students: 58,
    image: 'https://cdn.hackclub.com/019e24c5-1f8b-7e52-af17-1f31cf1c9ce9/image-algoritmo.jpg',
    modules: 8,
    route: '/courses/learn/learn-algorithms'
  },
  {
    id: 'logica-programacion',
    title: 'Lógica De Programación',
    description:
      'Aprende a pensar como programador desde cero con ejercicios prácticos.',
    category: 'programacion',
    level: 'Principiante',
    duration: '18 horas',
    students: 37,
    image: 'https://cdn.hackclub.com/019e24c5-1c5f-7245-b830-86c60745aaa5/image-logic.jpg',
    modules: 6,
    route: '/courses/learn/learn-logic-programming'
  },
  {
    id: 'logica-matematica',
    title: 'Lógica Matemática',
    description:
      'Fortalece el razonamiento matemático aplicado a la computación.',
    category: 'ciencias',
    level: 'Avanzado',
    duration: '30 horas',
    students: 22,
    image: 'https://cdn.hackclub.com/019e24c5-18e6-7929-a64a-d43deef11bf7/image-matematica.jpg',
    modules: 10,
    route: '/courses/learn/learn-logic-math'
  },
  {
    id: 'teoria-sistemas',
    title: 'Teoría General De Sistemas',
    description:
      'Comprende sistemas complejos y pensamiento sistémico aplicado.',
    category: 'ciencias',
    level: 'Intermedio',
    duration: '20 horas',
    students: 35,
    image: 'https://cdn.hackclub.com/019e24c5-15ee-7197-a678-eb20134a3008/image-sistemas.jpg',
    modules: 7,
    route: '/courses/learn/learn-systems-theory'
  }
];

const categories = [
  {
    id: 'todos',
    name: 'Todos'
  },
  {
    id: 'programacion',
    name: 'Programación'
  },
  {
    id: 'ciencias',
    name: 'Ciencias'
  }
];

function CourseCard({ course }) {
  return (
    <Link
      to={course.route}
      className='group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-transform duration-300 will-change-transform transform-[translateZ(0)] flex flex-col'
    >
      <div className='relative overflow-hidden'>
        <img
          src={course.image}
          alt={course.title}
          loading='lazy'
          decoding='async'
          className='w-full h-56 object-cover group-hover:scale-[1.02] transition-transform duration-500 will-change-transform'
        />
        <div className='absolute top-4 left-4 bg-white text-zinc-700 border border-zinc-200 px-3 py-1 rounded-lg text-xs font-semibold'>
          {course.level}
        </div>
      </div>
      <div className='flex flex-col gap-5 p-6 flex-1'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold text-zinc-900 group-hover:text-purple-600 transition-colors duration-300'>
            {course.title}
          </h2>
          <p className='text-zinc-600 leading-relaxed text-sm'>
            {course.description}
          </p>
        </div>
        <div className='flex items-center justify-between text-sm text-zinc-500'>
          <div className='flex items-center gap-2'>
            <i className='fi fi-rr-clock flex justify-center items-center'></i>
            {course.duration}
          </div>
          <div className='flex items-center gap-2'>
            <i className='fi fi-rr-book-alt flex justify-center items-center'></i>
            {course.modules} módulos
          </div>
        </div>
        <div className='mt-auto pt-5 border-t border-zinc-100 flex items-center justify-between'>
          <span className='text-sm text-zinc-500'>
            {course.students} estudiantes
          </span>
          <div className='w-10 h-10 rounded-xl bg-zinc-900 text-white flex justify-center items-center group-hover:bg-purple-600 transition-colors duration-300'>
            <i className='fi fi-rr-arrow-right flex justify-center items-center'></i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Courses() {

  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {

      const matchesCategory =
        selectedCategory === 'todos' ||
        course.category === selectedCategory;

      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;

    });
  }, [selectedCategory, searchTerm]);

  return (
    <Fragment>
      <Navbar />
      <section className='w-full min-h-screen bg-zinc-100 text-black text-fu px-4'>
        <header className='flex justify-center py-10'>
          <div className='w-full max-w-7xl bg-white border border-zinc-200 rounded-3xl overflow-hidden'>
            <div className='grid lg:grid-cols-2 items-center'>
              <div className='flex flex-col gap-7 p-8 sm:p-12 lg:p-16'>
                <div className='w-fit bg-purple-100 text-purple-700 border border-purple-200 px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2'>
                  <i className='fi fi-rr-graduation-cap flex justify-center items-center'></i>+5,000 estudiantes aprendiendo</div>
                <div className='flex flex-col gap-5'>
                  <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-none text-po'>Explora cursos modernos de tecnología</h1>
                  <p className='text-zinc-600 text-base sm:text-lg max-w-xl leading-relaxed'>Aprende programación, algoritmos, matemáticas y pensamiento computacional con una experiencia visual moderna y práctica.</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                  <div className='relative w-full'>
                    <i className='fi fi-rr-search absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400'></i>
                    <input
                      type='text'
                      placeholder='Buscar cursos...'
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className='w-full bg-zinc-100 border border-zinc-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:border-purple-400 transition-colors duration-300'
                    />
                  </div>
                  <button className='bg-purple-600 text-white px-8 py-3 rounded-xl hover:scale-95 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap'>Explorar</button>
                </div>
              </div>
              <div className='hidden lg:flex justify-center items-center p-10'>
                <img
                  src='https://cdn.hackclub.com/019e26b4-752d-7026-9c7c-d00f18f8a6e2/image-courses.png'
                  alt='Technology'
                  loading='lazy'
                  decoding='async'
                  className='w-full max-w-xl object-contain'
                />
              </div>
            </div>
          </div>
        </header>
        <section className='flex justify-center mb-10'>
          <div className='w-full max-w-7xl flex flex-wrap gap-4'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-2 rounded-xl border text-sm font-medium transition-colors duration-300 hover:cursor-pointer
                  ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 border-purple-600 text-white'
                      : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>
        <main className='flex justify-center pb-20'>
          <div className='w-full max-w-7xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              ))}
            </div>
            {filteredCourses.length === 0 && (
              <div className='flex flex-col items-center justify-center text-center py-24'>
                <i className='fi fi-rr-search text-5xl text-zinc-300 mb-5'></i>
                <h2 className='text-3xl font-bold text-zinc-700 mb-3'>No se encontraron cursos</h2>
                <p className='text-zinc-500'>Intenta buscar otra categoría o curso.</p>
              </div>
            )}
          </div>
        </main>
        <section className='flex justify-center pb-20'>
          <div className='w-full max-w-7xl grid grid-cols-2 lg:grid-cols-4 bg-white border border-zinc-200 rounded-3xl overflow-hidden'>
            <div className='p-8 text-center border-b lg:border-b-0 lg:border-r border-zinc-200'>
              <h1 className='text-4xl font-bold'>9,980</h1>
              <p className='text-zinc-500 mt-2'>Estudiantes</p>
            </div>
            <div className='p-8 text-center border-b lg:border-b-0 lg:border-r border-zinc-200'>
              <h1 className='text-4xl font-bold'>55+</h1>
              <p className='text-zinc-500 mt-2'>Proyectos</p>
            </div>
            <div className='p-8 text-center border-b lg:border-b-0 lg:border-r border-zinc-200'>
              <h1 className='text-4xl font-bold'>4.8</h1>
              <p className='text-zinc-500 mt-2'>Calificación</p>
            </div>
            <div className='p-8 text-center'>
              <h1 className='text-4xl font-bold'>100%</h1>
              <p className='text-zinc-500 mt-2'>Online</p>
            </div>
          </div>
        </section>
        <section className='flex justify-center pb-24'>
          <div className='w-full max-w-7xl bg-zinc-900 rounded-3xl overflow-hidden'>
            <div className='flex flex-col xl:flex-row items-center justify-between gap-10 p-10 sm:p-14'>
              <div className='max-w-2xl'>
                <h1 className='text-white text-4xl sm:text-5xl font-bold leading-tight mb-4'>Empieza hoy tu camino en tecnología</h1>
                <p className='text-zinc-400 text-lg leading-relaxed'>Aprende habilidades reales con cursos diseñados para comprender, practicar y construir proyectos modernos.</p>
              </div>
              <Link to={'/'}>
                <button className='bg-purple-600 text-white px-8 py-3 rounded-xl hover:scale-95 transition-transform duration-300 hover:cursor-pointer whitespace-nowrap'>
                  Comenzar gratis
                </button>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <FooterPage />
    </Fragment>
  );
}