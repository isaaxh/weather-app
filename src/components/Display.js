import React from "react";

function Display({ weatherData, isLoading }) {
  return (
    <div>
      <div className='Location'></div>
      <h2>
        {isLoading ? "Loading..." : weatherData && weatherData.weather[0].main}
      </h2>
      <h2>
        {isLoading ? "Loading..." : weatherData && weatherData.name},
        {isLoading ? "Loading..." : weatherData && weatherData.sys.country}
      </h2>
      <h1>{isLoading ? "Loading..." : weatherData && weatherData.main.temp}</h1>
      <p>
        {isLoading ? "Loading..." : weatherData && weatherData.main.feels_like}
      </p>
      <p>
        {isLoading ? "Loading..." : weatherData && weatherData.main.humidity}
      </p>
      <p>
        {isLoading ? "Loading..." : weatherData && weatherData.main.pressure}
      </p>
    </div>
  );
}

export default Display;
