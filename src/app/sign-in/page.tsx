'use client'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { AUTH_TOKEN_KEY, Route } from '@/constants/common.constants'
import { signIn } from '@/services/auth'
import { AuthLogin } from '@/interfaces/auth'
import { setItem } from '@/helpers/storage'
import s from './sing-in.module.scss'

const SignInPage = () => {
  const { register, handleSubmit } = useForm<AuthLogin>()
  const router = useRouter()

  const onSubmit: SubmitHandler<AuthLogin> = async (data) => {
    try {
      const {
        data: { user },
      } = await signIn(data)
      setItem(AUTH_TOKEN_KEY, user.token)
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

export default SignInPage
