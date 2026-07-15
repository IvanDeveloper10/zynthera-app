import { Fragment, useContext, useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { user, loading } = useContext(AuthContext);

  const [errorModal, setErrorModal] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    if (user) {
      return navigate('/');
    }
  }, [user]);

  const navigate = useNavigate();

  const isFormValid =
    email &&
    password;

  const handleButtonLogin = async () => {

    if (!isFormValid) {
      setErrorModal('Completa todos los campos correctamente');
      return;
    }

    try {
      setLoadingLogin(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');

    } catch (error) {
      setErrorModal(error.message);
    } finally {
      setLoadingLogin(false);
    }
  }

  const handleBackButton = () => {
    return navigate('/')
  }

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <i className='fi fi-rr-loading flex justify-center items-center animate-spin duration-1000 text-3xl'></i>
      </div>
    );
  }

  if (user) {
    return null;
  }

  return (
    <Fragment>
      <section className='w-full h-screen flex justify-between overflow-hidden text-fu'>
        <button onClick={handleBackButton} className='flex pl-4 items-center gap-2 absolute top-10 left-10 w-32 hover:bg-zinc-100 hover:cursor-pointer transition-all rounded-lg py-1'>
          <i className='fi fi-rr-arrow-left flex justify-center items-center'></i> Atrás
        </button>
        {errorModal && (
          <div className='fixed inset-0 bg-black/60 flex justify-center items-center z-50'>
            <div className='bg-white p-6 rounded-xl w-80 text-center shadow-xl'>
              <h2 className='text-xl font-bold mb-3 text-red-600'>Error</h2>
              <p className='text-zinc-700'>{errorModal}</p>
              <button 
                onClick={() => setErrorModal(null)} 
                className='mt-4 bg-black text-white px-4 py-2 rounded-lg hover:scale-95 transition-all'
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
        <div className='w-2/4 flex flex-col justify-center items-center gap-4 max-lg:w-full'>
          <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
          <input 
            type='email' 
            placeholder='Correo electronico' 
            className='bg-zinc-100 w-96 py-2 px-4 rounded-xl outline-none'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder='Contraseña' 
            className='bg-zinc-100 w-96 py-2 px-4 rounded-xl outline-none'
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className='w-96 flex gap-2 text-sm'>
            <input 
              type='checkbox' 
              onChange={() => setShowPassword(!showPassword)} 
            />Mostrar contraseña</label>
          <button 
            disabled={!isFormValid || loadingLogin}
            onClick={handleButtonLogin}
            className={`w-96 py-2 rounded-xl text-white transition-all ${
              isFormValid 
              ? 'bg-purple-600 hover:scale-95 hover:cursor-pointer' 
              : 'bg-zinc-400 cursor-not-allowed'
            }`}
          >{loadingLogin ? 'Ingresando...' : 'Ingresar'}</button>
          <span>
            ¿No tienes tienes una cuenta?{' '}
            <Link to='/register' className='text-blue-600'>Crea una</Link>
          </span>
        </div>
        <div className='w-2/4 max-lg:hidden'>
          <img src='/image-login.jpg' alt='Image Login' className='h-full w-full object-cover' />
        </div>
      </section>
    </Fragment>
  );
}