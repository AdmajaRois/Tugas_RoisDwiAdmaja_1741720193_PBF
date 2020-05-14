import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from "./component/Login/Login";
import SignUp from "./component/Login/Signup";
import Home from "./component/Home/Home";
import InputPage from "./component/Input/Input";
import ProtectedRoute from "./ProtectedRoute";
// import './App.css';
import { connect } from 'react-redux';


function App(props) {
  const {isAuthenticated, isVerifying} = props;
  return (
    <div>
    <Switch>
      <ProtectedRoute exact path="/" component={Home} 
      isAuthenticated={isAuthenticated} 
      isVerifying={isVerifying}/>
      <Route path="/inputpage" component={InputPage}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
    </Switch>
    </div>
  );
}

function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isVerifying: state.auth.isVerifying
    }
}




export default connect(mapStateToProps)(App);
