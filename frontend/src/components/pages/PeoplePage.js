import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import PeopleList from '../molecules/PeopleList'
import ButtonCreate from '../molecules/ButtonCreate'
import api from '../../api';
import { connect } from 'react-redux';
import { getUser } from '../../reducers/authentication.reducer';

class PeoplePage extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople() {
    api.get('people').then(response => {
      const { data } = response;
      this.setState({
        people: data.people
      });
    });
  }

  deletePerson = (id) => {
    api.delete('people/delete/'+ id)
    .then(
       this.setState({ people: this.state.people.filter(person => person.id !== id ) })
    )
  }

  render() {
    const { people } = this.state;
    const { user } = this.props;
    console.log(user)
    return (
          <Layout className="pp-2">
            { user.roleID === 2 && <ButtonCreate title="create a new employee"/> }
            <PeopleList people= { people } deletePerson={ this.deletePerson } user={ user } >
            </PeopleList>
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

const connectedPeoplePage = connect(mapStateToProps)(PeoplePage);
export { connectedPeoplePage as PeoplePage };
