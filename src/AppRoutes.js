import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LoginPage} from './components/pages/LoginPage';
import {HomePage} from './components/pages/HomePage';
import {TasksPage} from './components/pages/TasksPage';
import {PeoplePage} from './components/pages/PeoplePage';

export const AppRoutes = () => (<Switch>
  <Route path="/" exact="exact" component={LoginPage}/>
  <Route path="/home" exact="exact" component={HomePage}/>
  <Route path="/tasks" exact="exact" component={TasksPage}/>
  <Route path="/people" exact="exact" component={PeoplePage}/>
</Switch>
);
