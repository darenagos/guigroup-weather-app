import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Popup from "./Popup-open";
import Map from "./mapLocation"



function Caution({ city }) {
    const [weatherData, setWeatherData] = useState(null);
    const [buttonPopup, setButtonPopup] = useState(false);
    const fetchData = async (city) => {
      // Define fetchData function here
      try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=65f64331dda942e2d576b14254f03406`
        );
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
                <div>
                    <div className="grid-container-imgTipsCaution">
                        <div className="tip-image grid-row-span-2"></div>
                        <div className="caution">
                        <div>
                            <div className="heading-caution">
                            <div className="caution-logo1"></div>
                            <p className="caution-heading-text">Caution</p>
                            <div className="caution-logo2"></div>
                            </div>
                            <div className="caution-text">
                            <div>{weatherData.weather[0].description}</div>
                            
                            </div>
                        </div>
                        </div>
                        <div>
                        <button type="button" className="tip-button" onClick={() => setButtonPopup(true)}>
                            Tips
                        </button>
                        </div>
                    </div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <p>test</p>
                    </Popup>
                </div>
            </>
            ) : (
            <>
                <div>
                    <div className="grid-container-imgTipsCaution">
                        <div className="tip-image grid-row-span-2"></div>
                        <div className="caution">
                        <div>
                            <div className="heading-caution">
                                <div className="caution-logo1"></div>
                                <p className="caution-heading-text">Caution</p>
                                <div className="caution-logo2"></div>
                            </div>
                            <div className="caution-text">
                            <div></div>
                            
                        </div>
                        </div>
                        </div>
                        <div>
                        <button type="button" className="tip-button" onClick={() => setButtonPopup(true)}>
                            Tips
                        </button>
                        </div>
                    </div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <p>test</p>
                    </Popup>
                </div>
            </>
        )}
    <Map city={city}/>
    </>
    

    
  );
}

export default Caution;