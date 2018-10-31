import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'

export class CreateEmployeePage extends Component {

  render() {
    return (
      <Layout className="pp-1">
        <NavigationBar className="Create a Employee" idmenu="2">
          <Layout className="pp-2">
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
