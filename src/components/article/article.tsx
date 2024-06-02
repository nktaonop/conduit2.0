import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/interfaces/article'
import s from './article.module.scss'

interface ArticleProps {
  articles: Article
}

const ArticleComponent = ({ articles }: ArticleProps) => {
  return (
    <>
      <div>
        <div>
          <Image
            width={32}
            height={32}
            src={articles.author.image}
            alt="author avatar"
          />
          <>
            <Link href={{}}>{articles.author.username}</Link>
            <span>{articles.createdAt}</span>
          </>
        </div>

        <button>{articles.favoritesCount}</button>
      </div>

      <Link href={{}}>
        <h1>{articles.title}</h1>
        <p>{articles.description}</p>

        <div>
          <span>Read more...</span>
          <ul>
            {articles.tagList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Link>
    </>
  )
}

export default ArticleComponent
