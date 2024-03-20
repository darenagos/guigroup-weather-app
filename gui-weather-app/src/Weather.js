import React, { useEffect, useState } from "react";
import axios from "axios";

// all ICONS
import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";
import wind from "./assets/wind.png";
import drop from "./assets/drop.png";
import clear_night from "./assets/conditions/01n.png"
import clear_day from "./assets/conditions/01d.png"
import few_clouds_day from "./assets/conditions/02d.png"
import few_clouds_night from "./assets/conditions/02n.png"
import scattered_clouds_day from "./assets/conditions/03d.png"
import scattered_clouds_night from "./assets/conditions/03n.png"
import broken_clouds_day from "./assets/conditions/04d.png"
import broken_clouds_night from "./assets/conditions/04n.png"
import shower_rain_day from "./assets/conditions/09d.png"
import shower_rain_night from "./assets/conditions/09n.png"
import rain_day from "./assets/conditions/10d.png"
import rain_night from "./assets/conditions/10n.png"
import thunderstorm_day from "./assets/conditions/11d.png"
import thunderstorm_night from "./assets/conditions/11n.png"
import snow_day from "./assets/conditions/13d.png"
import snow_night from "./assets/conditions/13n.png"
import mist_day from "./assets/conditions/50d.png"
import mist_night from "./assets/conditions/50n.png"

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

  const getConditionIcon = (id) => {
    switch(id) {
      case "01d":
        return clear_day;
      case "01n":
        return clear_night;
      case "02d":
        return few_clouds_day;
      case "02n":
        return few_clouds_night;
      case "03d":
        return scattered_clouds_day;
      case "03n":
        return scattered_clouds_night;
      case "04d":
        return broken_clouds_day;
      case "04n":
        return broken_clouds_night;
      case "09d":
        return shower_rain_day;
      case "09n":
        return shower_rain_night;
      case "10d":
        return rain_day;
      case "10n":
        return rain_night;
      case "11d":
        return thunderstorm_day;
      case "11n":
        return thunderstorm_night;
      case "13d":
        return snow_day
      case "13n":
        return snow_night;
      case "13d":
        return mist_day;
      case "13n":
        return mist_night;
    }
  }

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
              <img src={getConditionIcon(weatherData.weather[0].icon)} />
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