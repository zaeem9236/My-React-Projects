import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <h1>Challenge Get Time on Refreshing and Clicking Button</h1>
    <App></App>
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
