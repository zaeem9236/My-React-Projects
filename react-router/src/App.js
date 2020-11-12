import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import './App.css';


function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Navbar />
        <h1>this will remain unchanged</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );

}
export default App;
