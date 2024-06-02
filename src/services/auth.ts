import { AuthLogin, AuthRegister } from '@/interfaces/auth'
import { http } from '@/providers/http'

export const signIn = (data: AuthLogin) => {
  const response = http.post('/users/login', { user: data })
  return response
}

export const signUp = (data: AuthRegister) => {
  const response = http.post('/users', { user: data })
  return response
}
