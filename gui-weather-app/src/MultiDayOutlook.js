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
      console.log(weatherData)
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
      {weatherData ? (
          <>
            <div className="weather-table grid-container-multiDayOutlook">
              {/* Days */}
              
              <div className="grid-border-bottom grid-border-side">{new Date((weatherData.list[0].dt * 1000)).toDateString().substring(0, 3)}</div>
              <div className="grid-border-bottom grid-border-side">{new Date((weatherData.list[8].dt * 1000)).toDateString().substring(0, 3)}</div>
              <div className="grid-border-bottom grid-border-side">{new Date((weatherData.list[16].dt * 1000)).toDateString().substring(0, 3)}</div>
              <div className="grid-border-bottom grid-border-side">{new Date((weatherData.list[24].dt * 1000)).toDateString().substring(0, 3)}</div>
              <div className="grid-border-bottom grid-border-side">{new Date((weatherData.list[32].dt * 1000)).toDateString().substring(0, 3)}</div>
              <div className="grid-border-bottom grid-border-side">{new Date((weatherData.list[39].dt * 1000)).toDateString().substring(0, 3)}</div>
              
              {/* weathericons */}
              <div className="grid-border-side"><img class="table_image" src={"https://openweathermap.org/img/wn/"+ weatherData.list[0].weather[0].icon +"@2x.png"}/></div> {/* << placeholder */}
              <div className="grid-border-side"><img class="table_image" src={"https://openweathermap.org/img/wn/"+ weatherData.list[8].weather[0].icon +"@2x.png"}/></div>
              <div className="grid-border-side"><img class="table_image" src={"https://openweathermap.org/img/wn/"+ weatherData.list[16].weather[0].icon +"@2x.png"}/></div>
              <div className="grid-border-side"><img class="table_image" src={"https://openweathermap.org/img/wn/"+ weatherData.list[24].weather[0].icon +"@2x.png"}/></div>
              <div className="grid-border-side"><img class="table_image" src={"https://openweathermap.org/img/wn/"+ weatherData.list[32].weather[0].icon +"@2x.png"}/></div>
              <div className="grid-border-side"><img class="table_image" src={"https://openweathermap.org/img/wn/"+ weatherData.list[39].weather[0].icon +"@2x.png"}/></div>
              
              
              {/* temperature */}
              <div className="grid-border-side">{weatherData.list[0].main.temp.toFixed(0)}°</div>
              <div className="grid-border-side">{weatherData.list[8].main.temp.toFixed(0)}°</div>
              <div className="grid-border-side">{weatherData.list[16].main.temp.toFixed(0)}°</div>
              <div className="grid-border-side">{weatherData.list[24].main.temp.toFixed(0)}°</div>
              <div className="grid-border-side">{weatherData.list[32].main.temp.toFixed(0)}°</div>
              <div className="grid-border-side">{weatherData.list[39].main.temp.toFixed(0)}°</div>
            
            </div>
          </>
          
        ) : (
            <>
            <div className="weather-table grid-container-multiDayOutlook">
              {/* Days */}
              
              <div className="grid-border-bottom grid-border-side"></div>
              <div className="grid-border-bottom grid-border-side"></div>
              <div className="grid-border-bottom grid-border-side"></div>
              <div className="grid-border-bottom grid-border-side"></div>
              <div className="grid-border-bottom grid-border-side"></div>
              <div className="grid-border-bottom grid-border-side"></div>
              
              {/* weathericons */}
              <div className="grid-border-side"></div> {/* << placeholder */}
              <div className="grid-border-side"></div> {/* << placeholder */}
              <div className="grid-border-side"></div> {/* << placeholder */}
              <div className="grid-border-side"></div> {/* << placeholder */}
              <div className="grid-border-side"></div> {/* << placeholder */}
              <div className="grid-border-side"></div> {/* << placeholder */}
              
              {/* temperature */}
              <div className="grid-border-side"></div>
              <div className="grid-border-side"></div>
              <div className="grid-border-side"></div>
              <div className="grid-border-side"></div>
              <div className="grid-border-side"></div>
            
            </div>
            </>
          )}

          <Caution city={city}/>
    </>
  );
}

// function ({ weatherData }) {
//   // Function to get the next six days
//   const getNextSixDays = () => {
//     const currentDate = new Date();
//     const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const nextSixDays = Array.from({ length: 7 }, (_, i) => {
//       const date = new Date();
//       date.setDate(currentDate.getDate() + i);
//       return date;
//     });
//     return nextSixDays.map((date) => weekdays[date.getDay()]);
//   };

//   return (
//     <div className="weather-table grid-container-multiDayOutlook">
//       {/* days */}
//       {getNextSixDays().map((day, index) => (
//         <div key={index} className="grid-border-bottom grid-border-side">
//           {index === 0 ? "Today" : day}
//           {weatherData && weatherData.main.temp}
//         </div>
//       ))}
//       {/* weathericons */}

//       {/* Use weatherData to fill in weather icons */}
//       {/* chance of rain */}
//       {/* Use weatherData to fill in chance of rain */}
//       {/* high low temperature */}
//       {/* Use weatherData to fill in high and low temperatures */}
//     </div>
//   );
// }

export default MultiDayOutlook;