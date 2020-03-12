import React from "react";
import {BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useParams, useHistory, useLocation, useRouteMatch}  from 'react-router-dom';
import { MDBNavItem, MDBNav, MDBNavLink } from "mdbreact";


const Navbar = () => {
    return(
        <MDBNav color="blue-gradient" className="justify-content-center">
            <MDBNavItem>
                <MDBNavLink className="white-text" active to="/"><b>MarketLokal</b></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="white-text" to="/home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="white-text" to="/product">Product</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink className="white-text" to="/about">About</MDBNavLink>
            </MDBNavItem>
      </MDBNav>
    )
}

export default Navbar;

