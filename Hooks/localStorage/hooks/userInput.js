import {useState, useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useInput = (key, INITIAL_STATE) => {
  const [storage, setStorage] = useLocalStorage(key, INITIAL_STATE)
  const [inputs, setInputs] = useState(storage);

  useEffect(() => { // inputs degerleri değiştiğinde bu degerleri localeStorageye kayıt edeceğiz
    setStorage(inputs) // localStorageye gönderdik
  }, [inputs]);

  const handleChange = (event) => {
    setInputs({...inputs, [event.target.name]: event.target.value}) // [] bu parantezi kullanmamızın sebebi key degeri olarak atadıgımız için
  }

  return [inputs, handleChange]
}
