import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import About from './components/About'
import Experience from './components/Experience'

function App() {


  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
 
    </>
  )
}

export default App
