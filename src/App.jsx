import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'

function App() {


  return (
    <>
      <Navbar />
      <Profile />
      <About />
 
    </>
  )
}

export default App
