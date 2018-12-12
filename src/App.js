import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ReduxDemo from './ReduxDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to simple Redux with <a href="http://sayantan.cf">Sayantan</a></h2>
        </header>
        <ReduxDemo />
      </div>
    );
  }
}

export default App;
