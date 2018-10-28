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
        <hr/>
        <Layout>
          <LoginForm/>
        </Layout>
        <Link to="/first">
          LINK NA FIRST STRANKU PO UPRAVE SMAZAT
        </Link>
        <PageFooter/>
      </Layout>);
  }
}
