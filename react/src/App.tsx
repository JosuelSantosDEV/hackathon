
import styles from './App.module.scss'
import { Footer } from './components/footer'
import { Header } from './components/header'

function App() {

  return (
     <div className={`${styles.grid}`} >
      <Header/>
      <div>teste</div>
      <Footer/>
     </div>
  )
}

export default App
