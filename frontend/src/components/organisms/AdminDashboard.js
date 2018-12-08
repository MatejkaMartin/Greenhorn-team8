import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import EmployeeGrid from '../molecules/EmployeeGrid'

export class AdminDashboard extends Component {
  render() {
    return (
      <Layout className="ad-1">
        <EmployeeGrid/>
      </Layout>);
  }
}

export default (AdminDashboard);
