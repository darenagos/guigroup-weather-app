import React, { useEffect, useState } from "react";
import axios from "axios";
import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";
import wind from "./assets/wind.png";
import drop from "./assets/drop.png";

import Caution from "./Components/CautionTipsSection/CautionTipsSection";
 

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const fetchData = async () => {
    console.log(city)
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
      );
      setWeatherData(response.data);
      console.log(response.data); //You can see all the weather data in console log
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const formatCityName = (cityName) => {
    // Replace spaces with plus sign
    return cityName.replace(/\s+/g, "+");
  };

  return (
  <>
    <div className="main-photo">
      <div className="grid-container-todaysWeather">
      {/* search bar section */}
        <form className="search-bar grid-col-span-4" onSubmit={handleSubmit}>
          <div className="flex-search">
            <div className="search-logo"></div>
            <input id="searchBarInput" type="text" value={city} placeholder="Location" onChange={handleInputChange} className="search-text">
            </input>
            </div>
        </form>
      
      {weatherData ? (
        <>
            {/* <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
            <p>Feels like : {weatherData.main.feels_like}°C</p>
            <p>Humidity : {weatherData.main.humidity}%</p>
            <p>Pressure : {weatherData.main.pressure}</p>
            <p>Wind Speed : {weatherData.wind.speed}m/s</p> */}
            
            <div>
              <div className="flex-sunrise">
                <div className="sunrise-logo">
                  <img src={sunrise} />
                </div>
                <div className="sunrise-time">{new Date(weatherData.sys.sunrise*1000).toLocaleTimeString("en-GB")}</div>
              </div>
              <div className="flex-sunset">
                <div className="sunset-logo">
                  <img src={sunset} />
                </div>
                <div className="sunset-time">{new Date(weatherData.sys.sunset*1000).toLocaleTimeString("en-GB")}</div>
              </div>
            </div>
            <div className="condition-icon">
              {weatherData.weather.icon}
            </div>
            <div className="temperature">{weatherData.main.temp.toFixed(0)}°</div>
            <div>
              <div className="high-low">H:{weatherData.main.temp_max.toFixed(0)}°L:{weatherData.main.temp_min.toFixed(0)}°</div>
              <div className="flex-precipitation">
              </div>
              <div className="flex-wind">
                <div className="windspeed-icon">
                  <img src={wind} />
                </div>
                <div className="wind-speed">{weatherData.wind.speed} m/s</div>
              </div>
            </div>
            <div></div>
            <div className="location grid-col-span-2">{weatherData.name}</div>
            <div></div>
          </>
        ) : (
          <>
          </>
      )} 
      </div>
    </div>
    <Caution />
  </>
  );
};
export default Weather;