import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-4' >Tailwind</h1>
      <Card name="Sakshi"/>
      <Card name="Sahil"/>
      <Card />
    </>
  )
}

export default App
