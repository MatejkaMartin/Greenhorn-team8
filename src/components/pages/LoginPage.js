import React, {Component} from 'react';
import {LoginForm} from '../organisms/LoginForm';
import {PageHeader} from '../molecules/PageHeader';
import {PageFooter} from '../molecules/PageFooter';
import {Layout} from '../atoms/Layout';
import { Link } from '../atoms/Link';

export class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader/>
        <hr/>
        <Layout>
          <LoginForm/>
        </Layout>
        <Link to="/admin">
          Login as admin
        </Link>
        <br/>
        <Link to="/user">
          Login as user
        </Link>
        <hr/>
        <PageFooter/>
      </Layout>);
  }
}
