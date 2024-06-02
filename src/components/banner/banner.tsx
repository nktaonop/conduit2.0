import ContainerComponent from '../container/container'
import s from './banner.module.scss'

const BannerComponent = () => {
  return (
    <div className={s.banner}>
      <ContainerComponent>
        <h1 className={s.title}>conduit</h1>
        <p className={s.paragraph}>A place to share your knowledge.</p>
      </ContainerComponent>
    </div>
  )
}

export default BannerComponent
