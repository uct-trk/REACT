import React, {useEffect, useRef} from 'react'
import './style.css'

function App() {
  const inputRef = useRef()
  const divRef = useRef()

  const onFocus = () => {
    inputRef.current.focus()
  }

  const onDivBorder = () => {
    divRef.current.style.border = '1px solid black'
  }

  useEffect(() => {
    console.log(inputRef.current)
  })

  return (
    <div ref={divRef} className="App">
      <h1>Ugurcan TURK</h1>
      <h2>Türkçe react</h2>
      <input ref={inputRef} placeholder="write something" />
      <button onClick={onFocus}>İnput Focus</button>
      <button onClick={onDivBorder}>Create Border</button>
    </div>
  )
}

export default App
