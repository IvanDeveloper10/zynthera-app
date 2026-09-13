import { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/toast';
import { supabase } from '../lib/supabase';

interface LoginForm {
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState<LoginForm>({email: '', password: ''});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      !form.email.trim() ||
      !form.password
    ) {
      toast.add({
        title: 'Campos incompletos',
        description: 'Ingresa tu correo electrónico y contraseña.',
        type: 'error',
      })
      return
    }

    setLoading(true)

    try {
      const { data, error } =  await supabase.auth.signInWithPassword({
          email: form.email.trim(),
          password: form.password,
      })

      if (error) {
        const message = error.message.toLowerCase()
        if (
          message.includes('invalid login credentials')
        ) {
          throw new Error('El correo electrónico o la contraseña son incorrectos.')
        }

        if (
          message.includes('email not confirmed')
        ) {
          throw new Error('Debes confirmar tu correo electrónico antes de iniciar sesión.')
        }
        throw error
      }

      if (!data.session || !data.user) {
        throw new Error('Supabase no devolvió una sesión válida.')
      }
      toast.add({
        title: 'Bienvenido a Zynthera',
        description: 'Has iniciado sesión correctamente.',
        type: 'success',
      })
      navigate('/', {
        replace: true,
      })
    } catch (error) {
      console.error('Error iniciando sesión:', error)
      if (
        error instanceof Error
      ) {
        toast.add({
          title: 'No se pudo iniciar sesión',
          description: error.message,
          type: 'error',
        })
      } else {
        toast.add({
          title: 'No se pudo iniciar sesión',
          description: 'Ocurrió un error inesperado. Inténtalo nuevamente.',
          type: 'error',
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fragment>
      <section className='w-full h-screen flex justify-between overflow-hidden text-fu'>
        <Link to='/'>
          <Button
            type='button'
            className='flex items-center gap-2 absolute top-10 left-10 hover:cursor-pointer active:scale-95'
            size='lg'>
            <i className='fi fi-rr-arrow-left flex justify-center items-center'></i>
            Atrás
          </Button>
        </Link>
        <div className='w-2/4 flex flex-col justify-center items-center gap-4 max-lg:w-full'>
          <h1 className='text-4xl font-bold'>Iniciar Sesión</h1>
          <form
            onSubmit={handleLogin}
            className='w-96 flex flex-col gap-4'
          >
            <Input
              name='email'
              type='email'
              placeholder='Correo electrónico'
              value={form.email}
              onChange={handleChange}
              autoComplete='email'
              className='w-full'
            />
            <div className='relative'>
              <Input
                name='password'
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                placeholder='Contraseña'
                value={form.password}
                onChange={handleChange}
                autoComplete='current-password'
                className='w-full pr-12'
              />
              <button
                type='button'
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'
                aria-label={
                  showPassword
                    ? 'Ocultar contraseña'
                    : 'Mostrar contraseña'
                }>
                <i
                  className={`fi ${
                    showPassword
                      ? 'fi-rr-eye-crossed'
                      : 'fi-rr-eye'
                  }`}
                ></i>
              </button>
            </div>
            <Button
              type='submit'
              disabled={loading}
              className='w-full text-white font-medium cursor-pointer active:scale-95'
              size='lg'>
              {loading ? (
                <i className='fi fi-rr-loading flex justify-center items-center animate-spin text-base sm:text-xl'></i>
              ) : (
                'Ingresar'
              )}
            </Button>
          </form>
          <span>
            ¿No tienes una cuenta?{' '}
            <Link
              to='/registro'
              className='text-blue-600 hover:underline'>
              Crea una
            </Link>
          </span>
        </div>
        <div className='w-2/4 max-lg:hidden'>
          <img
            src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/system-auth-resources/solder-boy-image.jpg'
            alt='Solder Boy Image'
            className='h-full w-full object-cover'
          />
        </div>
      </section>
    </Fragment>
  )
}