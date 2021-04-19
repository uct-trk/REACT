import "./styles.css";
import React, {useState} from 'react'
import Content from './Content'


const themas = {
  dark:{
    background: "#383838",
    color: "#fff",
  },
  light: {
    background: "#fff",
    color: "#000",},
};

// 1.Adım context oluştur
export const ThemaContext = React.createContext(themas.dark)

// 2. Adım provider oluştur



const App = () => {

  const [theme, setTheme] = useState(themas.dark);
  // thema değiştir
  const handleThema = () => {
    if(theme === themas.dark){
      setTheme(themas.light)
    } else {
      setTheme(themas.dark)
    }
  }

  return(
    
    <div className="container">
      <button onClick={handleThema}>{theme === themas.dark ? "Light Thema" : "Dark Thema"}</button>
      <ThemaContext.Provider value={theme}>
        <Content/>
        </ThemaContext.Provider>
    </div>
    
  )
}
export default App

