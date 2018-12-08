import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import AdminGrid from '../molecules/AdminGrid'

export class AdminDashboard extends Component {
  render() {
    return (
      <Layout className="ad-1">
        <AdminGrid/>
      </Layout>);
  }
}

export default (AdminDashboard);
