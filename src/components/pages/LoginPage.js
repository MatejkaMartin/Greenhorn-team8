import React, {Component} from 'react';
import LoginForm from '../molecules/LoginForm';
import {Layout} from '../atoms/Layout';
import {Link} from '../atoms/Link';

export class LoginPage extends Component {
  render() {
    return (
      <Layout className="lp-1">
          <LoginForm/>
          <Link class="no-underline" to="/dashboard">Go to Dashboard</Link>
      </Layout>
    );
  }
}
