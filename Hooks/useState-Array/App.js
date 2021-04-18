import "./styles.css";
import React, {useState} from 'react'

const App = () => {

  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return(
    <div>
      <button onClick={addItem}>Ekle</button>
      <ul>
        {
          items.map(item => <li key={item.id}>{item.value}</li>)
        }
      </ul>
    </div>
  )
}

export default App

