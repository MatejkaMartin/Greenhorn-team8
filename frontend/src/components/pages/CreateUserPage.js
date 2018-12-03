import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import { EmployeeForm } from '../organisms/forms/EmployeeForm'
import { connect } from 'react-redux';
import { getUser } from '../../services/auth/reducer';
import {
getDepartments,
getRoles,
getJobPositions
} from '../../services/catalog/reducer';
import { fetchCatalogs } from '../../services/catalog/actions';

class CreateUserPage extends Component {

  componentDidMount() {
    this.props.fetchCatalogs();
  }

  render() {
    const { departments,jobPositions,roles  } = this.props;
    return (
          <Layout className="cep-2">
            <EmployeeForm departments= { departments } jobPositions= {jobPositions} roles = {roles}/>
          </Layout>
    );
  }
}

const mapStateToProps = state  => {
    const { authenticationReducer, catalogsReducer } = state
    return {
      user: getUser(authenticationReducer),
      departments: getDepartments(catalogsReducer),
      roles: getRoles(catalogsReducer),
      jobPositions: getJobPositions(catalogsReducer),
    };
}

const mapDispatchToProps = {
  fetchCatalogs,
};

const connectedCreateUserPage = connect(mapStateToProps,mapDispatchToProps)(CreateUserPage);
export { connectedCreateUserPage as CreateUserPage };
