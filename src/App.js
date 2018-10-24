import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './css/tailwind.css';
import AppBar from '@material-ui/core/AppBar';
import withRootTemplate from './withRootTemplate';
import Checkbox from '@material-ui/core/Checkbox';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <AppBar> Login screen </AppBar>
        <header className="bg-green-lighter m-6 p-6 rounded shadow-lg">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white text-3xl">Welcome to Greenhorn!</h1>
        </header>
        <p className="text-base">
          To get started with login.
        </p>
        <button class="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
          Login
        </button>
        <Checkbox color="primary" />
      </div>
    );
  }
}
// export default withRootTemplate(App);
export default withRootTemplate(App);
