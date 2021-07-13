import React from 'react';
import './styles/App.css';


// import { BrowserRouter, Router, Link } from "react-router-dom";

import Layout from './Comp/NavLayout';

class App extends React.Component {
  // constructor(){
  //   super();
  // }

  render(){
    return (
      <div className="App">
        <Layout/>
      </div>
    )
  }
}

export default App;
