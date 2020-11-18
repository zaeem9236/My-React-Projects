import React, { useState, useEffect, useRef } from 'react';
import './App.css';



function App() {

  
  let [text, setText] = useState('');
  let inputField = useRef('');
  

    
  useEffect(() => {
    console.log('rendered ho gya hai')
      });

  return (
    <div className="App">
      <input  ref={inputField} onChange={(e)=>{
          console.log(e.target.value);
          setText(e.target.value);
      }} />
      <button onClick={()=>{inputField.current.focus()}}>click to focus</button>
      <h4>I write: {text}</h4>
      <hr />

    </div>
  );
}

export default App;
