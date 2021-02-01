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
  url: 'id',
};

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      webData: webData
    };
  }
  getData(){
    var self=this
    axios(config)
    .then(function (response) {
      console.log(response.data)
      self.setState({webData: response.data})
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
        <section id="about">
          <div className="container-fluid">
            <About data={this.state.webData.data} />
          </div>
        </section>
        <section id="spotlight">
          <div className="spotlight container-fluid">
            <Spotlight data={this.state.webData.data} />
          </div>
        </section>
        <section id="events">
          <div className="container-fluid">
            <Events data={this.state.webData.data} />
          </div>
        </section>
        <section id="footer">
          <div className="container-fluid">
            <Footer />
          </div>
        </section>
        
      </Container>
    );
  }
}
export default App;
