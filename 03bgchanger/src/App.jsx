import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [color,setColor] = useState('black')

  return (
    <div className="W-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap gap-3 justify-center shadow-lg p-4 rounded-3xl bg-white px-3 py-2'>
          <Button onClick={() => setColor('red')} color='Red'/>
          <Button onClick={() => setColor('blue')} color='Blue'/>
          <Button onClick={() => setColor('green')} color='Green'/>
      
        </div>
      </div>
    </div>
  )
}

export default App
