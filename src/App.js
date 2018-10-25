import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './css/tailwind.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withRootTemplate from './withRootTemplate';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <AppBar className="bg-green">
          <Toolbar>
            <IconButton className="ml-3 mr-20" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography className="text-3xl" color="inherit">
              News
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="bg-green-lighter m-20 p-10 rounded shadow-lg">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="text-white text-3xl">Welcome to Greenhorn!</h1>
        </header>
        <p className="text-base">
          To get started with login.
        </p>
        <button className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded">
          Login
        </button>
        <Checkbox color="primary" />
      </div>
    );
  }
}
// export default withRootTemplate(App);
export default withRootTemplate(App);
