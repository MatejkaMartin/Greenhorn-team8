import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import EmployeeForm from '../molecules/EmployeeForm'
import api from '../../api';

export class CreateEmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      jobPositions: [],
      roles: [],
    };
  }

  componentDidMount() {
    this.fetchCatalogs();
  }

  fetchCatalogs() {
    api.get('catalogs').then(response => {
      const { data } = response;
      this.setState({
        departments: data.departments,
        jobPositions: data.jobPositions,
        roles: data.roles
      });
    });
  }

  render() {
    const { departments,jobPositions,roles  } = this.state;
    return (
          <Layout className="cep-2">
            <EmployeeForm departments= { departments } jobPositions= {jobPositions} roles = {roles} />
          </Layout>
    );
  }
}
