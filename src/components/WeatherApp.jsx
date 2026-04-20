
import { useState } from "react";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "e5e6b51bb9c97d090da307c864f30b13";

  const getWeather = async () => {
    if (!city) return;

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div>
      <h3>Weather App</h3>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && weather.main && (
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp}°F</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
