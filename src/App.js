import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import LoginButton from './components/LoginButton.js'
import AppBar from './components/AppBar.js'
import withRootTemplate from './withRootTemplate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>This is GreenHorn!</p>
        </header>
        <LoginButton> Login bitch</LoginButton>
      </div>
    );
  }
}
// export default withRootTemplate(App);
export default withRootTemplate(App);
