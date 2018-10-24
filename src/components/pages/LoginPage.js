import React, {Component} from 'react';
import {LoginForm} from '../organisms/LoginForm';
import {PageHeader} from '../molecules/PageHeader';
import {PageFooter} from '../molecules/PageFooter';

export class LoginPage extends Component {
  render() {
    return (<div>
      <PageHeader/>
      <h2>Login</h2>
      <LoginForm></LoginForm>
      <PageFooter/>
    </div>);
  }
}
