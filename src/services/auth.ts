import { AuthLogin, AuthRegister } from '@/interfaces/auth'
import { http } from '@/providers/http'

export const signIn = async (data: AuthLogin) => {
  await http.post('/users/login', { user: data })
}

export const signUp = async (data: AuthRegister) => {
  await http.post('/users', { user: data })
}
