import React, {Component} from 'react';
import {LoginForm} from '../organisms/LoginForm';
import {PageHeader} from '../molecules/PageHeader';
import {PageFooter} from '../molecules/PageFooter';
import {Layout} from '../atoms/Layout';
import { Link } from '../atoms/Link';

export class LoginPage extends Component {
  render() {
    return (<Layout className="container">
      <PageHeader/>
      <hr/>
      <Layout className="login-page">
        <LoginForm/>
      </Layout>

      <Link className="btn" to="/admin">
        Login as admin
      </Link>
      <br/>
      <Link className="btn" to="/user">
        Login as user
      </Link>

      <hr/>
      <PageFooter/>
    </Layout>);
  }
}
