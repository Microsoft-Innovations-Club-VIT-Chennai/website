import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

class navbarComponent extends Component{
    constructor(){
        super();
        this.state = {
            isOpen : false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return(
        <Navbar id="navbar" width="100%" dark expand="md">
            <NavbarBrand href="/">
                Microsoft Innovations Club
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#spotlight">Spotlight</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#footer">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/Microsoft-Innovations-Club-VIT-Chennai/">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        )
    }
    
}


export default navbarComponent;