import { Fragment, useContext, useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext.jsx';

export default function Register() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('')
  const { user, loading } = useContext(AuthContext);

  const [errorModal, setErrorModal] = useState(null);
  const [loadingRegister, setLoadingRegister] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      return navigate('/');
    }
  }, [user, loading]);

  const navigate = useNavigate();

  const passwordRules = {
    length: password.length >= 6,
    letter: /[a-zA-Z]/.test(password),
    number: /[0-9]/.test(password)
  }

  const isFormValid =
    email &&
    firstname &&
    lastname &&
    role &&
    passwordRules.length &&
    passwordRules.letter &&
    passwordRules.number;

  const handleButtonRegister = async () => {

    if (!isFormValid) {
      setErrorModal('Completa todos los campos correctamente');
      return;
    }

    try {
      setLoadingRegister(true);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email,
        firstname,
        lastname,
        role,
        createdAt: new Date()
      });

      navigate('/');

    } catch (error) {
      setErrorModal(error.message);
    } finally {
      setLoadingRegister(false);
    }
  }

  const handleBackButton = () => {
    return navigate('/')
  }

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <i className='fi fi-rr-loading flex justify-center items-center animate-spin text-xl'></i>
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
          <h1 className='text-4xl font-bold'>Registro De Usuario</h1>
          <input 
            type='email' 
            placeholder='Correo electronico' 
            className='bg-zinc-100 w-96 py-2 px-4 rounded-xl outline-none'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type='text' 
            placeholder='Primer nombre' 
            className='bg-zinc-100 w-96 py-2 px-4 rounded-xl outline-none'
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input 
            type='text' 
            placeholder='Primer apellido' 
            className='bg-zinc-100 w-96 py-2 px-4 rounded-xl outline-none'
            onChange={(e) => setLastname(e.target.value)}
          />
          <div className='w-96 flex gap-4'>
            <button type='button' onClick={() => setRole('estudiante')} className={`hover:cursor-pointer flex-1 py-1 rounded-lg border-2 transition-all font-medium ${
              role === 'estudiante'
                ? 'border-purple-600 bg-purple-50 text-purple-700'
                : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
            }`}>
              <i className='fi fi-rr-graduation-cap flex justify-center items-center'></i>
              Estudiante
            </button>
            <button type='button' onClick={() => setRole('profesor')} className={`hover:cursor-pointer flex-1 py-1 rounded-lg border-2 transition-all font-medium ${
              role === 'profesor'
                ? 'border-purple-600 bg-purple-50 text-purple-700'
                : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
            }`}>
              <i className='fi fi-rr-chalkboard-user flex justify-center items-center'></i>
              Profesor
            </button>
          </div> 
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
          <div className='w-96 text-sm'>
            <p className={`flex items-center gap-2 ${passwordRules.length ? 'text-green-600 line-through' : 'text-zinc-500'}`}>
              <i className='fi fi-rr-check flex justify-center items-center'></i> Almenos 6 caracteres
            </p>
            <p className={`flex items-center gap-2 ${passwordRules.letter ? 'text-green-600 line-through' : 'text-zinc-500'}`}>
              <i className='fi fi-rr-check flex justify-center items-center'></i> Almenos una letra
            </p>
            <p className={`flex items-center gap-2 ${passwordRules.number ? 'text-green-600 line-through' : 'text-zinc-500'}`}>
              <i className='fi fi-rr-check flex justify-center items-center'></i> Almenos un numero
            </p>
          </div>
          <button 
            disabled={!isFormValid || loadingRegister}
            onClick={handleButtonRegister}
            className={`w-96 py-2 rounded-xl text-white transition-all ${
              isFormValid 
              ? 'bg-purple-600 hover:scale-95 hover:cursor-pointer' 
              : 'bg-zinc-400 cursor-not-allowed'
            }`}
          >{loadingRegister ? 'Registrando...' : 'Registrarse'}</button>
          <span>
            ¿Ya tienes una cuenta?{' '}
            <Link to='/login' className='text-blue-600'>Inicia sesion</Link>
          </span>
        </div>
        <div className='w-2/4 max-lg:hidden'>
          <img src='/image-register.jpg' alt='Image Register' className='h-full w-full object-cover' />
        </div>
      </section>
    </Fragment>
  );
}