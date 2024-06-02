import { AuthLogin } from '@/interfaces/auth'
import { http } from '@/providers/http'

export const signIn = async (data: AuthLogin) => {
  await http.post('/users/login', { user: data })
}
