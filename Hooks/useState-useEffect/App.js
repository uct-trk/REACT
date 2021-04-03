import React, { useEffect, useState } from 'react'


export default function App(){

  const [isim, setIsım] = useState("Ugurcan");

  useEffect(() => {
    console.log("Merhaba")
  }, [isim]);

  return(
    <div className="App">
      <h1>Hello, {isim}</h1>
      <button onClick={()=> setIsım("Umit")}>Change name</button>
      <MesajGoster/>
    </div>
  )
}

function MesajGoster(){

  const [birinciyiGoster, setBirinciyiGoster] = useState(true)

  useEffect(()=> {
    console.log("Gunaydın")
  }, [birinciyiGoster])

  return (
    <div>
      {birinciyiGoster ? <h3>Hayatta en hakiki mürşit ilimdir</h3>
      : <h3>Beni Türk hekimlerine emanet ediniz.</h3>}
      <button onClick={()=> setBirinciyiGoster(!birinciyiGoster)}>Change Message</button>
    </div>
  )
}