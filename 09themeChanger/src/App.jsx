
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/Themebtn'
import { ThemeProvider } from './context/ThemeContext'
import { useState,useEffect } from 'react'

function App() {

  const [theme, setThemeMode] = useState("light")

  const lightTheme = () =>{
    setThemeMode("light")
  }

  const darkTheme = () =>{
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(theme)
  }, [theme])
  

  return (
    <ThemeProvider value={{theme,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />
          </div>
      </div>
    </div>
  </ThemeProvider>
  )
}

export default App
