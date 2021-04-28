import React, { useEffect, useState } from "react";
import "./styles.scss";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Country from './Country'

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>
          React Router{" "}
          <img
            src="https://avatars3.githubusercontent.com/u/60869810?v=4"
            alt="React Dersleri"
          />{" "}
          React Dersleri
        </h1>
        <Route
          path="/"
          exact
          render={() =>
            countries.map((country, i) => (
              <div key={i} className="country">
                <Link to={`/country/${country.alpha3Code}`}><h3>{country.name}</h3></Link>
              </div>
            ))
          }
        />
        <Route path="/country/:code"
        render={(renderProps) => {
          const country = countries.find(country => country.alpha3Code
            === renderProps.match.params.code)
          return <Country {...renderProps} country={country}/>
        }}/>
      </div>
    </Router>
  );
}


