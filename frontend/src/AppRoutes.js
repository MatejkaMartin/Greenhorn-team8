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
import {CreateTemplatePage} from './components/pages/CreateTemplatePage';
import {CreateUserPage} from './components/pages/CreateUserPage';
import {SetPasswordPage} from './components/pages/SetPasswordPage';
import {AssignTemplatePage} from './components/pages/AssignTemplatePage';
import {TemplatePage} from './components/pages/TemplatePage';

export const AppRoutes = () => (
<Switch>
  <Route path="/" exact component={LoginPage}/>
  <Route path="/setPassword/:token" exact component={SetPasswordPage}/>
  <PrivateRoute path="/dashboard" exact component={DashboardPage}/>
  <PrivateRoute path="/tasks" exact component={TasksPage}/>
  <PrivateRoute path="/templates" exact component={TemplatePage}/>
  <PrivateRoute path="/people" exact component={PeoplePage}/>
  <PrivateRoute path="/setting" exact component={SettingPage}/>
  <PrivateRoute path="/tasks/add" exact component={CreateTaskPage}/>
  <PrivateRoute path="/template/add" exact component={CreateTemplatePage}/>
  <PrivateRoute path="/template/assign" exact component={AssignTemplatePage}/>
  <PrivateRoute path="/users/add" exact component={CreateUserPage}/>
  <Route path="*" component={PageNotFound} />
</Switch>);
