import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import { TaskForm } from '../organisms/forms/TaskForm'

export class CreateTaskPage extends Component {

  render() {
    return (
          <Layout className="ctp-2">
            <TaskForm/>
          </Layout>
    );
  }
}
