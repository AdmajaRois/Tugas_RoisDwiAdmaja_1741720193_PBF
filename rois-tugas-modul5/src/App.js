import React from 'react';
import './App.css';
import Home from './container/Home';
import {BrowserRouter as Router,
  Switch,
  Route}  from 'react-router-dom';
import Navbar from './container/Navbar';
import About from './container/About';
import Products from './container/Product';


function App() {
  return (
    <div id="minimalistintro">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/products"><Products/></Route>
          <Route path="/about"><About/></Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
