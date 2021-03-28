import React, { useState } from 'react';
import "./styles.css";

const INITIAL_STATE = [
  { id:1, baslik: "Alisveris Yap", tamamlandi: false },
  { id:2, baslik: "Fatura öde", tamamlandi: true }
]

export default function App() {
  
  const [liste, setListe] = useState(INITIAL_STATE); // INITIAL_STATEYI düzenleyecek olan fonsiyonun adı setListe
  const [yeniBaslik, setYeniBaslik] = useState("");

  const addNew = title => {
    setListe([...liste, {id: Date.now(), baslik: title, tamamlandi:false}])
    setYeniBaslik("");
  }

  const markCompleted = id => {
    setListe
      (liste.map
        (eleman => eleman.id === id ? {...eleman, tamamlandi: !eleman.tamamlandi} : eleman))
  }

  const clearCompleted = () => {
    setListe(liste.filter(item => !item.tamamlandi))
  }




  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input value={yeniBaslik} onChange={(e) => setYeniBaslik(e.target.value)} placeholder="listeye ekle"></input>
        <button onClick={() => addNew(yeniBaslik)}>EKLE</button>
      </div>
      <div className="liste">
        {
          liste.map((item,index) => (<div 
            key={index}
            onClick= { () => { markCompleted(item.id)}} 
            className={item.tamamlandi ? "yapildi" : ""}>
            {item.baslik}
            </div>))
        }
        {/* <div>Yapılacak</div>
        <div className>Yapıldı</div> */}
        <div>
          <button onClick={() => clearCompleted()} className="temizle">Tamamlananları Temizle</button></div>
      </div>
    </div>
  );

}


