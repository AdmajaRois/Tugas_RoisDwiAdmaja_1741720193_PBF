import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import BlogPost from './container/BlogPost/BlogPost';
import Tugas from './container/Tugas/Tugas';

function App() {
  return (
  <Router>
   <div>
    <nav className="navbar navbar-expand-sm bg-light hustify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/BlogPost'} className="nav-link">Praktikum</Link>
        </li>
        <li className="nav-item">
          <Link to={'/Tugas'} className="nav-link">Tugas</Link>
        </li>
      </ul>
    </nav>
    <hr />
    <Switch>
      <Route exact path='/BlogPost' component={BlogPost}/>
      <Route exact path='/Tugas' component={Tugas}/>
    </Switch>
   </div>
  </Router>
  );
}

export default App;
