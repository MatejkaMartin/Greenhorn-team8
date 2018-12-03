import React, { Component } from 'react'
import { Layout } from '../atoms/Layout'
import Table from '../molecules/Table'
import GridList from '../molecules/GridList'

export class DashboardPage extends Component {
  render() {
    return (
          <Layout className="dp-2">
            <GridList/>
            <Table/>
          </Layout>
    );
  }
}
