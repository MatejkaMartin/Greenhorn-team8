import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LoginPage} from './components/pages/LoginPage';
import {FirstPage} from './components/pages/FirstPage';
import {PageNotFound} from './components/pages/PageNotFound';
import {PrivateRoute} from './components/organisms/PrivateRoute';

export const AppRoutes = () => (
<Switch>
  <Route path="/" exact component={LoginPage}/>
  <PrivateRoute path="/first" exact component={FirstPage}/>
  <Route path="*" component={PageNotFound} />
</Switch>);
