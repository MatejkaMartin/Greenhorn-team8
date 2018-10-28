import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LoginPage} from './components/pages/LoginPage';
import {FirstPage} from './components/pages/FirstPage';

export const AppRoutes = () => (<Switch>
  <Route path="/" exact="exact" component={LoginPage}/>
  <Route path="/first" exact="exact" component={FirstPage}/>
</Switch>);
