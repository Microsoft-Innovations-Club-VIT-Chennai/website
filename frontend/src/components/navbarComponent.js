import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
                Microsoft Innovations Club, VIT-C
            </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        )
    }
    
}


export default navbarComponent;