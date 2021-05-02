import axios from "axios";
import { useState, useEffect } from "react";
import { usePosition } from "use-position";
import WeatherSituation from "./components/WeatherSituation";
import "./styles.css";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [weather, setWeather] = useState();

  // usePosition hooks kullanıldı
  const { latitude, longitude } = usePosition();

  // bu fonksiyon iki parametre alıcak enlem ve boylam
  // apı isteğini gerçekleştireceğiz bu yuzden async diye işaretledik
  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    console.log(lang)
    try {
      const { data } = await axios.get(
        // tarayıcının diline göre ve celcius olarak ayrladık ayrıca enlem ve boylama göre bunların sonucunu verdi
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Hata Oluştu");
    }
  };

  useEffect(() => {
    // latitude ve longitude varsa bu api isteğini gerçekleştir
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  console.log(latitude, longitude, weather);

  return (
    <div>
      <h1>Current Temp</h1>
      <WeatherSituation weather={weather} />
    </div>
  );
};

export default App;
