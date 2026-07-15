import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Courses from './pages/Courses';
import Laboratories from './pages/Laboratories';
import Play from './pages/Play';
import LearnAlgorithms from './pages/Learn/algorithms/LearnAlgorithms';
import PageLessonAlgorithms from './pages/learn/algorithms/lessons/PageLessonAlgorithms';
import AlgorithmsLab from './components/laboratories/AlgorithmsLab';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/register' element={ <Register /> } ></Route>
        <Route path='/login' element={ <Login /> } ></Route>
        <Route path='/courses' element={ <Courses /> } ></Route>
        <Route path='/play' element={ <Play /> }></Route>
        <Route path='/laboratories' element={ <Laboratories /> }></Route>
        <Route path='/laboratories/algorithms' element={ <AlgorithmsLab /> }></Route>
        <Route path='/courses/learn/learn-algorithms' element={ <LearnAlgorithms /> }></Route>
        <Route path='/courses/learn/learn-algorithms/page-lessons-algorithms' element={ <PageLessonAlgorithms /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}