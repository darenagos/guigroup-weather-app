// import "./pictureDisplayInformation.css";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SearchBar from "../searchBar/searchBar";

// function PicureDisplayInformation() {
//   // const [city, setCity] = useState("");
//   const [weatherData, setWeatherData] = useState(null);
//   const fetchData = async (city) => {
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
//     // Fetch initial weather data for a default city or leave it empty
//     fetchData("");
//   }, []);

//   return (
//     <div>
//       <div className="main-photo">
//         <div className="grid-container-todaysWeather">
//           {/* search bar section */}
//           <SearchBar onSubmit={fetchData} />
//           {/* sunrise - sunset section */}

//           <div>
//             <div className="flex-sunrise">
//               <div className="sunrise-logo">{/* <img src={sunrise} /> */}</div>
//               <div className="sunrise-time">
//                 {weatherData && weatherData.sys && weatherData.sys.sunrise
//                   ? new Date(
//                       weatherData.sys.sunrise * 1000
//                     ).toLocaleTimeString()
//                   : "Loading..."}
//               </div>
//             </div>
//             <div className="flex-sunset">
//               <div className="sunset-logo">{/* <img src={sunset} /> */}</div>
//               <div className="sunset-time">
//                 {weatherData && weatherData.sys && weatherData.sys.sunset
//                   ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()
//                   : "Loading..."}
//               </div>
//             </div>
//           </div>
//           {/* today temp section*/}
//           {/* <div className="condition-icon"></div>
//           <div className="temperature">{weatherData.main.temp}°C</div> */}
//           {weatherData && (
//             <>
//               <div className="condition-icon"></div>
//               <div className="temperature">{weatherData.main.temp}°C</div>

//               {/* high low wind section */}

//               <div>
//                 <div className="high-low">
//                   min temp:{weatherData.main.temp_min} max temp:
//                   {weatherData.main.temp_max}
//                 </div>
//                 <div className="flex-precipitation">
//                   <div className="precipitation-icon">
//                     {/* <img src={drop} /> */}
//                   </div>
//                   <div className="precipitation">
//                     precipitation: {weatherData.precipitation}
//                   </div>
//                 </div>
//                 <div className="flex-wind">
//                   <div className="windspeed-icon">
//                     {/* <img src={wind} /> */}
//                   </div>
//                   <div className="wind-speed">
//                     wind speed: {weatherData.wind.speed}
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//           <div></div>
//           <div className="location grid-col-span-2">
//             {weatherData && weatherData.name ? weatherData.name : "Loading..."}
//           </div>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }

// export default PicureDisplayInformation;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../searchBar/searchBar";
import MultiDayOutlook from "../multiDayOutlook/multiDayOutlook";

function WeatherDisplay({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async (city) => {
    // Define fetchData function here
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch weather data only when the city changes
    if (city) {
      fetchData(city); // Call fetchData function with the city parameter
    }
  }, [city]); // Execute useEffect whenever the city changes

  // multiple day outlook

  // Render weather data
  return (
    <div>
      <div className="main-photo">
        <div className="grid-container-todaysWeather">
          {/* sunrise - sunset section */}

          <div>
            <div className="flex-sunrise">
              <div className="sunrise-logo">{/* <img src={sunrise} /> */}</div>
              <div className="sunrise-time">
                sunrise:{" "}
                {weatherData && weatherData.sys && weatherData.sys.sunrise
                  ? new Date(
                      weatherData.sys.sunrise * 1000
                    ).toLocaleTimeString()
                  : "Loading..."}
              </div>
            </div>
            <div className="flex-sunset">
              <div className="sunset-logo">{/* <img src={sunset} /> */}</div>
              <div className="sunset-time">
                sunset:{" "}
                {weatherData && weatherData.sys && weatherData.sys.sunset
                  ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()
                  : "Loading..."}
              </div>
            </div>
          </div>
          {/* today temp section*/}
          {/* <div className="condition-icon"></div>*/}
          {weatherData && (
            <>
              <div className="condition-icon"></div>
              <div className="temperature">
                main temp: {weatherData.main.temp}°C
              </div>

              {/* high low wind section */}

              <div>
                <div className="high-low">
                  min temp:{weatherData.main.temp_min} max temp:
                  {weatherData.main.temp_max}
                </div>
                <div className="flex-precipitation">
                  <div className="precipitation-icon">
                    {/* <img src={drop} /> */}
                  </div>
                  <div className="precipitation">
                    precipitation: {weatherData.precipitation}
                  </div>
                </div>
                <div className="flex-wind">
                  <div className="windspeed-icon">
                    {/* <img src={wind} /> */}
                  </div>
                  <div className="wind-speed">
                    wind speed: {weatherData.wind.speed}
                  </div>
                </div>
              </div>
            </>
          )}
          <div></div>
          <div className="location grid-col-span-2">
            {weatherData && weatherData.name ? weatherData.name : "Loading..."}
          </div>
        </div>
        <div>
          <div>{/* <MultiDayOutlook weatherData={weatherData} /> */}</div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
