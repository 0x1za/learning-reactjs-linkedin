import './App.css';

import React, { Component } from 'react';

import HomePage from './pages/homepage'
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
      </div>
    );
  }
}

export default App;
