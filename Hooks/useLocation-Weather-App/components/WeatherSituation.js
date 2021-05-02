const WeatherSituation = (props) => {
  const { weather } = props;

  if(!weather){
    return <p>You have to allow location access</p>
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <h4>{weather.weather.map((data) => data.description).join(", ")}</h4>
      <p>{weather.main.temp} C</p>
      <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </div>
  );
};

export default WeatherSituation;
