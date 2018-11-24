import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import {TasksTable} from '../molecules/TasksTable'
import ButtonCreate from '../molecules/ButtonCreate'
import {Link} from '../atoms/Link'

export class TasksPage extends Component {
  render() {
    return (<Layout className="taskpage">
      <Link to="/tasks/add" class="no-underline">
        <ButtonCreate title="creat a new task"/>
      </Link>
      <Layout className="taskstable">
        <TasksTable/>
      </Layout>
    </Layout>);
  }
}
