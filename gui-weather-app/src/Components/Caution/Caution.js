import React from "react";
import "../../App.css";

function Caution() {
  return (
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
          <button type="button" className="tip-button">
            Tips
          </button>
        </div>
      </div>
    </div>
  );
}

export default Caution;
