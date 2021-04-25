import React, { useState } from 'react'
import "./styles.css";
import Restaurant from './Restaurant'
import Nav from './Nav'

export default function App() {

  const [restaurants, setRestaurants] = useState([])

  return (
    <div className="restaurants">
      <Nav restaurants={restaurants} setRestaurants={setRestaurants}/>
      {restaurants.map(rt => <Restaurant key={rt.id} restaurant={rt} />)}
    </div>
  );
}
