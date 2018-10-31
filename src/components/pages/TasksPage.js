import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import {TasksTable} from '../molecules/TasksTable'
import ButtonCreate from '../molecules/ButtonCreate'

export class TasksPage extends Component {
  render() {
    return (
      <Layout className="tp-1">
        <NavigationBar className="Tasks" idmenu="1">
          <Layout className="tp-2">
            <ButtonCreate title="creat a new task"/>
            <TasksTable/>
          </Layout>
        </NavigationBar>
      </Layout>);
    }
  }
