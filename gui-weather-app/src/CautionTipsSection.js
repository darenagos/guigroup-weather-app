import React, { useState, useEffect } from "react";
import "./App.css";
import Popup from "./Popup-open";

function Caution({ weatherData }, { city }) {
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
    switch (id) {
      case "01d":
      case "01n":
        return (
          <div>
            <div>➢Clear skies!</div>
            <div>➢Wear sunscreen</div>
            <div>➢Enjoy!</div>
          </div>
        );

      case "02d":
      case "02n":
        return (
          <div>
            <div>➢Few clouds</div>
            <div>➢Alright to hike</div>
            <div>➢Enjoy!</div>
          </div>
        );
      case "03d":
      case "03n":
        return (
          <div>
            <div>➢Few clouds</div>
            <div>➢Alright to hike</div>
            <div>➢Enjoy!</div>
          </div>
        );
      case "04d":
      case "04n":
        return (
          <div>
            <div>➢Few clouds</div>
            <div>➢Alright to hike</div>
            <div>➢Enjoy!</div>
          </div>
        );
      case "09d":
      case "09n":
        return (
          <div>
            <div>➢Light showers</div>
            <div>➢Slightly slippery</div>
            <div>➢get grippy shoes!</div>
          </div>
        );
      case "10d":
      case "10n":
        return (
          <div>
            <div>➢Showers</div>
            <div>➢Slippery</div>
            <div>➢Tread carefully</div>
          </div>
        );
      case "11d":
      case "11n":
        return (
          <div>
            <div>➢Thunder</div>
            <div>➢Dangerous </div>
            <div>➢DO NOT HIKE</div>
          </div>
        );
      case "13d":
      case "13n":
        return (
          <div>
            <div>➢Snow</div>
            <div>➢Tread Carefully </div>
            <div>➢Poor vision</div>
          </div>
        );
      case "50d":
      case "50n":
        return (
          <div>
            <div>➢Mist</div>
            <div>➢Tread Carefully </div>
            <div>➢Poor vision</div>
          </div>
        );
    }
  };

  const printTips = (temp) => {
    //4 tips for each threshold

    console.log(temp);

    if (temp <= 5) {
      console.log("less than 5");
      return (
        <div className="tips-writing">
          <p>
            1) Layer Up: Dress with insulating mid-layers, and a waterproof outer shell to stay warm and dry.
          </p>
          <p>
            2) Insulate Extremities: Wear gloves, a hat, and thick socks to protect your hands, head, and feet from frostbite.
          </p>
          <p>
            3) Stay Hydrated: Even in cold weather, dehydration is a risk. Drink plenty of water and warm beverages.
          </p>
          <p>4) Watch for Ice: Be cautious of icy patches on trails.</p>
        </div>
      );
    } else if (temp > 5 && temp <= 15) {
      console.log("between 5 and 15");
      return (
        <div className="tips-writing">
          <p>
            1) Dress in Layers: Opt for breathable clothing that can be easily
            adjusted as you warm up during the hike.
          </p>
          <p>
            2) Sun Protection: Apply sunscreen to shield yourself from UV rays,
            even on overcast days.
          </p>
          <p>
            3) Hydration and Snacks: Bring water and energy-rich snacks to
            maintain energy levels throughout the hike.
          </p>
          <p>4) Pace Yourself: Take breaks as needed to prevent overheating.</p>
        </div>
      );
    } else if (temp > 15 && temp <= 25) {
      console.log("between 15 and 25");
      return (
        <div className="tips-writing">
          <p>
            1) Hydration: Drink plenty of water before, during, and after the
            hike to prevent dehydration.
          </p>
          <p>
            2) Sun Safety: Wear a wide-brimmed hat, lightweight clothing with
            UPF protection, and reapply sunscreen regularly.
          </p>
          <p>3) Plan for Shade: Choose trails with ample shade.</p>
          <p>
            4) Time Your Hike: Opt for early morning or late afternoon hikes to
            avoid the peak heat of the day.
          </p>
        </div>
      );
    } else if (temp > 25 && temp <= 35) {
      console.log("between 25 and 35");
      return (
        <div className="tips-writing">
          <p>1) Hydration Strategy: Drink water consistently.</p>
          <p>
            2) Cool Off: Take breaks in shaded areas or near water sources to
            cool down.
          </p>
          <p>
            3) Lightweight Clothing: Choose breathable fabrics that allow for
            airflow and quick drying.
          </p>
          <p>
            4) Know Your Limits: Be prepared to shorten or postpone your hike if
            conditions become too extreme.
          </p>
        </div>
      );
    } else {
      console.log("above 35");
      return (
        <div className="tips-writing">
          <p>
            1) Hydration: Drink water consistently and consider electrolyte
            supplements to replace lost minerals through sweat.
          </p>
          <p>
            2) Cooling Breaks: Take breaks in shaded areas or near water sources
            to cool down.
          </p>
          <p>
            3) Lightweight Gear: Choose moisture-wicking, breathable fabrics for
            airflow and quick drying.
          </p>
          <p>4) Extreme condition: Be ready to shorten/postpone your hike.</p>
        </div>
      );
    }
  };

  return (
    <>
      {weatherData ? (
        <>
          <div>
            <div className="grid-container-imgTipsCaution">
              <div
                className="tip-image grid-row-span-2"
                style={tipImageStyle}
              ></div>
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
                  onClick={() => setButtonPopup(true)}
                >
                  Tips
                </button>
              </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              {weatherData && <div>{printTips(weatherData.main.temp)}</div>}
            </Popup>
          </div>
        </>
      ) : (
        <></>
      )}
      {/* <div>
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
        {weatherData &&
          <div>{printTips(weatherData.main.temp)}</div>
        }
      </Popup>
    </div> */}
    </>
  );
}

export default Caution;
