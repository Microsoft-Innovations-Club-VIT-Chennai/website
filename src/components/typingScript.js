import React, { Component } from 'react';

import Typing from 'react-typing-animation';

class TypingScript extends Component{
    render(){
        return(
          <div className="typing">
            <h1 className="display-4 typing-main"> Together</h1>
            <div className="typing-para">
            <Typing loop={true}>
              <span>We Learn</span>
              <Typing.Backspace count={9} delay={1000} />
              <span>We Grow</span>
              <Typing.Backspace count={7} delay={1000} />
            </Typing>
            </div>
          </div>
              
        )
    }
    
}


export default TypingScript;