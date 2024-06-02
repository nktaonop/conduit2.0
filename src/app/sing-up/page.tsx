'use client'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { AuthRegister } from '@/interfaces/auth'
import { Route } from '@/constants/common.constants'
import { signUp } from '@/services/auth'
import s from './sign-up.module.scss'

const SignUpPage = () => {
  const { register, handleSubmit } = useForm<AuthRegister>()
  const router = useRouter()

  const onSubmit: SubmitHandler<AuthRegister> = (data) => {
    try {
      signUp(data)
      router.push(Route.HOME)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1 className={s.title}>Sing up</h1>
      <p className={s.link}>
        <Link href={Route.SIGN_UP}>Need an account?</Link>
      </p>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className="auth_input"
          placeholder="Username"
          type="text"
          {...register('username', { required: true })}
        />
        <input
          className="auth_input"
          placeholder="Email"
          type="text"
          {...register('email', { required: true })}
        />
        <input
          className="auth_input"
          placeholder="Password"
          type="password"
          {...register('password', { required: true })}
        />

        <button className="auth_button" type="submit">
          Sign in
        </button>
      </form>
    </>
  )
}

export default SignUpPage
