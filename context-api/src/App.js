import React from 'react';
import Parent from './Parent.js';
import State_handling from './State_handling.js';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <State_handling.Provider value={333}>
        <Parent></Parent>
      </State_handling.Provider>
    </React.Fragment>
  );
}

export default App;
