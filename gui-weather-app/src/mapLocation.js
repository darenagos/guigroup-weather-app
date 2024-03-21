import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function Map({ city }) {
    const [weatherData, setWeatherData] = useState(null);
    const fetchData = async (city) => {
      // Define fetchData function here
      try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
        );
        setWeatherData(response.data);
      } catch (error) {
      }
    };
  
    useEffect(() => {
      // Fetch weather data only when the city changes
      if (city) {
        fetchData(city); // Call fetchData function with the city parameter
      }
    }, [city]); // Execute useEffect whenever the city changes
  return (
    <>
    <div className="map-position">
        {weatherData ? (
            <>
                <iframe className="map_images" id="map_image_5" src={"https://maps.google.com/maps?q=" + weatherData.coord.lat + "," + weatherData.coord.lon + "&hl=gb&z=14&amp&output=embed"}></iframe>
            </>
            ) : (
            <>
            
            </>
                )}

            </div>
        </>

            );
}
export default Map;