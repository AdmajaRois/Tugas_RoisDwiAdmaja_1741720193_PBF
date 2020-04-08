import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Switch, Route } from 'react-router-dom';
import BlogPost from './container/BlogPost/BlogPost';
import Tugas from './container/Tugas/Tugas';

function App() {
  return (
  <div>
    <BlogPost/>
  </div>
  );
}

export default App;
