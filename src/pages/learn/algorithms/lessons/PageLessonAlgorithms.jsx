import { Fragment, lazy, Suspense, useMemo, useState, useEffect } from 'react';
import Navbar from '../../../../components/Navbar';
import FooterPage from '../../../../components/FooterPage';


// Module one 
const WhatIsAlgorithm = lazy(() => import('../../../../components/algorithmTopics/moduleOne/WhatIsAlgorithm'));
const Flowcharts = lazy(() => import('../../../../components/algorithmTopics/moduleOne/Flowcharts'));
const Pseudocode = lazy(() => import('../../../../components/algorithmTopics/moduleOne/Pseudocode'));
const BigO = lazy(() => import('../../../../components/algorithmTopics/moduleOne/BigO'));
const PracticalExercises = lazy(() => import('../../../../components/algorithmTopics/moduleOne/PracticalExercises'));

// Module two
const ArraysAndLists = lazy(() => import('../../../../components/algorithmTopics/moduleTwo/ArraysAndLists'));
const PilesAndQueues = lazy(() => import('../../../../components/algorithmTopics/moduleTwo/PilesAndQueues'));
const HashMaps = lazy(() => import('../../../../components/algorithmTopics/moduleTwo/HashMaps'));
const BinaryTrees = lazy(() => import('../../../../components/algorithmTopics/moduleTwo/BinaryTrees'));
const PracticeProject = lazy(() => import('../../../../components/algorithmTopics/moduleTwo/PracticeProject'));

// Module three
const BubbleSort = lazy(() => import('../../../../components/algorithmTopics/moduleThree/BubbleSort'));
const InsertionSort = lazy(() => import('../../../../components/algorithmTopics/moduleThree/InsertionSort'));
const MergeSort = lazy(() => import('../../../../components/algorithmTopics/moduleThree/MergeSort'));
const QuickSort = lazy(() => import('../../../../components/algorithmTopics/moduleThree/QuickSort'));
const Performance = lazy(() => import('../../../../components/algorithmTopics/moduleThree/Performance'));

// Module four
const LinearSearch = lazy(() => import('../../../../components/algorithmTopics/moduleFour/LinearSearch'));
const BinarySearch = lazy(() => import('../../../../components/algorithmTopics/moduleFour/BinarySearch'));
const Bfs = lazy(() => import('../../../../components/algorithmTopics/moduleFour/Bfs'));
const Dfs = lazy(() => import('../../../../components/algorithmTopics/moduleFour/Dfs'));
const Dijkstra = lazy(() => import('../../../../components/algorithmTopics/moduleFour/Dijkstra'));

// Module five
const DynamicProgramming = lazy(() => import('../../../../components/algorithmTopics/ModuleFive/DynamicProgramming'));
const Greedy = lazy(() => import('../../../../components/algorithmTopics/ModuleFive/Greedy'));
const Backtracking = lazy(() => import('../../../../components/algorithmTopics/ModuleFive/Backtracking'));
const Knapsack = lazy(() => import('../../../../components/algorithmTopics/ModuleFive/Knapsack'));
const FinalProject = lazy(() => import('../../../../components/algorithmTopics/ModuleFive/FinalProject'));

const courseModules = [
  {
    id: '01',
    title: 'Fundamentos de Algoritmos',
    description: 'Aprende cómo funcionan los algoritmos, pseudocódigo y complejidad temporal.',
    icon: 'fi fi-rr-chart-tree',
    color: 'purple',
    lessons: [
      { id: 'what-is-algorithm', title: '¿Qué es un algoritmo?', component: WhatIsAlgorithm },
      { id: 'flowcharts', title: 'Diagramas de flujo', component: Flowcharts },
      { id: 'pseudocode', title: 'Pseudocódigo', component: Pseudocode },
      { id: 'big-o', title: 'Introducción a Big O', component: BigO },
      { id: 'practical-exercises', title: 'Ejercicios prácticos', component: PracticalExercises }
    ]
  },
  {
    id: '02',
    title: 'Estructuras de Datos',
    description: 'Comprende arrays, listas, pilas, colas y árboles binarios.',
    icon: 'fi fi-rr-database',
    color: 'blue',
    lessons: [
      { id: 'arrays-and-lists', title: 'Arrays y listas', component: ArraysAndLists },
      { id: 'stacks', title: 'Pilas y colas', component: PilesAndQueues  },
      { id: 'hashmaps', title: 'Hash maps', component: HashMaps },
      { id: 'trees', title: 'Árboles binarios', component: BinaryTrees },
      { id: 'project', title: 'Proyecto práctico', component: PracticeProject }
    ]
  },
  {
    id: '03',
    title: 'Algoritmos de Ordenamiento',
    description: 'Domina Bubble Sort, Merge Sort y Quick Sort.',
    icon: 'fi fi-rr-sort',
    color: 'green',
    lessons: [
      { id: 'bubble-sort', title: 'Bubble Sort', component: BubbleSort },
      { id: 'insertion-sort', title: 'Insertion Sort', component: InsertionSort },
      { id: 'merge-sort', title: 'Merge Sort', component: MergeSort },
      { id: 'quick-sort', title: 'Quick Sort', component: QuickSort },
      { id: 'performance', title: 'Comparación de rendimiento', component: Performance }
    ]
  },
  {
    id: '04',
    title: 'Búsqueda y Grafos',
    description: 'Explora BFS, DFS y algoritmos de rutas.',
    icon: 'fi fi-rr-share',
    color: 'orange',
    lessons: [
      { id: 'linear-search', title: 'Búsqueda lineal', component: LinearSearch },
      { id: 'binary-search', title: 'Búsqueda binaria', component: BinarySearch },
      { id: 'bfs', title: 'BFS', component: Bfs },
      { id: 'dfs', title: 'DFS', component: Dfs },
      { id: 'dijkstra', title: 'Algoritmo de Dijkstra', component: Dijkstra }
    ]
  },
  {
    id: '05',
    title: 'Algoritmos Avanzados',
    description: 'Aprende programación dinámica y backtracking.',
    icon: 'fi fi-rr-star',
    color: 'red',
    lessons: [
      { id: 'dynamic-programming', title: 'Programación dinámica', component: DynamicProgramming },
      { id: 'greedy', title: 'Greedy algorithms', component: Greedy },
      { id: 'backtracking', title: 'Backtracking', component: Backtracking },
      { id: 'knapsack', title: 'Problema de la mochila', component: Knapsack },
      { id: 'final-project', title: 'Proyecto final', component: FinalProject }
    ]
  }
];

