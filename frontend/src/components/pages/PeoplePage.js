import React, {Component} from 'react'
import { Layout } from '../atoms/Layout'
import PeopleList from '../molecules/PeopleList'
import ButtonCreate from '../molecules/ButtonCreate'
import { connect } from 'react-redux';
import { getUser } from '../../services/auth/reducer';

class PeoplePage extends Component {

  render() {

    const { user } = this.props;
    return (
          <Layout className="pp-2">
            { user.role === 'employee' && <ButtonCreate redirectTo="/users/add" title="new employee"/>}
            <PeopleList user={ user } >
            </PeopleList>
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

const connectedPeoplePage = connect(mapStateToProps)(PeoplePage);
export { connectedPeoplePage as PeoplePage };
