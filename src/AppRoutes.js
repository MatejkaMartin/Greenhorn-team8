import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LoginPage} from './components/pages/LoginPage';

export const AppRoutes = () => (<Switch>
  <Route path="/" exact="exact" component={LoginPage}/>
</Switch>);
