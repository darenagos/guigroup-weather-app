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
