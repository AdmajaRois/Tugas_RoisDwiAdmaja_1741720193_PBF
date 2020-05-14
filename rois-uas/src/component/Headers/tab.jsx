import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

const Tab =()=>{
    return(
        <div>
            <Nav>
                <NavItem>
                    <NavLink href="/video">Video & Animation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/software">Software Development</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/graphic">Graphic & Design</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/writer">Writing & Translation</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/audio">Music & Audio</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Tab;