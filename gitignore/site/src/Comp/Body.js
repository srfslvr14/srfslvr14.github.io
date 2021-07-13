import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBackspace } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faBackspace} />

import github_logo from './img/git_logo.png';
import fb_logo from './img/fb_logo.png';
import insta_logo from './img/insta_logo.png';
import twitter_logo from './img/twitter_logo.png';
import linkedin_logo from './img/linkedin_logo.png';

class Body extends React.Component{
  constructor(){
    super()
    this.state = {
      loggedin: false,
    }
    this.logbutton = this.logbutton.bind(this)
  }

  logbutton(){
    this.setState(prevState => {return{loggedin: !prevState.loggedin}})
  }

  render(){
    let buttonText = this.state.loggedin ? "Log Out" : "Log In"
    
    return (
      <div className="Body">

        <br/>
        {this.state.loggedin ? <h1>You are logged in</h1> : <h1>You are logged out</h1>}
        <button onClick={this.logbutton}>{buttonText}</button>
        <br/>
        <br/>
      
        <div>
          <a href="https://www.instagram.com/silverray14/" target="_blank" > 
            <img width="50" src={insta_logo} alt="github"/> 
          </a>
          <a href="https://www.facebook.com/spencer.fulgham/" target="_blank"> 
            <img width="50"src={fb_logo} alt="github"/> 
          </a>
          <a href="https://twitter.com/SilverRay_14" target="_blank"> 
            <img width="50" src={twitter_logo} alt="github"/> 
          </a>
          <a href="https://www.linkedin.com/in/spencer-fulgham-831971165/" target="_blank"> 
            <img width="50" src={linkedin_logo} alt="github"/> 
          </a>
          <a href="https://github.com/srfslvr14" target="_blank">
            <img width="150" src={github_logo} alt="github"/>
          </a>
        </div>
      </div>
    );
  }
}

export default Body;