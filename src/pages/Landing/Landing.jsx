import styles from './Landing.module.css'
import Splash from '../../components/Splash/Splash'
import Carousel from '../../components/Carousel/Carousel'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <Splash />
      <Carousel />
    </main>
  )
}

export default Landing
