import "./App.css";
import React, { useState, useEffect } from "react";
import InputForm from "./components/InputForm";
import Display from "./components/Display";

export default function App() {
  const [city, setCity] = useState("london");
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?appid=16c681b8bf60bf14a8a6bdc1f00fc6c9&q=${city}`
      );
      if (!response.ok) {
        setError("Location not found");
        setWeatherData(null);
        setIsLoading(false);
        return;
      }
      setError(null);

      const result = await response.json();
      setWeatherData(result);
      console.log(result);
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchWeatherData();
  }, [city]);

  const handleSearch = (inputValue) => {
    console.log(inputValue.current.value);
    setCity(inputValue.current.value);
  };

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <div>
        <div className='input'>
          <p>{error && error}</p>
          <InputForm handleSearch={handleSearch} />
        </div>
        {/* <button onClick={() => setCity("london")}>London</button>
        <button onClick={() => setCity("mecca")}>Mecca</button>
        <button onClick={() => setCity("istanbul")}>Istanbul</button> */}
      </div>
      <div>
        <Display weatherData={weatherData} isLoading={isLoading} />
      </div>
    </div>
  );
}
