import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LoginPage} from './components/pages/LoginPage';
import {FirstPage} from './components/pages/FirstPage';
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
  <Route path="/" exact="exact" component={LoginPage}/>
  <PrivateRoute path="/first" exact component={FirstPage}/>
  <Route path="*" component={PageNotFound} />
  <Route path="/dashboard" exact="exact" component={DashboardPage}/>
  <Route path="/tasks" exact="exact" component={TasksPage}/>
  <Route path="/people" exact="exact" component={PeoplePage}/>
  <Route path="/setting" exact="exact" component={SettingPage}/>
  <Route path="/createtask" exact="exact" component={CreateTaskPage}/>
  <Route path="/createemployee" exact="exact" component={CreateEmployeePage}/>
</Switch>);
