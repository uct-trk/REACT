import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [countries, setCountries] = useState([]);

  /* useEffect(() => {
fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(response => setCountries(response))
}, []) */

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className="App">
      {countries.map((country) => (
        <div key={country.numericCode}>
          <h1>{country.name}</h1>
          <h2>Population: {country.population}</h2>
          <h4>{country.capital}</h4>
          <p>
            <img src={country.flag} style={{ width: "100px" }} />
          </p>
        </div>
      ))}
    </div>
  );
}
