import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import TableSortable from '../atoms/TableSortable'

export class TasksTable extends Component {
  render() {
    return (
      <Layout className="tt-1">
        <TableSortable/>
      </Layout>
    );
  }
}
