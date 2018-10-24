import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import {LoginPage} from './components/pages/LoginPage'
import {AppRoutes} from './AppRoutes';
import './App.css';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <ScrollToTop>
        <AppRoutes/>
      </ScrollToTop>
    </BrowserRouter>);
  }
}
export default App;
