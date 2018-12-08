import React, { Component } from 'react'
import { Layout } from '../atoms/Layout'
import AdminDashboard from '../organisms/AdminDashboard'
import { connect } from 'react-redux'
import { getUser } from '../../services/auth/reducer'
import EmployeeTaskGrid from '../molecules/EmpTaskGrid'
import {TasksTable} from '../molecules/TasksTable'

class DashboardPage extends Component {
  render() {
    const {user} = this.props;
    return (
          <Layout className="dp-1">
          <EmployeeTaskGrid/>
          <TasksTable/>
          </Layout>
    );
  }
}

const mapStateToProps = state  => {
    const { authenticationReducer } = state
    return {
      user: getUser(authenticationReducer)
    };
}

const connectedDashboardPage = connect(mapStateToProps)(DashboardPage);
export { connectedDashboardPage as DashboardPage };
