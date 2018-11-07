import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import EmployeeForm from '../molecules/EmployeeForm'

export class CreateEmployeePage extends Component {

  render() {
    return (
      <Layout className="cep-1">
        <NavigationBar className="Create an Employee" idmenu="2">
          <Layout className="cep-2">
            <EmployeeForm/>
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
