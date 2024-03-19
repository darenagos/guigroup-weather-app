// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function MultiDayOutlook({ city }) {
//   const [weatherData, setWeatherData] = useState(null);

//   const fetchData = async (city) => {
//     // Define fetchData function here
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
//       );
//       setWeatherData(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     // Fetch weather data only when the city changes
//     if (city) {
//       fetchData(city); // Call fetchData function with the city parameter
//     }
//   }, [city]); // Execute useEffect whenever the city changes
//   return (
//     <div className="weather-table grid-container-multiDayOutlook">
//       {/* days */}
//       <div className="grid-border-bottom grid-border-side">Today </div>
//       <div className="grid-border-bottom grid-border-side">Tue</div>
//       <div className="grid-border-bottom grid-border-side">Wed</div>
//       <div className="grid-border-bottom grid-border-side">Thu</div>
//       <div className="grid-border-bottom grid-border-side">Fri</div>
//       <div className="grid-border-bottom grid-border-side">Sat</div>
//       <div className="grid-border-bottom">Sun</div>
//       {/* weathericons */}
//       <div className="grid-border-side">icon</div> {/* << placeholder */}
//       <div className="grid-border-side">icon</div>
//       <div className="grid-border-side">icon</div>
//       <div className="grid-border-side">icon</div>
//       <div className="grid-border-side">icon</div>
//       <div className="grid-border-side">icon</div>
//       <div>icon</div>
//       {/* chance of rain */}
//       <div className="grid-border-side">%COR</div>{" "}
//       {/* chance of rain placeholder*/}
//       <div className="grid-border-side">%COR</div>
//       <div className="grid-border-side">%COR</div>
//       <div className="grid-border-side">%COR</div>
//       <div className="grid-border-side">%COR</div>
//       <div className="grid-border-side">%COR</div>
//       <div>%COR</div>
//       {/* high low temperature */}
//       <div className="grid-border-side">HLtemp</div>{" "}
//       {/* High Low temp placeholder*/}
//       <div className="grid-border-side">HLtemp</div>
//       <div className="grid-border-side">HLtemp</div>
//       <div className="grid-border-side">HLtemp</div>
//       <div className="grid-border-side">HLtemp</div>
//       <div className="grid-border-side">HLtemp</div>
//       <div>HLtemp</div>
//     </div>
//   );
// }

// export default MultiDayOutlook;

import React, { useEffect, useState } from "react";
import axios from "axios";

function MultiDayOutlook({ weatherData }) {
  // Function to get the next six days
  const getNextSixDays = () => {
    const currentDate = new Date();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const nextSixDays = Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(currentDate.getDate() + i);
      return date;
    });
    return nextSixDays.map((date) => weekdays[date.getDay()]);
  };

  return (
    <div className="weather-table grid-container-multiDayOutlook">
      {/* days */}
      {getNextSixDays().map((day, index) => (
        <div key={index} className="grid-border-bottom grid-border-side">
          {index === 0 ? "Today" : day}
          {weatherData && weatherData.main.temp}
        </div>
      ))}
      {/* weathericons */}

      {/* Use weatherData to fill in weather icons */}
      {/* chance of rain */}
      {/* Use weatherData to fill in chance of rain */}
      {/* high low temperature */}
      {/* Use weatherData to fill in high and low temperatures */}
    </div>
  );
}

export default MultiDayOutlook;
