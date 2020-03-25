import React from "react";
import { MDBNavItem, MDBNavLink, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBContainer } from "mdbreact";
import AuthButton from '../App.js';

const Navbar = () => {
    return(
       <div>
            <MDBNavbar
            color="peach-gradient"
            dark
            expand="md"
            fixed="top"
            scrolling>
                <MDBContainer>
                    <MDBNavbarBrand>
                        <strong className="white-text">LokalPride</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarNav left>
                        <MDBNavItem >
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/products">Products</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about">About</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav> 
                    <MDBNavbarNav right>
                        <MDBNavItem>
                         
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
       </div>
    )
}

export default Navbar;

