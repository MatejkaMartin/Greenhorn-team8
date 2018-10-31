import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import {TasksTable} from '../molecules/TasksTable'

export class TasksPage extends Component {
  render() {
    return (
      <Layout className="tp-1">
        <NavigationBar className="Tasks" idmenu="1">
          <Layout className="tp-2">
            <TasksTable/>
          </Layout>
        </NavigationBar>
      </Layout>);
    }
  }
