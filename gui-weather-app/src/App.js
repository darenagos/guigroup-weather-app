import logo from "./logo.svg";
import "./App.css";
import "./AppMediaQueries.css";
import React from "react";
import Weather from "./Weather";

import sunrise from "./assets/sunrise.png";
import sunset from "./assets/sunset.png";
import wind from "./assets/wind.png";
import drop from "./assets/drop.png";
import settings from "./assets/settings.png";

function App() {
  return (
    <div className="base">
      <div className="main-photo">
        <div className="grid-container-todaysWeather">
          {/* search bar section */}
          <div className="search-bar grid-col-span-4">
            <div className="flex-search">
              <div className="search-logo"></div>
              <p className="search-text">search</p>
            </div>
            <div className="settings-img">
              <img src={settings} width="38px" />
            </div>
          </div>

          {/* sunrise - sunset section */}
          <div>
            <div className="flex-sunrise">
              <div className="sunrise-logo">
                <img src={sunrise} />
              </div>
              <div className="sunrise-time">??:??</div>
            </div>
            <div className="flex-sunset">
              <div className="sunset-logo">
                <img src={sunset} />
              </div>
              <div className="sunset-time">??:??</div>
            </div>
          </div>
          {/* today temp section*/}
          <div className="condition-icon"></div>
          <div className="temperature">??°</div>
          {/* high low wind section */}
          <div>
            <div className="high-low">H:??°L:??°</div>
            <div className="flex-precipitation">
              <div className="precipitation-icon">
                <img src={drop} />
              </div>
              <div className="precipitation">?%</div>
            </div>
            <div className="flex-wind">
              <div className="windspeed-icon">
                <img src={wind} />
              </div>
              <div className="wind-speed">? mph</div>
            </div>
          </div>
          <div></div>
          <div className="location grid-col-span-2">Location</div>
          <div></div>
        </div>
      </div>

      {/* WEATHER TABLE >>> */}

      <div className="weather-table grid-container-multiDayOutlook">
        {/* days */}
        <div className="grid-border-bottom grid-border-side">Today</div>
        <div className="grid-border-bottom grid-border-side">Tue</div>
        <div className="grid-border-bottom grid-border-side">Wed</div>
        <div className="grid-border-bottom grid-border-side">Thu</div>
        <div className="grid-border-bottom grid-border-side">Fri</div>
        <div className="grid-border-bottom grid-border-side">Sat</div>
        <div className="grid-border-bottom">Sun</div>
        {/* weathericons */}
        <div className="grid-border-side">icon</div> {/* << placeholder */}
        <div className="grid-border-side">icon</div>
        <div className="grid-border-side">icon</div>
        <div className="grid-border-side">icon</div>
        <div className="grid-border-side">icon</div>
        <div className="grid-border-side">icon</div>
        <div>icon</div>
        {/* chance of rain */}
        <div className="grid-border-side">%COR</div>{" "}
        {/* chance of rain placeholder*/}
        <div className="grid-border-side">%COR</div>
        <div className="grid-border-side">%COR</div>
        <div className="grid-border-side">%COR</div>
        <div className="grid-border-side">%COR</div>
        <div className="grid-border-side">%COR</div>
        <div>%COR</div>
        {/* high low temperature */}
        <div className="grid-border-side">HLtemp</div>{" "}
        {/* High Low temp placeholder*/}
        <div className="grid-border-side">HLtemp</div>
        <div className="grid-border-side">HLtemp</div>
        <div className="grid-border-side">HLtemp</div>
        <div className="grid-border-side">HLtemp</div>
        <div className="grid-border-side">HLtemp</div>
        <div>HLtemp</div>
      </div>

      {/* image caution and tips  */}
      <div className="grid-container-imgTipsCaution">
        <div className="tip-image grid-row-span-2"></div>
        <div className="caution">
          <div className="heading-caution">
            <div className="caution-logo1"></div>
            <p className="caution-heading-text">Caution</p>
            <div className="caution-logo2"></div>
          </div>
        </div>
        <div>
          <button type="button" className="tip-button">
            Tips
          </button>
        </div>
      </div>

      <div className="map-position">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.986603227164!2d-5.107360482956925!3d56.82032559835092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48893323371c031b%3A0xcda03ee308544821!2sFort%20William!5e0!3m2!1sen!2suk!4v1710149794265!5m2!1sen!2suk"></iframe>
      </div>
    </div>
  );
}

export default App;
