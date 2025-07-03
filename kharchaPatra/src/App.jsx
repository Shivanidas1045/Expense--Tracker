import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './component/ExpenseForm'
import Navbar from './component/Navbar'
import AllRouter from './component/AllRouter'




function App() {
  return (
    <div>
      <Navbar/>
<AllRouter/>

    </div>
  )
}

export default App
