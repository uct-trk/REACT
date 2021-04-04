import React, {useReducer} from 'react'
import {reducer} from './reducer'

const initialState = {
  data: '',
  loading: false,
  error: '',
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState) // reducer fonksiyon diğeri baslangıc statesi
  const {data, loading, error} = state

  const fetchDog = () => {
    dispatch({type: 'FETCH_START'})

    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((res) => {
        dispatch({type: 'FETCH_SUCCESS', payload: res.message})
      })
      .catch(() => {
        dispatch({type: 'FETCH_ERROR', payload: 'Error fetching data'})
      })
  }

  return (
    <div>
      <button onClick={fetchDog} disabled={loading}>
        Fetch Dog
      </button>
      {data && ( // eger data varsa ekrana kopek resmi bastır
        <div>
          <img src={data} alt="Random Dog" />
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  )
}
export default App
