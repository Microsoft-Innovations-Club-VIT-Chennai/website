import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import NavbarComponent from './components/navbarComponent';
import options from './components/bodyCanvas.json';
import Particles from "react-tsparticles";
import TypingHome from './components/typingScript';
class App extends Component{
  render(){
    return(
      <Container fluid id="body-div">
        <NavbarComponent />
        <Particles
        id="tsparticles"
        options={options}
        />
        <div id="page-show" class="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-10">
            <img width="100%" height="100%" src="plum.svg"/>
          </div>
          <div className="col-lg-4 col-md-6 col-10 justify-content-center">
            <TypingHome/>
          </div>

        </div>
        </div>
        
        
        
      </Container>
    );
  }
}
export default App;
