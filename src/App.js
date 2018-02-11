import React, { Component } from 'react';

import Navbar from './component/navbar';
import Header from './component/header';
import About from './component/about';
import Portfolio from './component/portfolio';

class App extends Component {
  render() {
    return (
      <div className="App h100">
         <Navbar/>
         <Header/>
         <About/>
         <Portfolio/>
      </div>
    );
  }
}

export default App;

