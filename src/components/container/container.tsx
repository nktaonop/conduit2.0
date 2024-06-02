import { ReactNode } from 'react'
import s from './container.module.scss'

interface ContainerProps {
  children: ReactNode
}

const ContainerComponent = ({ children }: ContainerProps) => {
  return <div className={s.container}>{children}</div>
}

export default ContainerComponent
