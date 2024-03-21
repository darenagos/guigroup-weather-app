import React from "react";
import "./App.css";

function Popup(props) {
  // Check if the trigger prop is true
  return props.trigger ? (
    // If trigger is true, render the popup
    <div className="popup">
      <div className="translucent-bg"></div>
      <div className="popup-inner">
        <div className="popup-heading">
          <div className="tips-heading">Tips</div>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X {/* Close button text */}
          </button>
        </div>
        <hr></hr> {/* Horizontal line separator */}
        {props.children} {/* Render children components */}
      </div>
    </div>
  ) : (
    // If trigger is false, render nothing
    ""
  );
}

export default Popup;
