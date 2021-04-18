import "./styles.css";
import React, {useState} from 'react'

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }

  return(
    <div>
      <input value={firstName} onChange={handleFirstNameChange}></input>
      <input value={lastName} onChange={handleLastNameChange}></input>
      <div>Merhaba {firstName} {lastName}</div>
    </div>
  )
}

export default App