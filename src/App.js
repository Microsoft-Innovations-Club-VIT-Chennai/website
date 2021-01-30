import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import NavbarComponent from './components/navbarComponent';
import options from './components/bodyCanvas.json';
import Particles from "react-tsparticles";
import TypingHome from './components/typingScript';
import Footer from './components/footerComponent';
import Events from './components/eventComponent.js'
import Spotlight from './components/spotlightComponent.js'
import About from './components/aboutComponent.js'
import axios from 'axios';
import webData from './webData.json';
var config = {
  method: 'get',
  url: 'URL for the webData',
};

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      webData: webData
    };
  }
  getData(){
    axios(config)
    .then(function (response) {
      this.setState({webData: response.data})
    })
    .catch(err =>{
      this.setState({webData: webData})
    })
  }
  componentDidMount(){
    this.getData();
  }
  render(){
    return(
      <Container fluid id="body-div">
        <div className="cover">
        <Particles
        id="tsparticles"
        options={options}
        />
        <NavbarComponent />
        <div id="page-show" className="row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-10">
            <img width="100%" height="100%" src="plum.svg"/>
          </div>
          <div className="col-lg-4 col-md-6 col-10 justify-content-center">
            <TypingHome/>
          </div>
        </div>
        </div>
        <div className="container-fluid">
          <About data={this.state.webData.data} />
        </div>
        <div className="container-fluid">
          <br/>
          <Spotlight data={this.state.webData.data} />
        </div>
        <div className="container-fluid">
          <Events data={this.state.webData.data} />
        </div>
        <div className="container-fluid">
        <Footer />
        </div>
        
      </Container>
    );
  }
}
export default App;
