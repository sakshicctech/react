import  { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDownClick = () => {
    if (count > 0) {
      setCount(count - 1)
    }else {
      setCount(0)
    }
  }

  return (
    <>
    <h3>{count}</h3>
    <button onClick={handleClick}>+</button>
    <button onClick={handleDownClick}>-</button>
    </>
  )
}

export default App
