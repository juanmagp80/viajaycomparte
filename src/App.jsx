import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import VideoPrincipal from './components/VideoPrincipal.jsx'
import NextTrip from './components/NextTrip.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar />
        <Header />
        <NextTrip />
        <VideoPrincipal />
      </div>
    </>
  )
}

export default App
