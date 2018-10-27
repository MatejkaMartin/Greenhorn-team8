import React, {Component} from 'react';
import {PageHeader} from '../molecules/PageHeader';
import {PageFooter} from '../molecules/PageFooter';
import {Layout} from '../atoms/Layout';

export class AdminPage extends Component {
  render() {
    return (<Layout className="container">
      <PageHeader/>
      <hr/>
      <Layout className="login-page">
        <h1>Admin</h1>
      </Layout>
      <hr/>
      <PageFooter/>
    </Layout>);
  }
}
