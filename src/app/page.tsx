'use client'
import { useEffect, useState } from 'react'
import ArticleComponent from '@/components/article/article'
import BannerComponent from '@/components/banner/banner'
import { Article } from '@/interfaces/article'
import { getArticles } from '@/services/articles'

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchData = async () => {
    const {
      data: { articles },
    } = await getArticles()
    setArticles(articles)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <BannerComponent />
      {articles.map((article) => (
        <ArticleComponent key={article.slug} articles={article} />
      ))}
    </>
  )
}
