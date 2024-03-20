import React from 'react';
import "./../App.css";

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup" >
      <div className='translucent-bg'></div>
        <div className='popup-inner'>
          <div className='popup-heading'>
            <div className='tips-heading'>Tips</div>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        </div>
        <hr></hr>
          { props.children}
        </div>
    </div>
  ) : "";
}

export default Popup;