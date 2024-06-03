import Link from 'next/link'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import clsx from 'clsx'
import { Article } from '@/interfaces/article'
import ContainerComponent from '../container/container'
import { formatDate } from '@/helpers/date'
import s from './article.module.scss'

interface ArticleProps {
  articles: Article
}

const ArticleComponent = ({ articles }: ArticleProps) => {
  return (
    <ContainerComponent>
      <div className={s.article}>
        <div className={s.header}>
          <div className={s.about_author}>
            <Image
              className={s.avatar}
              width={32}
              height={32}
              src={articles.author.image}
              alt="author avatar"
            />
            <div className={s.author}>
              <Link className={s.username} href={{}}>
                {articles.author.username}
              </Link>
              <span className={s.created_at}>
                {formatDate(articles.createdAt)}
              </span>
            </div>
          </div>

          <button className={clsx(s.button)}>
            <FaHeart className={s.icon} />
            {articles.favoritesCount}
          </button>
        </div>

        <Link href={{}}>
          <h1 className={s.title}>{articles.title}</h1>
          <p className={s.description}>{articles.description}</p>

          <div className={s.footer}>
            <span className={s.read}>Read more...</span>
            <ul className={s.tags}>
              {articles.tagList.map((item) => (
                <li className={s.tag} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Link>
      </div>
    </ContainerComponent>
  )
}

export default ArticleComponent
