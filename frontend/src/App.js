import React, {Component} from 'react';
// import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { AppRoutes } from './AppRoutes';
import {Router} from 'react-router-dom';
import './App.css';
import './css/tailwind.css';
import withRootTemplate from './withRootTemplate';
import { history } from './helpers/history';
import { Provider } from 'react-redux';
import { configureStore } from './helpers/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
const { persistor,store  } = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <ScrollToTop>
              <AppRoutes />
            </ScrollToTop>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
export default withRootTemplate(App);
