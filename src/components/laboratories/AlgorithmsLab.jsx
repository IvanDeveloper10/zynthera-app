import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AlgorithmsLab() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  const exercises = [
    {
      id: 1,
      title: 'Complejidad Algorítmica',
      description: 'Analiza la complejidad temporal del siguiente algoritmo:',
      code: `function buscarElemento(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}`,
      options: [
        'O(1) - Tiempo constante',
        'O(log n) - Tiempo logarítmico',
        'O(n) - Tiempo lineal',
        'O(n²) - Tiempo cuadrático'
      ],
      correct: 2,
      hint: 'El algoritmo recorre cada elemento del arreglo una vez en el peor de los casos.'
    },
    {
      id: 2,
      title: 'Estructura de Datos',
      description: '¿Cuál es la estructura de datos más adecuada para implementar una cola de prioridad?',
      options: [
        'Array simple',
        'Lista enlazada',
        'Heap binario',
        'Árbol binario de búsqueda'
      ],
      correct: 2,
      hint: 'Un heap permite acceso eficiente al elemento con mayor prioridad.'
    },
    {
      id: 3,
      title: 'Algoritmo de Ordenamiento',
      description: '¿Cuál es la complejidad temporal del algoritmo QuickSort en el caso promedio?',
      options: [
        'O(n)',
        'O(n log n)',
        'O(n²)',
        'O(log n)'
      ],
      correct: 1,
      hint: 'QuickSort divide el problema y resuelve recursivamente cada parte.'
    },
    {
      id: 4,
      title: 'Búsqueda Binaria',
      description: '¿Qué requisito debe cumplir un arreglo para aplicar búsqueda binaria?',
      options: [
        'Debe ser de tipo numérico',
        'Debe estar ordenado',
        'Debe ser de tamaño par',
        'Debe ser una lista enlazada'
      ],
      correct: 1,
      hint: 'La búsqueda binaria divide el espacio de búsqueda a la mitad en cada paso.'
    },
    {
      id: 5,
      title: 'Recursión',
      description: '¿Qué es un caso base en una función recursiva?',
      options: [
        'La condición que termina la recursión',
        'El primer llamado a la función',
        'La función que llama a otra función',
        'El último parámetro de la función'
      ],
      correct: 0,
      hint: 'Los casos base previenen la recursión infinita.'
    }
  ];

  const handleAnswerSelect = (exerciseId, optionIndex) => {
    if (showResults) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [exerciseId]: optionIndex
    }));
  };

  const handleCheckAnswer = (exerciseId) => {
    const exercise = exercises.find(e => e.id === exerciseId);
    if (selectedAnswers[exerciseId] === undefined) return;

    setUserAnswers(prev => ({
      ...prev,
      [exerciseId]: selectedAnswers[exerciseId] === exercise.correct
    }));
  };

  const getTotalCorrect = () => {
    return exercises.filter(ex => userAnswers[ex.id] === true).length;
  };

  const getTotalAnswered = () => {
    return Object.keys(userAnswers).length;
  };

  const currentExercise = exercises[currentStep];

  return (
    <Fragment>
      <div className='min-h-screen bg-gray-50 text-fu'>
        <div className='bg-white border-b border-gray-200 sticky top-0 z-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <div className='flex items-center gap-4'>
                <Link to='/laboratories' className='text-gray-600 hover:text-gray-900 transition-colors'>
                  <i className='fi fi-rr-arrow-left flex items-center text-lg'></i>
                </Link>
                <h1 className='text-xl font-semibold text-gray-900'>Laboratorio de Algoritmos</h1>
              </div>
              <div className='flex items-center gap-4 text-sm text-gray-600'>
                <span>Progreso: {getTotalAnswered()}/{exercises.length}</span>
                <span className='w-px h-6 bg-gray-200'></span>
                <span className={getTotalAnswered() === exercises.length ? 'text-green-600' : ''}>
                  Aciertos: {getTotalCorrect()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
            <div className='lg:col-span-8'>
              <div className='bg-white rounded-lg border border-gray-200 p-6'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm font-medium text-gray-500'>
                      Ejercicio {currentStep + 1} de {exercises.length}
                    </span>
                    <span className='text-sm text-gray-500'>
                      {userAnswers[currentExercise.id] !== undefined && (
                        <span className={userAnswers[currentExercise.id] ? 'text-green-600' : 'text-red-600'}>
                          {userAnswers[currentExercise.id] ? '✓ Correcto' : '✗ Incorrecto'}
                        </span>
                      )}
                    </span>
                  </div>
                  <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                    {currentExercise.title}
                  </h2>
                  <p className='text-gray-600'>
                    {currentExercise.description}
                  </p>
                </div>

                {currentExercise.code && (
                  <div className='mb-6 bg-gray-50 rounded-lg border border-gray-200 p-4'>
                    <pre className='text-sm text-gray-800 font-mono whitespace-pre-wrap'>
                      {currentExercise.code}
                    </pre>
                  </div>
                )}

                <div className='space-y-3 mb-6'>
                  {currentExercise.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentExercise.id, index)}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                        selectedAnswers[currentExercise.id] === index
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${
                        userAnswers[currentExercise.id] !== undefined && 
                        index === currentExercise.correct
                          ? 'border-green-500 bg-green-50'
                          : userAnswers[currentExercise.id] !== undefined && 
                            selectedAnswers[currentExercise.id] === index && 
                            index !== currentExercise.correct
                          ? 'border-red-500 bg-red-50'
                          : ''
                      }`}
                      disabled={userAnswers[currentExercise.id] !== undefined}
                    >
                      <span className='flex items-center gap-3'>
                        <span className='text-sm font-medium text-gray-500'>
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className='text-gray-800'>{option}</span>
                      </span>
                    </button>
                  ))}
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex gap-2'>
                    {userAnswers[currentExercise.id] === undefined ? (
                      <button
                        onClick={() => handleCheckAnswer(currentExercise.id)}
                        disabled={selectedAnswers[currentExercise.id] === undefined}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${
                          selectedAnswers[currentExercise.id] !== undefined
                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        Verificar respuesta
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedAnswers(prev => ({ ...prev, [currentExercise.id]: undefined }));
                          setUserAnswers(prev => {
                            const newAnswers = { ...prev };
                            delete newAnswers[currentExercise.id];
                            return newAnswers;
                          });
                        }}
                        className='px-4 py-2 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all'
                      >
                        Reintentar
                      </button>
                    )}
                    {userAnswers[currentExercise.id] !== undefined && (
                      <button
                        onClick={() => {
                          alert(currentExercise.hint);
                        }}
                        className='px-4 py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-all'
                      >
                        <i className='fi fi-rr-lightbulb flex items-center'></i>
                      </button>
                    )}
                  </div>
                  <div className='flex gap-2'>
                    <button
                      onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                      disabled={currentStep === 0}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentStep > 0
                          ? 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                          : 'text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() => setCurrentStep(prev => Math.min(exercises.length - 1, prev + 1))}
                      disabled={currentStep === exercises.length - 1}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        currentStep < exercises.length - 1
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:col-span-4'>
              <div className='bg-white rounded-lg border border-gray-200 p-6'>
                <h3 className='font-semibold text-gray-900 mb-4'>Progreso General</h3>
              
                <div className='mb-4'>
                  <div className='flex justify-between text-sm text-gray-600 mb-1'>
                    <span>Completado</span>
                    <span>{Math.round((getTotalAnswered() / exercises.length) * 100)}%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div 
                      className='bg-purple-600 h-2 rounded-full transition-all duration-300'
                      style={{ width: `${(getTotalAnswered() / exercises.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className='space-y-2'>
                  {exercises.map((ex, index) => (
                    <button
                      key={ex.id}
                      onClick={() => setCurrentStep(index)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                        currentStep === index
                          ? 'bg-purple-50 border border-purple-200'
                          : 'hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <div className='flex items-center gap-3'>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          userAnswers[ex.id] === true
                            ? 'bg-green-100 text-green-700'
                            : userAnswers[ex.id] === false
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          {userAnswers[ex.id] === true
                            ? '✓'
                            : userAnswers[ex.id] === false
                            ? '✗'
                            : index + 1}
                        </span>
                        <span className='text-sm text-gray-700'>{ex.title}</span>
                      </div>
                      {userAnswers[ex.id] !== undefined && (
                        <span className={`text-xs ${
                          userAnswers[ex.id] ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {userAnswers[ex.id] ? 'Completado' : 'Reintentar'}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                {getTotalAnswered() === exercises.length && (
                  <div className='mt-6 pt-6 border-t border-gray-200'>
                    <div className='text-center'>
                      <div className='text-3xl font-bold text-gray-900 mb-1'>
                        {getTotalCorrect()}/{exercises.length}
                      </div>
                      <p className='text-sm text-gray-600'>
                        {getTotalCorrect() === exercises.length
                          ? '¡Excelente! Has completado todos los ejercicios correctamente.'
                          : getTotalCorrect() >= exercises.length * 0.7
                          ? 'Buen trabajo. Revisa los ejercicios que fallaste para mejorar.'
                          : 'Te recomendamos repasar los conceptos y volver a intentarlo.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}