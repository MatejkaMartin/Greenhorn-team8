import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import EmpGrid from '../molecules/EmpGrid'

export class EmpDashboard extends Component {
  render() {
    const {user} = this.props;
    return (
      <Layout className="ad-1">
        <EmpGrid user={user}/>
      </Layout>);
  }
}

export default (EmpDashboard);
