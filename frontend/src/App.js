import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import NavbarComponent from './components/navbarComponent';
import options from './components/bodyCanvas.json';
import Particles from "react-tsparticles";
import Typing from 'react-typing-animation';
class App extends Component{
  render(){
    return(
      <Container fluid id="body-div">
        <NavbarComponent />
        <Particles
        id="tsparticles"
        options={options}
        />
        <Typing loop={true}>
        <span>This span will get typed, then erased.</span>
        <Typing.Backspace count={38} />
        </Typing>
        <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-4 col-md-6 col-10">
            <img width="100%" height="100%" src="plum.svg"/>
          </div>
        </div>
        </div>
        
        
      </Container>
    );
  }
}
export default App;
