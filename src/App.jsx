import { useState } from 'react'
import './App.css'
import Header from './Componenets/Header/Header'
import Main from './Componenets/Main/Main'
import Footer from './Componenets/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
