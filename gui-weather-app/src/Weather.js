import React, { useEffect, useState } from "react";
import axios from "axios";
import GetLocation from "./App.js";
import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";
import wind from "./assets/wind.png";
import drop from "./assets/drop.png";
import MultiDayOutlook from "./MultiDayOutlook.js";
 

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [submitted, setsubmit] = useState(null)
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
      );
      setWeatherData(response.data);
      setsubmit(true)
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
  return (
    <>
      <div className="main-photo">
        <div className="grid-container-todaysWeather">
        {/* search bar section */}
          <form className="search-bar grid-col-span-4" onSubmit={handleSubmit}>
            <div className="flex-search">
              <div className="search-logo"></div>
              <input id="searchBarInput" type="text" value={city} placeholder="Location" onChange={handleInputChange} className="search-text"></input>
              </div>
          </form>
        
        {submitted ? (
          <>
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
              
              <img src={"https://openweathermap.org/img/wn/"+ weatherData.weather[0].icon +"@2x.png"}/>
              
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
              <div id="CurrentLocation" className="location grid-col-span-2">{weatherData.name}</div>
              <div></div>
            </>
          ) : (
            <>
            <div>
                <div className="flex-sunrise">
                  <div className="sunrise-logo">
                    <img src={sunrise} />
                  </div>
                  <div className="sunrise-time"></div>
                </div>
                <div className="flex-sunset">
                  <div className="sunset-logo">
                    <img src={sunset} />
                  </div>
                  <div className="sunset-time"></div>
                </div>
              </div>
              
              <img />
              
              <div className="temperature">°</div>
              <div>
                <div className="high-low">H:°L:°</div>
                <div className="flex-precipitation">
                </div>
                <div className="flex-wind">
                  <div className="windspeed-icon">
                    <img src={wind} />
                  </div>
                  <div className="wind-speed">m/s</div>
                </div>
              </div>
              <div></div>
              <div id="CurrentLocation" className="location grid-col-span-2"></div>
              <div></div>
            </>
        )} 
        </div>
      </div>

      <MultiDayOutlook city={city} />

    </>
    
      
  );
};
export default Weather;