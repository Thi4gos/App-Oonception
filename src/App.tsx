// import { useState } from 'react'
// import reactLogo from '../public/images/react.svg'
// import viteLogo from '../public/images/vite.svg'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

export class User {
  Nome: string
  Senha: number

  constructor(Nome: string, Senha: number) {
    this.Nome = Nome
    this.Senha = Senha
  }
}
const user: User = new User('Thiago dos Santos', 12345)

function App() {

  return (
    <div className='*:font-sans flex flex-row content-between bg-principalBG h-screen'>
      <main className='flex items-center justify-center h-screen'>
        <h1 className='text-principalWG'>Olá, Senhor {user.Nome}</h1>
        <h1 className='text-principalWG'>Seu número é {user.Senha}</h1>
      </main>
    </div>
  )
}

export default App
