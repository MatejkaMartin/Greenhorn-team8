import React, { Component } from 'react';
import { Link } from '../atoms/Link';
import { Layout } from '../atoms/Layout';
import logo from '../../img/ghlogo.png';
import name from '../../img/ghname.png';

export class PageHeader extends Component {
  render() {
    return (
      <Layout className="m-3 p-3 bg-green-lighter rounded">
        <Link className="text-muted" to="/">
        <img src={logo} className="mr-3 w-12 h-auto" alt="logo"/>
        <img src={name} className="max-w-sm max-h-sm w-1/5 h-1/5" alt="logo"/>
        </Link>
      </Layout>
    );
  }
}
