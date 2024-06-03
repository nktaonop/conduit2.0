'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { MdOutlineArticle } from 'react-icons/md'
import { IoSettingsOutline } from 'react-icons/io5'
import ContainerComponent from '../container/container'
import { AUTH_TOKEN_KEY, Route } from '@/constants/common.constants'
import s from './header.module.scss'
import { getItem } from '@/helpers/storage'
import { httpClient } from '@/providers/http'
import { User } from '@/interfaces/user'

const HeaderComponent = () => {
  const [user, setUser] = useState<User | null>(null)
  const pathname = usePathname()

  const token = getItem(AUTH_TOKEN_KEY)

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const response = await httpClient.get('/user')
          setUser(response.data.user)
        } catch (error) {
          console.error('Error fetching user data:', error)
        }
      }
      getUser()
    }
  }, [token])

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

          {token ? (
            <>
              <li
                className={clsx(
                  s.nav_items,
                  pathname === Route.SIGN_IN && s.active
                )}>
                <Link className={s.nav_element} href={{}}>
                  <MdOutlineArticle />
                  New Article
                </Link>
              </li>
              <li
                className={clsx(
                  s.nav_items,
                  pathname === Route.SIGN_IN && s.active
                )}>
                <Link className={s.nav_element} href={{}}>
                  <IoSettingsOutline />
                  Settings
                </Link>
              </li>
              <li
                className={clsx(
                  s.nav_items,
                  pathname === Route.SIGN_IN && s.active
                )}>
                <Link className={s.nav_element} href={{}}>
                  <img
                    className={s.nav_image}
                    width={26}
                    height={26}
                    src={user?.image}
                    alt="user avatar"
                  />
                  {user?.username}
                </Link>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </ContainerComponent>
  )
}

export default HeaderComponent
