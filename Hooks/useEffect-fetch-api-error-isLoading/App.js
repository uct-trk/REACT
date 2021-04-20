import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCat = async () => {
      setIsLoading(true)
      await fetch("https://cataas.com/cat?json=true")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => setError(true))
      setIsLoading(false)
    }
    getCat()
  }, [])

  if(isLoading) return <div>"YÜKLENİYOR..."</div>
  if(error) return <div>"Hata Var..."</div>

  return (
    <div className="App">
   
          <img 
            alt={"CAT"}
            width={300}
            src={`https://cataas.com/cat/${data.id}`}/>
    </div>
  );
}
