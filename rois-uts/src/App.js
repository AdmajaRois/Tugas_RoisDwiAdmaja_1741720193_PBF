import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './containers/Home';
import BlogPost from './containers/BlogPost';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/blogpost"><BlogPost/></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
