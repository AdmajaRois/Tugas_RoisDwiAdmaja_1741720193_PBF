import React from 'react';
import './App.css';
import Home from './container/Home';
import {BrowserRouter as Router,
  Switch,
  Route, useHistory, Redirect, useLocation}  from 'react-router-dom';
import Navbar from './container/Navbar';
import About from './container/About';
import Products from './container/Product';
import Background from './container/background.jpg';
import { MDBContainer, MDBNav, MDBView, MDBBtn, MDBMask, MDBRow, MDBCol, MDBNavItem} from 'mdbreact';


export default function App() {
  return (
    <div id="minimalistintro">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/home"><Home/></Route>
          <Route path="/login"><LoginPage/></Route>
          <PrivateRoute path="/products"><Products/></PrivateRoute>
          <Route path="/about"><About/></Route>
        </Switch>
      </Router>
    </div>
    
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
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

  return fakeAuth.isAuthenticated ? (
    // <MDBNav className="justify-content-center">
    //   <MDBNavItem>
          <p>Selamat Datang{" "}
            <MDBBtn color="deep-orange" onClick={()=>{
              fakeAuth.signOut(()=>history.push("/"));
            }}>Sign Out</MDBBtn></p>
    //   </MDBNavItem>
    // </MDBNav>
  ) : (
      <p>You are not logged in.</p>
  );
}

function PrivateRoute({children, ...rest}) {
  return(
      <Route 
          {...rest}
          render={({ location })=>
              fakeAuth.isAuthenticated ?(
                  children
              ):(
                  <Redirect
                      to={{
                          pathname: "/login",
                          state: {from: location}
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
      fakeAuth.authenticate(()=>{
          history.replace(from);
      });
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
                        <strong>untuk melihat produk kami anda harus login</strong>
                    </h5>
                    <MDBBtn color='deep-orange' onClick={login}>Login</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBView>
  );
}

export {AuthButton} ;