import useCurrencyInfo from "./hooks/useCurrencyInfo"
import './App.css'

function App() {
  return (
    <>
      <h1>Currency Converter {useCurrencyInfo("usd")}</h1>
    </>
  )
}

export default App
