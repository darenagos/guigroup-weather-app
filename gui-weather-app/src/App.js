import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div class="base">

      <div class="main-photo">
        <div class="search-bar">
          <div class="search-logo"></div>
          <p class="search-text">search</p>
          <div class="line-img"></div>  {/*NEED HELP WITH THIS */}
        </div>
      </div>

      <div class="weather-table"></div>

      <div class="tip"></div>

      <div class="caution">
        <div class="heading-caution">
          <div class="caution-logo1"></div>
          <p class="caution-heading-text">Caution</p>
          <div class="caution-logo2"></div>
        </div>
      </div>

      <button type="button" class="tip-button">Tips</button>

      <div class="map-position">MAP API</div>
    </div>
  )
}

export default App;
