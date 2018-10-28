import React, {Component} from 'react';
import {Layout} from '../atoms/Layout';
import NavigationBar from '../molecules/NavigationBar'

export class FirstPage extends Component {
  render() {
    return (
      <Layout>
        <div>
          <NavigationBar />
        </div>
      </Layout>);
  }
}
