import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      loggedin: false,
    }
  }


  render(){
    
    return(
      <div>
        <section className="section">
          <div className="tile is-child notification is-primary">
            <div className="container">
              <h1 className="title">
                Welcome to Spencer's Personal Website!
              </h1>
              <p className="subtitle">
                Fuck Bitch <strong>Whore</strong>
              </p>
            </div>
          </div>
        </section>

      </div>
    );
  }
} 


export default Header;
