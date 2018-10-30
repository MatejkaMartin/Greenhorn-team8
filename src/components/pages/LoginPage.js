import React, {Component} from 'react';
import {LoginForm} from '../organisms/LoginForm';
import {Layout} from '../atoms/Layout';

export class LoginPage extends Component {
  render() {
    return (
      <Layout class="flex items-center h-screen bg-grey-lightest">
        <Layout class="container mx-auto">
          <LoginForm/>
        </Layout>
      </Layout>
    );
  }
}
