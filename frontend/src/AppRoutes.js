import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage} from './components/pages/LoginPage';
import {PageNotFound} from './components/pages/PageNotFound';
import {PrivateRoute} from './components/organisms/PrivateRoute';
import {DashboardPage} from './components/pages/DashboardPage';
import {TasksPage} from './components/pages/TasksPage';
import {PeoplePage} from './components/pages/PeoplePage';
import {SettingPage} from './components/pages/SettingPage';
import {CreateTaskPage} from './components/pages/CreateTaskPage';
import {CreateEmployeePage} from './components/pages/CreateEmployeePage';

export const AppRoutes = () => (
<Switch>
  <Route path="/" exact component={LoginPage}/>
  <PrivateRoute path="/dashboard" exact component={DashboardPage}/>
  <PrivateRoute path="/tasks" exact component={TasksPage}/>
  <PrivateRoute path="/people" exact component={PeoplePage}/>
  <PrivateRoute path="/setting" exact component={SettingPage}/>
  <PrivateRoute path="/tasks/add" exact component={CreateTaskPage}/>
  <PrivateRoute path="/people/add" exact component={CreateEmployeePage}/>
  <Route path="*" component={PageNotFound} />
</Switch>);
