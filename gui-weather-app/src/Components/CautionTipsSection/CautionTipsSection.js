import React, { useState } from "react";
import "../../App.css";
import Popup from "../Popup-open";

function Caution() {
  // const[popup, setPop] =useState(false);
  // const handleClick=()=>{
  //   setPop(!popup);
  // }
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      {/* {popup ?
      <div className="Popup">
      HEY
    </div>
      :""} */}
      
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
          <button type="button" className="tip-button" onClick={() => setButtonPopup(true)}>
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
