import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LoginPage} from './components/pages/LoginPage';
import {AdminPage} from './components/pages/AdminPage';
import {UserPage} from './components/pages/UserPage';

export const AppRoutes = () => (<Switch>
  <Route path="/" exact="exact" component={LoginPage}/>
  <Route path="/admin" exact="exact" component={AdminPage}/>
  <Route path="/user" exact="exact" component={UserPage}/>
</Switch>);
