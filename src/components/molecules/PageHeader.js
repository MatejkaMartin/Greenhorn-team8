import React, { Component } from 'react';
import { Link } from '../atoms/Link';
import { Layout } from '../atoms/Layout';
import logo from '../../ghlogo.png';
import name from '../../ghname.png';

export class PageHeader extends Component {
  render() {
    return (
      <Layout className="header">
        <Link className="navbar-brand text-muted" to="/">
        <img src={logo} className="App-logo" alt="logo" width="10%" height="10%"/>
        <img src={name} className="App-logo" alt="logo" width="40%" height="40%"/>
        </Link>
      </Layout>
    );
  }
}
