import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../molecules/NavigationBar'
import TasksTable from '../molecules/TasksTable'

export class TasksPage extends Component {
  render() {
    return (<Layout className="fp-1">
      <NavigationBar className="Tasks" id="1"/>
      <TasksTable/>
    </Layout>);
  }
}
