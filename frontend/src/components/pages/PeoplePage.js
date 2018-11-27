import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import PeopleList from '../molecules/PeopleList'
import ButtonCreate from '../molecules/ButtonCreate'
import {Link} from '../atoms/Link'
import api from '../../api';
import { getUser } from '../../reducers/authentication.reducer';
import { connect } from 'react-redux';

class PeoplePage extends Component {

  state = {
    people: []
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople() {
    api.get('people').then(response => {
      const {data} = response;
      this.setState({people: data.people});
    });
  }

  deletePerson = (id) => {
    api.delete('people/delete/' + id).then();
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    })
  }

  render() {
    const { user } = this.props;
    const { people } = this.state;

    return (
      <Layout className="pp-2">
        {user.roleID === 2 &&
          <Link to="/people/add" class="no-underline">
          <ButtonCreate title="create a new employee"/>
          </Link>}
        <PeopleList people={ people } deletePerson={ this.deletePerson } user={user}/>
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
export {connectedPeoplePage as PeoplePage} ;
