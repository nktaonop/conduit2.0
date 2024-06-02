import { http } from '@/providers/http'

export const getArticles = () => {
  const response = http.get('/articles?limit=10&offset=0')
  return response
}
