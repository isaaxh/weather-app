import React from "react";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";

function Display({ weatherData, isLoading }) {
  return (
    <div className='display'>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className='weather-content'>
          <h1>
            {weatherData && Math.ceil(weatherData.main.temp)}
            &deg;C
          </h1>
          <h2>
            {weatherData && weatherData.name}, &nbsp;
            {weatherData && weatherData.sys.country}
          </h2>
          <div className='weather-info'>
            <p>
              <DeviceThermostatOutlinedIcon /> &nbsp;
              {weatherData && Math.ceil(weatherData.main.feels_like)}
              &deg;C
            </p>
            <p>
              <OpacityOutlinedIcon />
              &nbsp;
              {weatherData && weatherData.main.humidity}%
            </p>
            <p>
              <AirOutlinedIcon />
              &nbsp;
              {weatherData && weatherData.wind.speed}
              kph
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;
