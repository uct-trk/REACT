import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {

  const [data, setData] = useState({})

  useEffect(() => {
    const getCat = async () => {
      await fetch("https://cataas.com/cat?json=true")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
    }
    setInterval(function(){getCat()}, 2000)
    
  })

  return(
    <div>
      <img 
        src={`https://cataas.com/cat/${data.id}`} 
        width={500}
        alt={"cat"}/>
    </div>
  )
}
export default App;
