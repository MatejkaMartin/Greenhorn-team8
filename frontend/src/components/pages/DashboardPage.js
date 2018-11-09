import React, { Component } from 'react'
import { Layout } from '../atoms/Layout'
import Table from '../atoms/Table'
import GridList from '../atoms/GridList'
import { getUser } from '../../reducers/authentication.reducer';
import { connect } from 'react-redux';

class DashboardPage extends Component {
  render() {
    return (
          <Layout className="dp-2">
            <GridList/>
            <Table/>
          </Layout>
    );
  }
}

const mapStateToProps = state  => {
    const { authentication } = state
    return {
      user: getUser(authentication)
    };
}

const connectedDashboardPage = connect(mapStateToProps)(DashboardPage);
export {connectedDashboardPage as DashboardPage} ;
