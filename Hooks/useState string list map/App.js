import "./styles.css";
import React, {useState} from 'react'

const App = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  
  const handleMessage = (e) => {
    setMessage(e.target.value);
  }

  const handleList = (e) => {
    setMessageList([...messageList,
    {
      id: messageList.length + 1,
      message: message
    }])
    setMessage(""); // Kutuyu temizler
  }

  return(
    <div>
      <input 
        type='text'
        value={message}
        placeholder="Liste oluşturunuz"
        onChange={handleMessage}/>
      
      <button 
        value="Ekle"
        onClick={handleList}>Ekle</button>  

      <ol>
        {
          messageList.map(i => (
            <li key={i.id}>{i.message}</li>
          ))
        }
      </ol>
    </div>
  )
}

export default App