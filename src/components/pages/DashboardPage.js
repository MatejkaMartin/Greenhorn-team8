import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import Chart from '../atoms/Chart'
import Table from '../atoms/Table'
import NavigationBar from '../organisms/NavigationBar'

export class DashboardPage extends Component {
  render() {
    return (
      <Layout className="dp-1">
        <NavigationBar className="Dashboard" idmenu="0">
          <Layout className="dp-2">
            <Chart/>
            <Table/>
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
