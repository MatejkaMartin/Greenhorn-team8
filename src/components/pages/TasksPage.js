import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../molecules/NavigationBar'

export class TasksPage extends Component {
  render() {
    return (
      <Layout className="fp-1">
        <NavigationBar className="Tasks" id="0" />
      </Layout>
    );
  }
}
