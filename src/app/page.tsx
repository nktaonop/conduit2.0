'use client'
import ArticleComponent from '@/components/article/article'
import BannerComponent from '@/components/banner/banner'
import { Article } from '@/interfaces/article'
import { getArticles } from '@/services/articles'
import { useEffect, useState } from 'react'

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([])

  const fetchData = async () => {
    const {
      data: { articles },
    } = await getArticles()
    console.log(articles)
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
