import React, { useEffect, useState } from "react";
import axios from "axios";
import Caution from "./CautionTipsSection.js";

function MultiDayOutlook({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (city) => {
    // Define fetchData function here
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
      );
      console.log(weatherData);
      setWeatherData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    // Fetch weather data only when the city changes
    if (city) {
      fetchData(city); // call fetchData function with the city parameter
    }
  }, [city]); // execute useEffect whenever the city changes

  return (
    <>
      {weatherData ? (
        <>
          <div className="weather-table grid-container-multiDayOutlook">
            {/* Days */}
            <div className="grid-border-bottom grid-border-side">
              {new Date(weatherData.list[0].dt * 1000)
                .toDateString()
                .substring(0, 3)}
            </div>
            <div className="grid-border-bottom grid-border-side">
              {new Date(weatherData.list[8].dt * 1000)
                .toDateString()
                .substring(0, 3)}
            </div>
            <div className="grid-border-bottom grid-border-side">
              {new Date(weatherData.list[16].dt * 1000)
                .toDateString()
                .substring(0, 3)}
            </div>
            <div className="grid-border-bottom grid-border-side">
              {new Date(weatherData.list[24].dt * 1000)
                .toDateString()
                .substring(0, 3)}
            </div>
            <div className="grid-border-bottom grid-border-side">
              {new Date(weatherData.list[32].dt * 1000)
                .toDateString()
                .substring(0, 3)}
            </div>
            <div className="grid-border-bottom grid-border-side">
              {new Date(weatherData.list[39].dt * 1000)
                .toDateString()
                .substring(0, 3)}
            </div>
            {/* weathericons */}
            <div className="grid-border-side">
              <img
                class="table_image"
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.list[0].weather[0].icon +
                  "@2x.png"
                }
              />
            </div>{" "}
            {/* << placeholder */}
            <div className="grid-border-side">
              <img
                class="table_image"
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.list[8].weather[0].icon +
                  "@2x.png"
                }
              />
            </div>
            <div className="grid-border-side">
              <img
                class="table_image"
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.list[16].weather[0].icon +
                  "@2x.png"
                }
              />
            </div>
            <div className="grid-border-side">
              <img
                class="table_image"
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.list[24].weather[0].icon +
                  "@2x.png"
                }
              />
            </div>
            <div className="grid-border-side">
              <img
                class="table_image"
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.list[32].weather[0].icon +
                  "@2x.png"
                }
              />
            </div>
            <div className="grid-border-side">
              <img
                class="table_image"
                src={
                  "https://openweathermap.org/img/wn/" +
                  weatherData.list[39].weather[0].icon +
                  "@2x.png"
                }
              />
            </div>
            {/* temperature */}
            <div className="grid-border-side">
              {weatherData.list[0].main.temp.toFixed(0)}°
            </div>
            <div className="grid-border-side">
              {weatherData.list[8].main.temp.toFixed(0)}°
            </div>
            <div className="grid-border-side">
              {weatherData.list[16].main.temp.toFixed(0)}°
            </div>
            <div className="grid-border-side">
              {weatherData.list[24].main.temp.toFixed(0)}°
            </div>
            <div className="grid-border-side">
              {weatherData.list[32].main.temp.toFixed(0)}°
            </div>
            <div className="grid-border-side">
              {weatherData.list[39].main.temp.toFixed(0)}°
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MultiDayOutlook;
