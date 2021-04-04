import React, {useState} from 'react'
import './style.css'

const App = () => {
  const [counter, setCounter] = useState(0)
  // counter = state
  // setCounter = function
  // useState(0) zere is initial value - sıfır baslangıc değeridir

  const increase = () => {
    setCounter(counter + 1)
  }
  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="box">
      <p>{counter}</p>
      <button onClick={increase}>Artır</button>
      <button onClick={decrease}>Azalt</button>
    </div>
  )
}

export default App
