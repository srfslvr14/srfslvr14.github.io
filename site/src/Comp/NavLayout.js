import React from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

// import { Link } from "react-router";

class NavLayout extends React.Component{

  render(){
    return(
        <div>
            <nav className="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    Spencer Logo
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href="/">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/" > Home </a>
                        <a className="navbar-item" href="/About"> About </a>
                        <a className="navbar-item" href="/Projects"> Projects </a>
                        <a className="navbar-item" href="/Contact"> Contact </a>
                    </div>
                </div>
            </nav>

            {/* <Link to="/About"> React </Link> */}

            <Header />
            <Body/>
            <Footer/>
        </div>
    );
  }
} 


export default NavLayout;
