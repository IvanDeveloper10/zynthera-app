import { Fragment, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { UserRole } from '../types/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/toast';

interface RegisterForm {
  email: string
  firstName: string
  lastName: string
  password: string
  confirmPassword: string
  role: UserRole | ''
}

export default function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState<RegisterForm>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    role: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const passwordRequirements = useMemo(
    () => ({
      length: form.password.length >= 6,
      letter: /[A-Za-z]/.test(form.password),
      number: /\d/.test(form.password),
    }),
    [form.password]
  )

  const passwordsMatch =
    form.password.length > 0 &&
    form.password === form.confirmPassword

  const isValid =
    form.email.trim() !== '' &&
    form.firstName.trim() !== '' &&
    form.lastName.trim() !== '' &&
    form.role !== '' &&
    passwordRequirements.length &&
    passwordRequirements.letter &&
    passwordRequirements.number &&
    passwordsMatch

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRoleChange = (role: UserRole) => {
    setForm((prev) => ({
      ...prev,
      role,
    }))
  }

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!isValid) {
      toast.add({
        title: 'Formulario incompleto',
        description: 'Completa correctamente todos los campos.',
        type: 'error',
      })
      return
    }

    setLoading(true)

    try {
      const { data, error: signUpError } =
        await supabase.auth.signUp({
          email: form.email.trim(),
          password: form.password,
          options: {
            data: {
              first_name: form.firstName.trim(),
              last_name: form.lastName.trim(),
              role: form.role,
            },
          },
        })

      if (signUpError) {
        const message = signUpError.message.toLowerCase()

        if (
          message.includes('already registered') ||
          message.includes('already exists') ||
          message.includes('user already registered')
        ) {
          throw new Error('Este correo electrónico ya está registrado.')
        }

        throw signUpError
      }

      if (!data.user) {
        throw new Error('No fue posible crear la cuenta.')
      }

      if (!data.session) {
        toast.add({
          title: 'Cuenta creada correctamente',
          description: 'Revisa tu correo electrónico para confirmar tu cuenta.',
          type: 'success',
        })

        return
      }

      toast.add({
        title: 'Cuenta creada correctamente',
        description: 'Bienvenido a Zynthera.',
        type: 'success',
      })

      navigate('/', {
        replace: true,
      })
    } catch (error) {
      if (error instanceof Error) {
        toast.add({
          title: 'No se pudo crear la cuenta',
          description: error.message,
          type: 'error',
        })
      } else {
        toast.add({
          title: 'No se pudo crear la cuenta',
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
        <Link to='/' className='flex pl-4 items-center gap-2 absolute top-10 left-10 w-32'>
          <Button size='lg' className='flex justify-center items-center gap-2 hover:cursor-pointer active:scale-95'>
            <i className='fi fi-rr-arrow-left flex justify-center items-center'></i>
            Atrás
          </Button>
        </Link>
        <div className='w-2/4 flex flex-col justify-center items-center gap-4 max-lg:w-full overflow-y-auto py-10'>
          <h1 className='text-4xl font-bold'>Registro de Usuario</h1>
          <form
            onSubmit={handleRegister}
            className='w-96 flex flex-col gap-4'>
            <Input
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Correo electrónico'
              autoComplete='email'
              className='w-full'
            />
            <Input
              name='firstName'
              type='text'
              value={form.firstName}
              onChange={handleChange}
              placeholder='Primer nombre'
              autoComplete='given-name'
              className='w-full'
            />
            <Input
              name='lastName'
              type='text'
              value={form.lastName}
              onChange={handleChange}
              placeholder='Primer apellido'
              autoComplete='family-name'
              className='w-full'
            />
            <div className='w-full flex gap-4'>
              <button
                type='button'
                onClick={() => handleRoleChange('estudiante')}
                className={`flex-1 py-2 rounded-lg border-2 transition-all font-medium cursor-pointer ${
                  form.role === 'estudiante'
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                }`}>
                <i className='fi fi-rr-graduation-cap flex justify-center items-center'></i>
                Estudiante
              </button>
              <button
                type='button'
                onClick={() =>
                  handleRoleChange('profesor')
                }
                className={`flex-1 py-2 rounded-lg border-2 transition-all font-medium cursor-pointer ${
                  form.role === 'profesor'
                    ? 'border-purple-600 bg-purple-50 text-purple-700'
                    : 'border-zinc-200 text-zinc-600 hover:border-zinc-400'
                }`}>
                <i className='fi fi-rr-chalkboard-user flex justify-center items-center'></i>
                Profesor
              </button>
            </div>
            <div className='relative'>
              <Input
                name='password'
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={form.password}
                onChange={handleChange}
                placeholder='Contraseña'
                autoComplete='new-password'
                className='w-full'
              />
              <button
                type='button'
                onClick={() =>
                  setShowPassword(
                    (prev) => !prev
                  )
                }
                className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'>
                <i
                  className={`fi ${
                    showPassword
                      ? 'fi-rr-eye-crossed'
                      : 'fi-rr-eye'
                  }`}
                ></i>
              </button>
            </div>
            <div className='relative'>
              <Input
                name='confirmPassword'
                type={
                  showConfirmPassword
                    ? 'text'
                    : 'password'
                }
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder='Confirmar contraseña'
                autoComplete='new-password'
                className='w-full'
              />
              <button
                type='button'
                onClick={() =>
                  setShowConfirmPassword(
                    (prev) => !prev
                  )
                } className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer'>
                <i
                  className={`fi ${
                    showConfirmPassword
                      ? 'fi-rr-eye-crossed'
                      : 'fi-rr-eye'
                  }`}
                ></i>
              </button>
            </div>
            <div className='text-sm flex flex-col gap-1'>
              <p className={
                  passwordRequirements.length
                    ? 'text-green-600'
                    : 'text-zinc-500' }>
                <i className='fi fi-rr-check'></i>{' '}
                Al menos 6 caracteres
              </p>
              <p className={
                  passwordRequirements.letter
                    ? 'text-green-600'
                    : 'text-zinc-500' }>
                <i className='fi fi-rr-check'></i>{' '}
                Al menos una letra
              </p>
              <p className={
                  passwordRequirements.number
                    ? 'text-green-600'
                    : 'text-zinc-500' }>
                <i className='fi fi-rr-check'></i>{' '}
                Al menos un número
              </p>
              <p className={
                  passwordsMatch
                    ? 'text-green-600'
                    : 'text-zinc-500' }>
                <i className='fi fi-rr-check'></i>{' '}
                Las contraseñas coinciden
              </p>
            </div>
            <Button
              type='submit'
              disabled={loading}
              className='w-full text-white font-medium cursor-pointer active:scale-95'
              size='lg'>
              {loading ? (
                <i className='fi fi-rr-loading flex justify-center items-center animate-spin text-base sm:text-xl'></i>
              ) : (
                'Crear cuenta'
              )}
            </Button>
          </form>
          <span>
            ¿Ya tienes una cuenta?{' '}
            <Link to='/ingreso' className='text-blue-600 hover:underline'>Inicia sesión</Link>
          </span>
        </div>
        <div className='w-2/4 max-lg:hidden'>
          <img
            src='https://smxxozttrwhkgtpnfvbx.supabase.co/storage/v1/object/public/system-auth-resources/toys-image.jpg'
            alt='Zynthera'
            className='h-full w-full object-cover'
          />
        </div>
      </section>
    </Fragment>
  )
}