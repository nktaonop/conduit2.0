'use client'
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import ContainerComponent from '../container/container'
import { Route } from '@/constants/common.constants'
import { usePathname } from 'next/navigation'
import s from './header.module.scss'

const HeaderComponent = () => {
  const pathname = usePathname()

  return (
    <ContainerComponent>
      <div className={s.header}>
        <Link className={s.label} href={Route.HOME}>
          conduit
        </Link>

        <ul className={s.navbar_container}>
          <li
            className={clsx(s.nav_items, pathname === Route.HOME && s.active)}>
            <Link href={Route.HOME}>Home</Link>
          </li>
          <li
            className={clsx(
              s.nav_items,
              pathname === Route.SIGN_IN && s.active
            )}>
            <Link href={Route.SIGN_IN}>Sing in</Link>
          </li>
          <li
            className={clsx(
              s.nav_items,
              pathname === Route.SIGN_UP && s.active
            )}>
            <Link href={Route.SIGN_UP}>Sign up</Link>
          </li>
        </ul>
      </div>
    </ContainerComponent>
  )
}

export default HeaderComponent
