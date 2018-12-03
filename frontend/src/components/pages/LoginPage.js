import React, {Component} from 'react';
import { LoginForm } from '../organisms/forms/LoginForm';
import { Layout } from '../atoms/Layout';
import Logo from '../atoms/Logo';

export class LoginPage extends Component {
 render() {
  return (
   <Layout className="lp-1">
      <Logo/>
      <LoginForm />
   </Layout>
  );
  }
}
