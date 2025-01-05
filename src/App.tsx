// import { useState } from 'react'
// import reactLogo from '../public/images/react.svg'
// import viteLogo from '../public/images/vite.svg'
import './index.css'
import MainPage from "./layouts/MainLayout";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

function App() {

  return (
    <main>
      <MainPage></MainPage>
    </main>
  )
}

export default App
