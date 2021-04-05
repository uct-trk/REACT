import {useState} from 'react'

export const useInput = (params) => {
  // params userInputun içinde yazan objeye eşittir
  const [inputs, setInputs] = useState(params)

  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value}) // [] bu parantezi kullanmamızın sebebi key degeri olarak atadıgımız için
  }

  return [inputs, handleChange]
}
