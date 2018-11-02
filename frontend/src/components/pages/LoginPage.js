
import React, {Component} from 'react';
import LoginForm from '../molecules/LoginForm';
import {Layout} from '../atoms/Layout';
import {Link} from '../atoms/Link';
import Logo from '../atoms/Logo';
import Typography from '@material-ui/core/Typography';
export class LoginPage extends Component {
 render() {
  return (
   <Layout className="lp-1">
    <Logo/>
     <LoginForm/>
     <Link class="no-underline" to="/dashboard"><Typography align="center">
      Login as Admin
     </Typography></Link>
   </Layout>
  );
 }
}
