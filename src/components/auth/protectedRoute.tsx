import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

interface ProtectedRouteProps {
  allowedRoles?: ('estudiante' | 'profesor')[]
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { user, profile, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className='w-full min-h-screen flex items-center justify-center'>
        <i className='fi fi-rr-loading animate-spin text-2xl'></i>
      </div>
    )
  }

  if (!user) {
    return (
      <Navigate
        to='/ingreso'
        replace
        state={{ from: location.pathname }}
      />
    )
  }

  if (allowedRoles && (!profile || !allowedRoles.includes(profile.role))) {
    return (
      <Navigate
        to='/'
        replace
      />
    )
  }

  return <Outlet />
}