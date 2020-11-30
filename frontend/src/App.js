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
<<<<<<< HEAD
        <span>Hey There, We welcome you to Microsoft Innovations Club!</span>
=======
        <span>Hey, Welcome to Microsoft Innovations Club!</span>
>>>>>>> 454034bfeb46a054467d506ae33a07896f06d08b
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
