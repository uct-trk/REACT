import React, { useState } from 'react'

const data = [
  {name: "Ahmet"},
  {name: "Ugurcan"},
  {name: "Ali"},
  {name: "Veli"},
  {name: "Ahmet"}
];

export default function App(){
  const [users, setUsers] = useState(data);

  return(
    <div className="App">
      <h1>Ugurcan TURK</h1>
      <input placeholder="search"/>
      {
        users.map((user, index)=> {
          return <User key={index} user={user}/>
        })
      }
    </div>
  )
}

function User(props){
  return (
    <div>
      <p>{props.user.name}</p>
    </div>
  )
}