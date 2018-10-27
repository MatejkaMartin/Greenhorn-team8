import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import {AppRoutes} from './AppRoutes';
import './App.css';
import './css/tailwind.css';
import withRootTemplate from './withRootTemplate';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="text-center">
        <BrowserRouter>
        <ScrollToTop>
        <AppRoutes/>
        </ScrollToTop>
        </BrowserRouter>
      </div>
    );
  }
}
// export default withRootTemplate(App);
export default withRootTemplate(App);
