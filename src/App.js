import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { Title2, Text } from './theme.js';
import LoginButton from './components/LoginButton.js'
import styled from 'styled-components';
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
        <Title2>This is test </Title2>
        <Text color='#000000'> This is test of text color </Text>
      </div>
    );
  }
}
// export default withRootTemplate(App);
export default withRootTemplate(App);
