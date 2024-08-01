// import { useState } from 'react'
// import reactLogo from '../public/images/react.svg'
// import viteLogo from '../public/images/vite.svg'
import './index.css'
import MenuLateral from './components/MenuLateral'
import Footer from './components/Footer'
import logo from '../public/images/LogoAppOonceptionWhiteSpear.png'

function App() {

  return (
    <div className='*:font-sans flex flex-col content-between bg-mint-green h-screen'>
      <MenuLateral />
      <main className='flex items-center justify-center h-screen'>
        <h1>My app</h1>
        <img src={logo} alt="" />
      </main>
      <Footer />
    </div>
  )
}

export default App
