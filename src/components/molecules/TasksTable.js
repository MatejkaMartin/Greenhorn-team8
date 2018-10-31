import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import Table from '../atoms/Table'

export class TasksTable extends Component {
  render() {
    return (
      <Layout className="tt-1">
        <Table/>
      </Layout>
    );
  }
}
