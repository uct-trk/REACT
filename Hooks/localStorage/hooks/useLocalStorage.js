import { useState } from "react"

export const useLocalStorage = (key, INITIAL_VALUE) => {
    const [state, setState] = useState(() => { // bu fonksiyon key e bakıcak değer varsa onu giricek yoksa ınıtıla value yı giricek
    const storage = localStorage.getItem(key);
    return storage ? JSON.parse(storage) : INITIAL_VALUE;
  })

  const updateStorage  = value => { // aldığı değeri localeStorageye kayıt edecek
    localStorage.setItem(key, JSON.stringify(value));
    setState(value) // aynı değeri setStateye kayıt edecek
  };

  return [state, updateStorage] // ne kaydediyorsak onu döndürücez

}