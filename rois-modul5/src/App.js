import React from 'react';
import {BrowserRouter as Router,
        Switch,
        Route,
        Link, Redirect, useHistory, useLocation} from "react-router-dom";
// import {MDBNav, MDBNavLink, MDBCol, MDBContainer, MDBRow} from 'mdbreact';


export default function AuthExample() {
  return (
//     <Router>
//     <MDBContainer>
//         <MDBRow>
//             <MDBCol size="6">
//                 <MDBNav color="blue-gradient" className="font-weight-bold py-4 px-2 mb-4">
//                     <MDBNavLink className="white-text" active to="/"><b>MarketPlace</b></MDBNavLink>
//                     <MDBNavLink className="white-text" to="/">Home</MDBNavLink>
//                     <MDBNavLink className="white-text" to="/product">Product</MDBNavLink>
//                     <MDBNavLink className="white-text" to="/about">About</MDBNavLink>
//                 </MDBNav>
//             </MDBCol>
//         </MDBRow>
//     </MDBContainer>
// </Router>
    <Router>
        <div>
        <AuthButton />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/private">Product</Link></li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/"><PublicPage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <PrivateRoute path="/private"><ProtectedPage /></PrivateRoute>
        </Switch>
      </div>
    </Router>
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
    <p>
      Welcome!{" "}
      <button onClick={()=>{
        fakeAuth.signOut(()=>history.push("/"));
      }}>Sign Out</button>
    </p>
  ) : (
    <p>You're not logged in</p>
  );
}
function PrivateRoute({children, ...rest}) {
  return(
    <Route 
      {...rest}
      render={({ location })=>
        fakeAuth.isAuthenticated ? (
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
  );
}

function PublicPage() {
  return <h3>Public</h3>
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let {from} = location.state || {from: {pathname: "/"}};
  let login = () => {
    fakeAuth.authenticate(()=>{
      history.replace(from);
    });
  };
  return (
    <div>
      <p>you must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