function EmptyLesson({ title }) {
  return (
    <div className="text-fu flex flex-col items-center justify-center py-20 text-center">
      <div className="w-24 h-24 bg-linear-to-br from-zinc-100 to-zinc-200 rounded-full flex items-center justify-center mb-6">
        <i className="fi fi-rr-document text-4xl text-zinc-400"></i>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">{title}</h2>
      <p className="text-zinc-500 max-w-md px-4">
        Este tema está en desarrollo. Pronto tendremos contenido increíble para ti.
      </p>
    </div>
  );
}

function ModuleSelector({ modules, selectedModule, setSelectedModule, setSelectedLesson }) {
  return (
    <div className="text-fu border-b border-zinc-200 bg-white/95 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => {
                setSelectedModule(module);
                setSelectedLesson(module.lessons[0]);
              }}
              className={`
                flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm sm:text-base cursor-pointer
                ${selectedModule.id === module.id
                  ? 'bg-zinc-800 text-white shadow-lg'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }
              `}
            >
              <i className={`${module.icon} text-sm sm:text-base`}></i>
              <span className="hidden sm:inline">{module.title}</span>
              <span className="sm:hidden">M{module.id}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LessonGrid({ lessons, selectedLesson, setSelectedLesson, moduleColor }) {
  const getColorClass = (color) => {
    const colors = {
      purple: 'bg-purple-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      orange: 'bg-orange-600',
      red: 'bg-red-600'
    };
    return colors[color] || 'bg-purple-600';
  };

  return (
    <div className="text-fu grid grid-cols-1 gap-3">
      {lessons.map((lesson, index) => (
        <button
          key={lesson.id}
          onClick={() => setSelectedLesson(lesson)}
          className={`
            group w-full p-4 rounded-xl text-left transition-all duration-300 cursor-pointer
            ${selectedLesson.id === lesson.id
              ? 'bg-zinc-800 text-white shadow-lg'
              : 'bg-white hover:shadow-md border border-zinc-200'
            }
          `}
        >
          <div className="flex items-center gap-3">
            <div className={`
              w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0
              ${selectedLesson.id === lesson.id
                ? getColorClass(moduleColor)
                : 'bg-zinc-100 text-zinc-600'
              }
            `}>
              {index + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base truncate">
                {lesson.title}
              </h3>
              <p className={`text-xs ${selectedLesson.id === lesson.id ? 'text-zinc-300' : 'text-zinc-500'}`}>
                Lección {index + 1}
              </p>
            </div>
            {selectedLesson.id === lesson.id && (
              <i className="fi fi-rr-check-circle text-green-400 text-sm sm:text-base shrink-0"></i>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default function PageLessonAlgorithms() {
  const [selectedModule, setSelectedModule] = useState(courseModules[0]);
  const [selectedLesson, setSelectedLesson] = useState(courseModules[0].lessons[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const CurrentComponent = useMemo(() => {
    return selectedLesson.component || null;
  }, [selectedLesson]);

  const currentLessonIndex = selectedModule.lessons.findIndex(l => l.id === selectedLesson.id);
  const progress = ((currentLessonIndex + 1) / selectedModule.lessons.length) * 100;

  return (
    <Fragment>
      <Navbar />
      <div className="text-fu min-h-screen bg-linear-to-br from-zinc-50 via-white to-zinc-50">
        <div className="relative overflow-hidden bg-linear-to-r from-zinc-900 to-zinc-800 text-white">
          <div className="absolute inset-0 bg-linear-to-r from-purple-600/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
                <i className="fi fi-rr-chart-tree text-xl sm:text-2xl"></i>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Curso de Algoritmos</h1>
                <p className="text-zinc-300 text-xs sm:text-sm mt-0.5">Domina la lógica de programación desde cero</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-fu lg:hidden sticky top-0 z-20 bg-white border-b border-zinc-200 px-4 py-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 text-zinc-700 font-medium"
          >
            <i className={`fi fi-rr-${isMobileMenuOpen ? 'close' : 'menu-burger'} text-lg`}></i>
            <span>{isMobileMenuOpen ? 'Cerrar' : 'Ver'} módulos</span>
          </button>
        </div>

        {/* Selector de módulos - Desktop */}
        <div className="text-fu hidden lg:block">
          <ModuleSelector
            modules={courseModules}
            selectedModule={selectedModule}
            setSelectedModule={setSelectedModule}
            setSelectedLesson={setSelectedLesson}
          />
        </div>

        {/* Contenido principal */}
        <div className="text-fu max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            {/* Sidebar - Móvil toggle */}
            <div className={`
              text-fu
              lg:block lg:w-80 shrink-0
              ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block
              fixed lg:relative inset-0 lg:inset-auto z-40 lg:z-auto
              bg-white lg:bg-transparent
              w-full lg:w-80
              top-0 lg:top-auto
              overflow-y-auto lg:overflow-visible
              p-4 lg:p-0
            `}>
              <div className="lg:sticky lg:top-24 space-y-4">
                {/* Info del módulo */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-zinc-200">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <h2 className="font-bold text-zinc-900 text-base sm:text-lg">{selectedModule.title}</h2>
                    <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">
                      Módulo {selectedModule.id}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4 line-clamp-2">{selectedModule.description}</p>
                  
                  {/* Barra de progreso */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Progreso</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-zinc-900 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Lección {currentLessonIndex + 1} de {selectedModule.lessons.length}
                    </p>
                  </div>
                </div>

                {/* Lista de lecciones */}
                <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-zinc-200">
                  <h3 className="font-semibold text-zinc-900 mb-3 text-sm">Contenido del módulo</h3>
                  <LessonGrid
                    lessons={selectedModule.lessons}
                    selectedLesson={selectedLesson}
                    setSelectedLesson={(lesson) => {
                      setSelectedLesson(lesson);
                      setIsMobileMenuOpen(false);
                    }}
                    moduleColor={selectedModule.color}
                  />
                </div>
              </div>
            </div>

            {/* Overlay para móvil */}
            {isMobileMenuOpen && (
              <div 
                className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              ></div>
            )}

            {/* Área de contenido principal */}
            <div className="text-fu flex-1 min-w-0">
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                {/* Header del contenido */}
                <div className="border-b border-zinc-200 px-4 sm:px-6 py-4 sm:py-5 bg-linear-to-r from-zinc-50 to-white">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500 mb-2 flex-wrap">
                    <span>Módulo {selectedModule.id}</span>
                    <i className="fi fi-rr-angle-small-right text-xs"></i>
                    <span className="text-purple-600 font-semibold truncate">{selectedLesson.title}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900">
                    {selectedLesson.title}
                  </h2>
                </div>

                {/* Contenido dinámico */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <Suspense
                    fallback={
                      <div className="flex flex-col items-center justify-center py-20 sm:py-32 gap-4">
                        <span className=''><i className='fi fi-rr-loading flex justify-center items-center animate-spin text-xl'></i></span>
                        <p className="text-zinc-500 text-sm">Cargando contenido...</p>
                      </div>
                    }
                  >
                    {CurrentComponent ? (
                      <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                        <CurrentComponent />
                      </div>
                    ) : (
                      <EmptyLesson title={selectedLesson.title} />
                    )}
                  </Suspense>
                </div>

                {/* Navegación entre lecciones */}
                <div className="border-t border-zinc-200 px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row justify-between gap-3">
                  <button
                    onClick={() => {
                      if (currentLessonIndex > 0) {
                        setSelectedLesson(selectedModule.lessons[currentLessonIndex - 1]);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    disabled={currentLessonIndex === 0}
                    className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-zinc-600 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm sm:text-base"
                  >
                    <i className="fi fi-rr-angle-left text-sm"></i>
                    <span>Anterior</span>
                  </button>
                  
                  <div className="text-xs sm:text-sm text-zinc-500 text-center">
                    Lección {currentLessonIndex + 1} de {selectedModule.lessons.length}
                  </div>
                  
                  <button
                    onClick={() => {
                      if (currentLessonIndex < selectedModule.lessons.length - 1) {
                        setSelectedLesson(selectedModule.lessons[currentLessonIndex + 1]);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    disabled={currentLessonIndex === selectedModule.lessons.length - 1}
                    className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm sm:text-base"
                  >
                    <span>Siguiente</span>
                    <i className="fi fi-rr-angle-right text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </Fragment>
  );
}