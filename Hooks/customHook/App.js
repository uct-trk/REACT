import React from 'react'
import './style.css';
import {useInput} from "./hooks/userInput"

export default function App () {
  
/*   const [inputs, setInputs] = useState({name: "", age: "", email: ""})
 */
  /* const handleChange = event => {
    setInputs({ ...inputs, [event.target.value]: event.target.value}) // [] bu parantezi kullanmamızın sebebi key degeri olarak atadıgımız için
  } */

  const [inputs, setInputs] = useInput({name: "", age: "", email: ""})

  return(
    <div className="App">
      <h1>Ugurcan Turk</h1>
      <h2>Özel hook yazımı</h2>
      <form className="form">
        <label htmlFor="name">
          Name: <input name="name" value={inputs.name} onChange={setInputs}/>
        </label>
        <label htmlFor="age">
          Age: <input name="age" value={inputs.age} onChange={setInputs}/>
        </label>
        <label htmlFor="email">
          Email: <input name="email" value={inputs.email} onChange={setInputs}/>
        </label>
      </form>
    </div>
  )



}