import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import {TasksTable} from '../molecules/TasksTable'
import ButtonCreate from '../molecules/ButtonCreate'
import {Link } from '../atoms/Link'

export class TasksPage extends Component {
  render() {
    return (
          <Layout className="tp-2">
            <Link to="/tasks/add" className="no-underline">
            <ButtonCreate title="creat a new task"/>
          </Link>
            <TasksTable/>
          </Layout>
);
    }
  }
