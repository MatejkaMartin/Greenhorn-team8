import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {LoginPage} from './components/pages/LoginPage';
import {DashboardPage} from './components/pages/DashboardPage';
import {TasksPage} from './components/pages/TasksPage';
import {PeoplePage} from './components/pages/PeoplePage';

export const AppRoutes = () => (<Switch>
  <Route path="/" exact="exact" component={LoginPage}/>
  <Route path="/dashboard" exact="exact" component={DashboardPage}/>
  <Route path="/tasks" exact="exact" component={TasksPage}/>
  <Route path="/people" exact="exact" component={PeoplePage}/>
</Switch>
);
