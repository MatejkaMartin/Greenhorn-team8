import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import Table from '../atoms/Table'
import GridList from '../atoms/GridList'
import NavigationBar from '../organisms/NavigationBar'

export class DashboardPage extends Component {
  render() {
    return (
      <Layout className="dp-1">
        <NavigationBar className="Dashboard" idmenu="0">
          <Layout className="dp-2">
            <GridList/>
            <Table/>
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
