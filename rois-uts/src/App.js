import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Home from './containers/Home';
import BlogPost from './containers/BlogPost';
import {BrowserRouter as Router,Route, Switch, useHistory, Redirect, useLocation} from 'react-router-dom';
import { MDBBtn, MDBView, MDBMask, MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Background from './assets/background.jpg';

function App() {
  return (
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/login"><LoginPage/></Route>
        <PrivateRoute path="/blogpost"><BlogPost/></PrivateRoute>
      </Switch>
    </Router>
  </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticated(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated?(
    <p>Selamat datang{" "}
    <MDBBtn color="deep-orange" onClick={()=>{
      fakeAuth.signOut(()=>history.push("/"));
    }}>Sign Out</MDBBtn></p>
  ) :(
    <p>You are not logged in</p>
  )
}

function  PrivateRoute({children, ...rest}) {
  return(
    <Route 
      {...rest}
        render={({location})=>
          fakeAuth.isAuthenticated ?(
            children
          ):(
            <Redirect 
              to={{
                pathname: "/login",
                state: {form: location}
              }}
            />
          )
        }
      />
  )
}


function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || {from : {pathname:"/"}};
  let login =()=>{
      fakeAuth.authenticated(()=>{
        history.replace(from);
      })
  };

  return(
    <MDBView src={Background}>
         <MDBMask className="rgba-black-light" />
         <MDBContainer
            className="d-flex justify-content-center align-items-center"
            style={{height: "100%", width:"100%", paddingTop:"10rem"}}>
            <MDBRow>
                <MDBCol md="12" className="mb-4 white-text text-center">
                    <h1 className="h1-responsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5">
                        Anda Belum Login
                    </h1>
                    <hr className="hr-light my-4"/>
                    <h5 className="text-uppercase mb-4 white-text">
                        <strong>untuk membuat post anda harus login</strong>
                    </h5>
                    <MDBBtn color='deep-orange' onClick={login}>Login</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBView>
  );
}

export default App;
