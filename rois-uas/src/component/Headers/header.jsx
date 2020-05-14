import React , {Component, useState} from 'react';
import logo from '../../image/makaryo192-black.png';
import { logoutUser } from "../../actions/auth";
import {Link} from 'react-router-dom';
import {Navbar, Nav , Button, Form} from 'react-bootstrap';
import { connect } from "react-redux";

class Header extends Component {

    

    handleLogout = () => {
      const { dispatch } = this.props;
      dispatch(logoutUser());
    };


    

  render() {
    const { isLoggingOut, logoutError } = this.props; 
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" width="40"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Button variant="danger" onClick={this.handleLogout}>Logout</Button>
                    {isLoggingOut && <p>Logging Out....</p>}
                    {logoutError && <p>Error logging out</p>}
          </Navbar.Collapse> 
        </Navbar>
      </div>
    )
  };
}
function mapStateToProps(state) {
  return {
      isLoggingOut: state.auth.isLoggingOut,
      logoutError: state.auth.logoutError
  };
}
export default connect(mapStateToProps)(Header);