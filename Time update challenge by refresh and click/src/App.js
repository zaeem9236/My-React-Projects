import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';




function App() {

  let timeStamp = new Date();
  let time = timeStamp.toLocaleTimeString();
  let [currentTime, updateTime] = useState(time);


  function timeUpdate() {
    timeStamp = new Date();
    time = timeStamp.toLocaleTimeString();
    updateTime(time);
  }

  return (
    <React.Fragment>
      <div className='mainDiv'>
        <div className="timeDisplay">
          <h3 className="time"> {currentTime} </h3>
        </div>
        <div className='buttonSection'>
        <button className='button' onClick={timeUpdate}>Time Update</button>
        </div>
      </div>
    </React.Fragment>
  );
}


export default App;