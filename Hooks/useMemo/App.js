import React, {useMemo, useState} from 'react'

const users = [
  {id: 'a', name: 'Ugurcan'},
  {id: 'b', name: 'Ugur'},
  {id: 'c', name: 'Umit'},
  {id: 'd', name: 'Ahmet'},
  {id: 'e', name: 'Mehmet'},
]

const App = () => {
  const [text, setText] = React.useState('')
  const [search, setSearch] = React.useState('')

  const handleText = (event) => {
    setText(event.target.value)
  }

  const handleSearch = () => {
    setSearch(text)
  }

  const filteredUsers = React.useMemo(
    () =>
      users.filter((user) => {
        console.log('Fiter function is running')
        return user.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase())
      }),
    [search],
  )

  return (
    <div className="App">
      <input type="text" onChange={handleText} value={text} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <List list={filteredUsers} />
    </div>
  )
}

const List = ({list}) => {
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

const ListItem = ({item}) => {
  return <li>{item.name}</li>
}

export default App
