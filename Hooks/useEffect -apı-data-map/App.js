import "./styles.css";
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
/* const [counter, setCounter] = useState(0) */
const [hits, setHits] = useState([])
const [query, setQuery] = useState("covid19")




 useEffect(() => {
  const  fetchData = async () => {
    const  {data}  = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
    console.log(data)
    setHits(data.hits);
  };
  fetchData();
 }, [query])


const handleChange = (e) => {
  setQuery(e.target.value)
}

  return(
    <div>
      <input type="text" onChange={handleChange}></input>
      <ul>
        {
          hits.map(hit => (
            <li key={hit.objectID}>{hit.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
