import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import { TasksTable }  from '../molecules/TasksTable'
import ButtonCreate from '../molecules/ButtonCreate'


export class TasksPage extends Component {
  render() {
    return (
      <Layout className="tp-2">
        <ButtonCreate title="new task" redirectTo="/tasks/add"/>
        <ButtonCreate title="new template" redirectTo="/template/add"/>
        <ButtonCreate title="Assign template" redirectTo="/template/assign"/>
        <TasksTable/>
      </Layout>);
  }
}
