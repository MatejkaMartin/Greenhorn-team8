import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import {TasksTable} from '../molecules/TasksTable'
import ButtonCreate from '../molecules/ButtonCreate'
import {Link } from '../atoms/Link'

export class TasksPage extends Component {
  render() {
    return (
          <Layout className="tp-2">
            <Link to="/tasks/add" class="no-underline">
            <ButtonCreate title="creat a new task"/>
          </Link>
            <TasksTable/>
          </Layout>
);
    }
  }
