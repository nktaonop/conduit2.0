'use client'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Route } from '@/constants/common.constants'
import { signIn } from '@/services/auth'
import { AuthLogin } from '@/interfaces/auth'
import s from './sing-in.module.scss'
import { useRouter } from 'next/navigation'

const SignInPage = () => {
  const { register, handleSubmit } = useForm<AuthLogin>()
  const router = useRouter()

  const onSubmit: SubmitHandler<AuthLogin> = (data) => {
    try {
      signIn(data)
      router.push(Route.HOME)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1 className={s.title}>Sing in</h1>
      <p className={s.link}>
        <Link href={Route.SIGN_UP}>Need an account?</Link>
      </p>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className="auth_input"
          type="text"
          {...register('email', { required: true })}
        />
        <input
          className="auth_input"
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

export default SignInPage
