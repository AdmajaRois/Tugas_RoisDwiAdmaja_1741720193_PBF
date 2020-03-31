import React from 'react';
import {MDBNavbar, 
        MDBContainer, 
        MDBNavbarBrand,
        MDBNavbarToggler,
        MDBCollapse,
        MDBNavItem,
        MDBNavLink,
        MDBNavbarNav} from 'mdbreact';


export default class Navbar extends React.Component {
    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID =>()=>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID: ''
        }));

    componentDidMount() {
        document.querySelector('nav').style.height = '65px';
    }

    componentWillUnmount(){
        document.querySelector('nav').style.height ='auto';
    }

    render() {
        const {collapseID} =this.state;
        const overlay = (
            <div 
            id='sidenav-overlay'
            style={{backgroundColor: 'transparent'}}
            onClick={this.toggleCollapse('navbarCollapse')}/>
        )
      return (
        <div>
        <MDBNavbar dark scrolling expand='md' fixed='top' color="peach-gradient">
        <MDBContainer>
          <MDBNavbarBrand>
            <span className='white-text'>MY WORLD</span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse('navbarCollapse')}
          />
          <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to='/home'>Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink link to='/blogpost'>
                  Post
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink link to='/todos'>
                  Todo
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
        </div>
      )
    };
}