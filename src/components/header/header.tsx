import React from 'react'
import Link from 'next/link'
import ContainerComponent from '../container/container'
import { Route } from '@/constants/common.constants'
import s from './header.module.scss'

const HeaderComponent = () => {
  return (
    <ContainerComponent>
      <div className={s.header}>
        <Link href={Route.HOME}>conduit</Link>
        <ul>
          <Link className={s.nav_items} href={Route.HOME}>
            Home
          </Link>
          <Link className={s.nav_items} href={Route.SIGN_IN}>
            Sing in
          </Link>
          <Link className={s.nav_items} href={Route.SIGN_UP}>
            Sign up
          </Link>
        </ul>
      </div>
    </ContainerComponent>
  )
}

export default HeaderComponent
