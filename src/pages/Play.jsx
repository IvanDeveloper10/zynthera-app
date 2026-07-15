import { Fragment, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Play() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState('media');

  const allQuestions = [
    {
      question: 'Cual es el lenguaje de programacion mas utilizado para desarrollo web frontend?',
      options: ['Python', 'Java', 'JavaScript', 'C#'],
      correct: 2,
      difficulty: 'facil'
    },
    {
      question: 'Que tecnologia permite ejecutar codigo JavaScript en el servidor?',
      options: ['Node.js', 'React', 'Angular', 'Vue.js'],
      correct: 0,
      difficulty: 'facil'
    },
    {
      question: 'Cual es el sistema de control de versiones mas popular?',
      options: ['SVN', 'Mercurial', 'Git', 'CVS'],
      correct: 2,
      difficulty: 'facil'
    },
    {
      question: 'Que significa CSS?',
      options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Color Style Sheets'],
      correct: 0,
      difficulty: 'facil'
    },
    {
      question: 'Cual es el principal lenguaje de programacion para Android?',
      options: ['Swift', 'Kotlin', 'Objective-C', 'C++'],
      correct: 1,
      difficulty: 'media'
    },
    {
      question: 'Que es una API?',
      options: ['Application Programming Interface', 'Advanced Programming Interface', 'Application Process Integration', 'Automated Program Interface'],
      correct: 0,
      difficulty: 'media'
    },
    {
      question: 'Cual es el framework mas popular para machine learning en Python?',
      options: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
      correct: 0,
      difficulty: 'dificil'
    },
    {
      question: 'Que es Docker?',
      options: ['Un sistema operativo', 'Un gestor de bases de datos', 'Una plataforma de contenedores', 'Un framework web'],
      correct: 2,
      difficulty: 'media'
    },
    {
      question: 'Cual es el lenguaje de programacion mas antiguo aun en uso?',
      options: ['Fortran', 'COBOL', 'Lisp', 'C'],
      correct: 0,
      difficulty: 'dificil'
    },
    {
      question: 'Que hace el comando "git rebase"?',
      options: ['Combina ramas', 'Reescribe el historial de commits', 'Elimina commits', 'Crea una nueva rama'],
      correct: 1,
      difficulty: 'dificil'
    },
    {
      question: 'Cual es el principal uso de WebAssembly?',
      options: ['Diseño web', 'Alto rendimiento en navegadores', 'Bases de datos', 'Servidores web'],
      correct: 1,
      difficulty: 'dificil'
    },
    {
      question: 'Que es GraphQL?',
      options: ['Un lenguaje de consulta para APIs', 'Una base de datos', 'Un framework de JavaScript', 'Un sistema operativo'],
      correct: 0,
      difficulty: 'media'
    },
    {
      question: 'Cual es el puerto predeterminado para HTTPS?',
      options: ['80', '443', '8080', '3306'],
      correct: 1,
      difficulty: 'media'
    },
    {
      question: 'Que es un CDN?',
      options: ['Una red de distribucion de contenido', 'Un tipo de base de datos', 'Un framework CSS', 'Un lenguaje de programacion'],
      correct: 0,
      difficulty: 'facil'
    },
    {
      question: 'Cual es el sistema de diseño de Google?',
      options: ['Material Design', 'Fluent Design', 'Human Interface', 'Atomic Design'],
      correct: 0,
      difficulty: 'facil'
    },
    {
      question: 'Que es TypeScript?',
      options: ['Un framework de JavaScript', 'Un superset de JavaScript', 'Un lenguaje de bases de datos', 'Un sistema operativo'],
      correct: 1,
      difficulty: 'media'
    },
    {
      question: 'Cual es el proposito principal de React?',
      options: ['Construir interfaces de usuario', 'Gestionar bases de datos', 'Crear servidores web', 'Diseñar graficos'],
      correct: 0,
      difficulty: 'facil'
    },
    {
      question: 'Que es un algoritmo?',
      options: ['Una secuencia de pasos para resolver un problema', 'Un lenguaje de programacion', 'Un tipo de dato', 'Un framework'],
      correct: 0,
      difficulty: 'facil'
    },
    {
      question: 'Cual es la diferencia entre SQL y NoSQL?',
      options: ['SQL es relacional, NoSQL no', 'NoSQL es mas rapido', 'SQL no usa tablas', 'NoSQL solo usa JSON'],
      correct: 0,
      difficulty: 'media'
    },
    {
      question: 'Que es el Internet de las Cosas?',
      options: ['La red de dispositivos conectados a internet', 'Una red social', 'Un navegador web', 'Un protocolo de internet'],
      correct: 0,
      difficulty: 'media'
    }
  ];

  const initializeQuiz = () => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const filtered = difficulty === 'todas' ? shuffled : shuffled.filter(q => q.difficulty === difficulty);
    const selected = filtered.slice(0, 10);
    setShuffledQuestions(selected);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
    setTimeLeft(30);
    setTimerActive(true);
  };

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    if (shuffledQuestions.length > 0) {
      initializeQuiz();
    }
  };

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setTimerActive(false);
    
    const isCorrect = index === shuffledQuestions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, {
      questionIndex: currentQuestion,
      selected: index,
      correct: shuffledQuestions[currentQuestion].correct,
      isCorrect: isCorrect
    }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      setQuizCompleted(true);
      setShowResult(true);
      setTimerActive(false);
    }
  };

  const handleRestart = () => {
    initializeQuiz();
  };

  const handleSkipQuestion = () => {
    if (selectedOption !== null) return;
    setAnsweredQuestions([...answeredQuestions, {
      questionIndex: currentQuestion,
      selected: -1,
      correct: shuffledQuestions[currentQuestion].correct,
      isCorrect: false
    }]);
    setTimerActive(false);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimeLeft(30);
      setTimerActive(true);
    } else {
      setQuizCompleted(true);
      setShowResult(true);
    }
  };

  const getPerformanceMessage = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 90) return 'Genio Tecnologico';
    if (percentage >= 70) return 'Experto Tecnologico';
    if (percentage >= 50) return 'Conocedor Tecnologico';
    if (percentage >= 30) return 'Aprendiz Tecnologico';
    return 'Novato Tecnologico';
  };

  const getScoreColor = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 70) return 'text-green-500';
    if (percentage >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getResultIcon = () => {
    const percentage = (score / shuffledQuestions.length) * 100;
    if (percentage >= 80) return 'fas fa-trophy';
    if (percentage >= 50) return 'fas fa-star';
    return 'fas fa-lightbulb';
  };

  return (
    <Fragment>
      <Navbar />
      <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4 text-fu'>
        <div className='w-full max-w-3xl'>
          {!showResult ? (
            shuffledQuestions.length > 0 ? (
              <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12'>
                <div className='flex justify-between items-center mb-6'>
                  <div className='flex items-center gap-4'>
                    <span className='text-sm text-gray-400 font-light tracking-wider'>
                      PREGUNTA {currentQuestion + 1} / {shuffledQuestions.length}
                    </span>
                    <span className='px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-light tracking-wider'>
                      {shuffledQuestions[currentQuestion].difficulty.toUpperCase()}
                    </span>
                  </div>
                  <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2'>
                      <i className='fas fa-clock text-gray-400 text-sm'></i>
                      <span className={`text-sm font-light ${timeLeft <= 5 ? 'text-red-500' : 'text-gray-600'}`}>
                        {timeLeft}s
                      </span>
                    </div>
                    <span className='text-sm text-gray-400 font-light'>
                      <i className='fas fa-check-circle text-green-500 mr-1'></i>
                      {score}
                    </span>
                  </div>
                </div>

                <div className='w-full h-1 bg-gray-100 rounded-full overflow-hidden mb-8'>
                  <div 
                    className='h-full bg-blue-500 transition-all duration-500 ease-out rounded-full'
                    style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
                  />
                </div>

                <h2 className='text-gray-800 text-2xl md:text-3xl font-light leading-relaxed tracking-wide mb-10'>
                  {shuffledQuestions[currentQuestion].question}
                </h2>

                <div className='space-y-3'>
                  {shuffledQuestions[currentQuestion].options.map((option, index) => {
                    let buttonClass = 'w-full text-left p-4 rounded-xl border transition-all duration-300 text-gray-700 font-light tracking-wide ';
                    
                    if (selectedOption === null) {
                      buttonClass += 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:scale-[1.01] cursor-pointer';
                    } else if (selectedOption === index) {
                      if (index === shuffledQuestions[currentQuestion].correct) {
                        buttonClass += 'border-green-500 bg-green-50 text-green-700';
                      } else {
                        buttonClass += 'border-red-500 bg-red-50 text-red-700';
                      }
                    } else if (index === shuffledQuestions[currentQuestion].correct && selectedOption !== null) {
                      buttonClass += 'border-green-500 bg-green-50/50 text-green-700';
                    } else {
                      buttonClass += 'border-gray-100 opacity-50 cursor-not-allowed';
                    }
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(index)}
                        className={buttonClass}
                        disabled={selectedOption !== null}
                      >
                        <span className='flex items-center'>
                          <span className='inline-block w-8 h-8 rounded-full border border-gray-200 mr-4 text-center leading-8 text-sm text-gray-500'>
                            {String.fromCharCode(65 + index)}
                          </span>
                          {option}
                          {selectedOption !== null && index === shuffledQuestions[currentQuestion].correct && (
                            <i className='fas fa-check ml-auto text-green-500'></i>
                          )}
                          {selectedOption === index && index !== shuffledQuestions[currentQuestion].correct && (
                            <i className='fas fa-times ml-auto text-red-500'></i>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className='mt-10 flex justify-between items-center'>
                  <button
                    onClick={handleSkipQuestion}
                    disabled={selectedOption !== null}
                    className={`px-6 py-3 rounded-full font-light tracking-wider transition-all duration-300 ${
                      selectedOption === null
                        ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-50 cursor-pointer'
                        : 'text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    Saltar <i className='fas fa-arrow-right ml-2'></i>
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null}
                    className={`px-8 py-3 rounded-full font-light tracking-wider transition-all duration-300 ${
                      selectedOption !== null
                        ? 'bg-blue-600 text-white hover:shadow-lg hover:scale-[1.02] cursor-pointer'
                        : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    }`}
                  >
                    {currentQuestion === shuffledQuestions.length - 1 ? 'VER RESULTADOS' : 'SIGUIENTE'}
                    <i className='fas fa-arrow-right ml-2'></i>
                  </button>
                </div>
              </div>
            ) : (
              <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-12 text-center'>
                <i className='fas fa-cog text-6xl text-blue-500 mb-6'></i>
                <h2 className='text-2xl text-gray-800 font-light mb-6'>Selecciona la dificultad</h2>
                <div className='flex gap-4 justify-center mb-8 flex-wrap'>
                  {['facil', 'media', 'dificil', 'todas'].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleDifficultyChange(level)}
                      className={`px-6 py-3 rounded-full font-light tracking-wider transition-all duration-300 ${
                        difficulty === level
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {level === 'todas' ? 'Todas' : level.charAt(0).toUpperCase() + level.slice(1)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={initializeQuiz}
                  className='px-12 py-4 bg-blue-600 text-white rounded-full font-light tracking-wider hover:shadow-lg hover:scale-[1.02] transition-all duration-300'
                >
                  <i className='fas fa-play mr-2'></i>
                  INICIAR CUESTIONARIO
                </button>
              </div>
            )
          ) : (
            <div className='bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 text-center'>
              <div className='mb-8'>
                <div className='inline-block p-4 bg-gray-50 rounded-full mb-6'>
                  <i className={`${getResultIcon()} text-6xl ${
                    score >= shuffledQuestions.length * 0.8 ? 'text-yellow-500' : 
                    score >= shuffledQuestions.length * 0.5 ? 'text-blue-500' : 
                    'text-gray-400'
                  }`}></i>
                </div>
                <h2 className='text-3xl md:text-4xl text-gray-800 font-light mb-3 tracking-wide'>
                  {getPerformanceMessage()}
                </h2>
                <p className='text-gray-500 text-lg font-light tracking-wider'>
                  Has completado el cuestionario tecnologico
                </p>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <p className='text-gray-400 text-sm font-light tracking-wider mb-1'>ACERTADAS</p>
                  <p className={`text-4xl font-light ${getScoreColor()}`}>{score}</p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <p className='text-gray-400 text-sm font-light tracking-wider mb-1'>FALLADAS</p>
                  <p className='text-gray-800 text-4xl font-light'>{shuffledQuestions.length - score}</p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <p className='text-gray-400 text-sm font-light tracking-wider mb-1'>PORCENTAJE</p>
                  <p className={`text-4xl font-light ${getScoreColor()}`}>
                    {Math.round((score / shuffledQuestions.length) * 100)}%
                  </p>
                </div>
                <div className='bg-gray-50 rounded-2xl p-6'>
                  <p className='text-gray-400 text-sm font-light tracking-wider mb-1'>TIEMPO</p>
                  <p className='text-gray-800 text-4xl font-light'>{30 - timeLeft}s</p>
                </div>
              </div>

              <div className='mb-8'>
                <h3 className='text-gray-600 text-sm font-light tracking-wider mb-4'>RESUMEN DE RESPUESTAS</h3>
                <div className='flex flex-wrap gap-2 justify-center'>
                  {shuffledQuestions.map((_, index) => {
                    const answer = answeredQuestions.find(a => a.questionIndex === index);
                    let status = 'bg-gray-100 text-gray-400';
                    if (answer) {
                      status = answer.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
                    }
                    return (
                      <div key={index} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-light ${status}`}>
                        {index + 1}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-4 justify-center'>
                <button
                  onClick={handleRestart}
                  className='px-8 py-3 rounded-full bg-blue-600 text-white font-light tracking-wider hover:shadow-lg hover:scale-[1.02] transition-all duration-300'
                >
                  <i className='fas fa-redo mr-2'></i>
                  REINTENTAR
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className='px-8 py-3 rounded-full border border-gray-300 text-gray-600 font-light tracking-wider hover:bg-gray-50 hover:scale-[1.02] transition-all duration-300'
                >
                  <i className='fas fa-home mr-2'></i>
                  INICIO
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}