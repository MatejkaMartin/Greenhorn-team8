import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../organisms/NavigationBar'
import PeopleCard from '../molecules/PeopleCard'
import ButtonCreate from '../molecules/ButtonCreate'

export class PeoplePage extends Component {
  render() {
    return (
      <Layout className="pp-1">
        <NavigationBar className="People" idmenu="2">
          <Layout className="pp-2">
            <ButtonCreate title="creat a new employee"/>
            <PeopleCard>
            </PeopleCard>
          </Layout>
        </NavigationBar>
      </Layout>
    );
  }
}
