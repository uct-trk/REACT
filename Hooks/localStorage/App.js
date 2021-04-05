import React from 'react'
import './style.css'
import {useInput} from './hooks/userInput'

export default function App() {
  const INITIAL_STATE = {
    name: '',
    age: '',
    email: '',
    question: '',
  }

  const [inputs, setInputs] = useInput('inputs', INITIAL_STATE)

  return (
    <div className="App">
      <h1>Ugurcan Turk</h1>
      <h2>Özel hook yazımı</h2>
      <form className="form">
        <label htmlFor="name">
          Name: <input name="name" value={inputs.name} onChange={setInputs} />
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={setInputs} />
        </label>
        <label htmlFor="email">
          Email:{' '}
          <input name="email" value={inputs.email} onChange={setInputs} />
        </label>
        <label htmlFor="Security Question">
          Cats name:{' '}
          <input name="question" value={inputs.question} onChange={setInputs} />
        </label>
      </form>
    </div>
  )
}
