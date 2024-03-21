import React, { useState, useEffect } from "react";
import "../../App.css";
import Popup from "../Popup-open";


function Caution({weatherData}) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [tipImageStyle, setTipImageStyle] = useState({});

  useEffect(() => {
    const currentTime = new Date().getHours();

    // Define your thresholds for changing colors based on time of day
    const pinkThresholdStart = 12; // 12 PM
    const pinkThresholdEnd = 17; // 5 PM
    const blueThreshold = 17; // 5 PM

    // Calculate color based on current time
    let boxShadowColor;
    if (currentTime < pinkThresholdStart) {
      // Before 12 PM, set orange box shadow
      boxShadowColor = "rgba(255, 125, 0, 0.8)";
    } else if (
      currentTime >= pinkThresholdStart &&
      currentTime < pinkThresholdEnd
    ) {
      // Between 12 PM and 5 PM, set pink box shadow
      boxShadowColor = "rgba(255, 192, 203, 0.9)";
    } else {
      // After 5 PM, set blue box shadow
      boxShadowColor = "rgba(0, 51, 108, 0.8)";
    }

    console.log("Current Time:", currentTime);
    console.log("Box Shadow Color:", boxShadowColor);

    // Set the style for the tip image box shadow
    setTipImageStyle({ boxShadow: `0px 0px 40px ${boxShadowColor}` });
  }, []);

  // caution text for each condition
  const printCaution = (id) => {
    switch(id) {
      case "01d":
      case "01n":
        return <div>Clear weather</div>
      case "02d":
      case "02n":
        return <div>Few cloudy weather</div>
      case "03d":
      case "03n":
        return <div>scattered weather</div>
      case "04d":
      case "04n":
        return <div>broken cloudy weather</div>
      case "09d":
      case "09n":
        return <div>shower rain weather</div>
      case "10d":
      case "10n":
        return <div>rainy weather</div>
      case "11d":
      case "11n":
        return <div>thunderstorm weather</div>
      case "13d":
      case "13n":
        return <div>snow weather</div>
      case "50d":
      case "50n":
        return <div>mist weather</div>
    }
  } 

  return (
    <div>
      <div className="grid-container-imgTipsCaution">
        <div className="tip-image grid-row-span-2" style={tipImageStyle}></div>
        <div className="caution">
          <div>
            <div className="heading-caution">
              <div className="caution-logo1"></div>
              <p className="caution-heading-text">Caution</p>
              <div className="caution-logo2"></div>
            </div>
            <div className="caution-text">
              {weatherData && (
                <>
              {/* {weatherData.weather[0].description}
              <div>Test caution</div>
              <div>Test caution</div>
              <div>Test caution</div>
              <div>Test caution</div>
              <div>Test caution</div> */}
              <div>{printCaution(weatherData.weather[0].icon)}</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="tip-button"
            onClick={() => setButtonPopup(true)} >
            Tips
          </button>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      <div className="tips-writing">
        <p>1) Avoid midday heat: hike early morning or late afternoon</p>
        <p>2) Wear grippy shoes for Wales’ rocky terrain</p>
        <p>3) Avoid heavy foods in hot weather</p>
        <p>4) Insert random bs about more tips</p>
      </div>
      </Popup>
    </div>
  );
}

export default Caution;
