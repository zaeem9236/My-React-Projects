import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { selectVoltage, voltageUp, voltageDown } from './Redux/voltageSlice';
import { selectCurrent, currentUp, currentDown } from './Redux/currentSlice';


function App() {
  let dispatch = useDispatch();
  let voltage = useSelector(selectVoltage);
  let current = useSelector(selectCurrent);

  return (
    <div className="App">
      <div>
        <h1>Voltage:{voltage}</h1>

        <div>
          <button onClick={() => {
            dispatch(voltageUp())
          }}>+</button>
        </div>

        <div>
          <button onClick={() => {
            dispatch(voltageDown())
          }}>-</button>
        </div>
      </div>
     
     
      <div>
        <h1>Current:{current}</h1>

        <div>
          <button onClick={() => {
            dispatch(currentUp())
          }}>+</button>
        </div>

        <div>
          <button onClick={() => {
            dispatch(currentDown())
          }}>-</button>
        </div>
      </div>

    </div>

  );
}

export default App;
