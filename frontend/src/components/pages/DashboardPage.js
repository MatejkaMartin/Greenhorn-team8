import React, { Component } from 'react'
import { Layout } from '../atoms/Layout'
import AdminDashboard from '../organisms/AdminDashboard'
import { connect } from 'react-redux'
import { getUser } from '../../services/auth/reducer'

class DashboardPage extends Component {
  render() {
    const {user} = this.props;
    return (
          <Layout className="dp-1">
            {user.role === 'admin' ?
            (<AdminDashboard user={user}/>)
            :
            (<h1>EmployeeDashboard</h1>)}
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
