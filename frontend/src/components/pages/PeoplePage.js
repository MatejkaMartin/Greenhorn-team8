import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import PeopleCard from '../molecules/PeopleCard'
import ButtonCreate from '../molecules/ButtonCreate'
import {Link } from '../atoms/Link'

export class PeoplePage extends Component {

  render() {
    // const {classes} = this.props;
    return (
      <Layout className="pp-1">
        <NavigationBar className="People" idmenu="2">
          <Layout className="pp-2">
            <Link to="/createemployee" class="no-underline">
            <ButtonCreate title="creat a new employee"/>
            </Link>
            <PeopleCard>
            </PeopleCard>
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
