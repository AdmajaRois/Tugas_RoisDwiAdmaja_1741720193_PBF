import React from 'react';
import './App.css';
import Home from './container/Home';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, useHistory, useLocation, useRouteMatch}  from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBNav, MDBNavLink, MDBNavItem } from "mdbreact";
import Navbar from './container/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/home"><Home/></Route>
     
      </Switch>
    </Router>
    
  );
}

export default App;
