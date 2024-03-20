import React, { useState, useEffect } from "react";
import "../../App.css";
import Popup from "../Popup-open";

function Caution() {
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
              <div>fdsjksd</div>
              <div>fjhdaskj</div>
              <div>fjwehia</div>
              <div>fdsjksd</div>
              <div>fjhdaskj</div>
              <div>fjwehia</div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="tip-button"
            onClick={() => setButtonPopup(true)}
          >
            Tips
          </button>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p>test</p>
      </Popup>
    </div>
  );
}

export default Caution;
