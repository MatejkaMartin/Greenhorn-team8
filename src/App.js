import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import LoginButton from './components/LoginButton.js'
import withRoot from './withRoot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>This is GreenHorn!</p>
        </header>
        <LoginButton></LoginButton>
      </div>
    );
  }
}
export default withRoot(App);
