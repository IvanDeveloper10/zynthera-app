import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import DashboardTeacher from './pages/DashboardTeacher';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import QuizGame from './pages/QuizGames';
import QuizRoom from './pages/QuizRoom';
import Laboratories from './pages/Laboratories';
import ProtectedRoute from './components/auth/protectedRoute';
import { Toaster } from '@/components/ui/toast';
import { AuthProvider } from './contexts/authContext';
import Games from './pages/Games';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={ <ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/juegos' element={<Games />} />
          </Route>
          <Route path='/registro' element={<Register />} />
          <Route path='/ingreso' element={<Login />} />
          <Route element={<ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/perfil' element={<Profile />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['profesor']} />}>
            <Route path='/dashboard-profesor' element={<DashboardTeacher />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/cursos' element={<Courses />}/>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/laboratorios' element={<Laboratories />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/cursos/:courseId' element={<CourseDetail />}/>
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/juegos/preguntas' element={<QuizGame />} />
          </Route>
          <Route element={<ProtectedRoute allowedRoles={['estudiante', 'profesor']} />}>
            <Route path='/juegos/preguntas/sala/:code' element={<QuizRoom />} />
          </Route>
        </Routes>
      </AuthProvider>
      <Toaster />
    </BrowserRouter>
  )
}