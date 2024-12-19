// import { useState } from 'react'
// import reactLogo from '../public/images/react.svg'
// import viteLogo from '../public/images/vite.svg'
import './index.css'
import MenuLateral from './components/Meijor/MenuLateral';
import TopHeader from './components/Meijor/TopBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

function App() {

  return (
    <main>
      <MenuLateral></MenuLateral>
      <TopHeader></TopHeader>
    </main>
  )
}

export default App
