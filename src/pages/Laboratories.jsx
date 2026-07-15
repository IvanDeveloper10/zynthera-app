import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Laboratories() {
  const laboratories = [
    {
      id: 'algorithms',
      name: 'Algoritmos',
      description: 'Fundamentos de algoritmos y estructuras de datos',
      icon: 'fi fi-rr-code-branch',
      color: 'from-indigo-500 to-purple-500',
      status: 'Disponible',
      exercises: 12,
      difficulty: 'Intermedio'
    },
    
  ];

  return (
    <Fragment>
      <Navbar />
      <div className='min-h-screen bg-gray-50 text-fu'>
        <div className='bg-white border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div>
                <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3'>
                  <i className='fi fi-rr-flask text-purple-600'></i>
                  Laboratorios
                </h1>
                <p className='text-gray-600 mt-1'>
                  Explora nuestros laboratorios interactivos y pon en práctica tus conocimientos
                </p>
              </div>
              <div className='flex items-center gap-4 text-sm'>
                <div className='flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg'>
                  <i className='fi fi-rr-check-circle text-green-600'></i>
                  <span className='text-gray-700'>
                    {laboratories.filter(lab => lab.status === 'Disponible').length} disponibles
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg'>
                  <i className='fi fi-rr-clock text-yellow-600'></i>
                  <span className='text-gray-700'>
                    {laboratories.filter(lab => lab.status === 'Próximamente').length} próximamente
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laboratories Grid */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {laboratories.map((lab) => (
              <Link
                key={lab.id}
                to={lab.status === 'Disponible' ? `/laboratories/${lab.id}` : '#'}
                className={`group bg-white rounded-lg border ${
                  lab.status === 'Disponible' 
                    ? 'border-gray-200 hover:border-purple-300 hover:shadow-lg' 
                    : 'border-gray-200 opacity-60 cursor-not-allowed'
                } transition-all duration-200 overflow-hidden`}
              >
                <div className='p-6'>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-linear-to-br ${lab.color} flex items-center justify-center text-white text-xl mb-4`}>
                    <i className={lab.icon}></i>
                  </div>

                  {/* Content */}
                  <div className='space-y-3'>
                    <div className='flex items-start justify-between gap-2'>
                      <h3 className='font-semibold text-gray-900 group-hover:text-purple-600 transition-colors'>
                        {lab.name}
                      </h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${
                        lab.status === 'Disponible'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {lab.status}
                      </span>
                    </div>

                    <p className='text-sm text-gray-600 line-clamp-2'>
                      {lab.description}
                    </p>

                    <div className='flex items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100'>
                      <span className='flex items-center gap-1'>
                        <i className='fi fi-rr-document'></i>
                        {lab.exercises} ejercicios
                      </span>
                      <span className='flex items-center gap-1'>
                        <i className='fi fi-rr-chart-line'></i>
                        {lab.difficulty}
                      </span>
                    </div>

                    <div className='pt-2'>
                      <span className={`text-sm font-medium inline-flex items-center gap-1 ${
                        lab.status === 'Disponible'
                          ? 'text-purple-600 group-hover:gap-2 transition-all'
                          : 'text-gray-400'
                      }`}>
                        {lab.status === 'Disponible' ? 'Acceder' : 'Próximamente'}
                        {lab.status === 'Disponible' && (
                          <i className='fi fi-rr-arrow-right text-xs'></i>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                {lab.status === 'Disponible' && (
                  <div className='h-1 bg-gray-100'>
                    <div className='h-full w-0 bg-linear-to-r from-purple-500 to-indigo-500 group-hover:w-1/3 transition-all duration-500'></div>
                  </div>
                )}
              </Link>
            ))}
          </div>

          {/* Info Cards */}
          <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-lg border border-gray-200 p-6'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0'>
                  <i className='fi fi-rr-brain'></i>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>Aprendizaje práctico</h3>
                  <p className='text-sm text-gray-600'>
                    Cada laboratorio incluye ejercicios prácticos y ejemplos interactivos para reforzar tu aprendizaje.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-lg border border-gray-200 p-6'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-600 shrink-0'>
                  <i className='fi fi-rr-star'></i>
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900 mb-1'>Evaluación continua</h3>
                  <p className='text-sm text-gray-600'>
                    Recibe retroalimentación inmediata y sigue tu progreso en cada laboratorio completado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}