import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'

export class CreateTaskPage extends Component {

  render() {
    return (
      <Layout className="pp-1">
        <NavigationBar className="Create a Task" idmenu="1">
          <Layout className="pp-2">
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
