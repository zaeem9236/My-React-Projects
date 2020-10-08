import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';




function App() {

  let [currentCounter, updateCounter] = useState(0);


  function increase() {
    updateCounter(currentCounter + 1);
  }
  function decrease() {
    updateCounter(currentCounter - 1);
  }
  return (
    <React.Fragment>
      <div className='mainDiv'>
        <div className="counterDisplay">
          <h3 className="counter"> {currentCounter} </h3>
        </div>
        <div className='buttonSection'>
        <button className='button' onClick={increase}>Up</button>
        <button className='button' onClick={decrease}>Down</button>
        </div>
      </div>
    </React.Fragment>
  );
}


export default App;