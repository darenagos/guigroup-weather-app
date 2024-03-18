// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const Weather = () => {
//   const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
//       );
//       setWeatherData(response.data);
//       console.log(response.data); //You can see all the weather data in console log
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//       {weatherData ? (
//         <>
//           <h2>{weatherData.name}</h2>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Description: {weatherData.weather[0].description}</p>
//           <p>Feels like : {weatherData.main.feels_like}°C</p>
//           <p>Humidity : {weatherData.main.humidity}%</p>
//           <p>Pressure : {weatherData.main.pressure}</p>
//           <p>Wind Speed : {weatherData.wind.speed}m/s</p>
//         </>
//       ) : (
//         <p>Loading weather data...</p>
//       )}
//     </div>
//   );
// };
// export default Weather;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Weather {
  // const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to fetch data only once when component mounts

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {loading ? (
        <p>Loading weather data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : weatherData ? (
        <>
          <h2>{weatherData.city.name}</h2>
          {weatherData.list.map((forecast, index) => (
            <div key={index}>
              <p>Date: {forecast.dt_txt}</p>
              <p>Temperature: {forecast.main.temp}°C</p>
              <p>Description: {forecast.weather[0].description}</p>
              <p>Feels like : {forecast.main.feels_like}°C</p>
              <p>Humidity : {forecast.main.humidity}%</p>
              <p>Pressure : {forecast.main.pressure}</p>
              <p>Wind Speed : {forecast.wind.speed}m/s</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Weather;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// const Weather = ({ city }) => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
//       );
//       setWeatherData(response.data);
//     } catch (error) {
//       setError("Error fetching data. Please try again.");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [city]); // Fetch data whenever city changes

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           disabled // Disable input since city is provided as a prop
//         />
//         <button type="submit">Get Weather</button>
//       </form>
//       {loading ? (
//         <p>Loading weather data...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : weatherData ? (
//         <>
//           <h2>{weatherData.city.name}</h2>
//           {weatherData.list.map((forecast, index) => (
//             <div key={index}>
//               <p>Date: {forecast.dt_txt}</p>
//               <p>Temperature: {forecast.main.temp}°C</p>
//               <p>Description: {forecast.weather[0].description}</p>
//               <p>Feels like : {forecast.main.feels_like}°C</p>
//               <p>Humidity : {forecast.main.humidity}%</p>
//               <p>Pressure : {forecast.main.pressure}</p>
//               <p>Wind Speed : {forecast.wind.speed}m/s</p>
//             </div>
//           ))}
//         </>
//       ) : null}
//     </div>
//   );
// };

// export default Weather;
