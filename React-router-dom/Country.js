import React from "react";

const Country = (props) => {
  const { country } = props;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital || "Başkent Yok"}</p>
      <img src={country.flag} alt={country.name} style={{ width: 250 }} />
    </div>
  );
};
export default Country;
