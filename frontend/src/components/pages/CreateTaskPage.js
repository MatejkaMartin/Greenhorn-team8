import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import CreateTaskForm from '../molecules/CreateTaskForm'

export class CreateTaskPage extends Component {

  render() {
    return (
          <Layout className="ctp-2">
            <CreateTaskForm/>
          </Layout>
    );
  }
}
