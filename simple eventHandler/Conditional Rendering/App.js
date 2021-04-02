import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [isim, setIsim] = useState("");
  const [girisYapildi, setGirisYapildi] = useState(false);
  const [hataMesaji, setHataMesaji] = useState("");

  const handleChange = (event) => setIsim(event.target.value);

  const handleSubmit = (isim) => {
    if (isim.length < 6) {
      setHataMesaji("Kullanıcı ismi en az 6 karqakter olmalıdır");
    } else {
      setHataMesaji("");
      setGirisYapildi(true);
    }
  };

  return (
    <div className="App">
      <h1>React Conditional Rendering</h1>
      {girisYapildi && <p>Giriş Yapıldı</p>}
      {girisYapildi ? (
        <React.Fragment>
          <h2>Hoş Geldiniz, {isim}</h2>
          <button onClick={() => setGirisYapildi(false)}>Çıkış Yap</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name="isim"
            placeholder="isminiz"
            value={isim}
            onChange={handleChange}
          />
          <button onClick={() => handleSubmit(isim)}>Giriş</button>
          {hataMesaji ? <h4>{hataMesaji}</h4> : <h2>Giriş yapınız</h2>}
        </React.Fragment>
      )}
    </div>
  );
}
