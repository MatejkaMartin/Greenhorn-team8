import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import NavigationBar from '../molecules/NavigationBar'
import Card from '../molecules/Card'

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';

export class PeoplePage extends Component {
  render() {
    return (
      <Layout className="fp-1">
        <NavigationBar className="People" id="2" />
        <Card src={img1} />
        <Card src={img2} />
        <Card src={img3} />
        <Card src={img4} />
        <Card src={img5} />
      </Layout>
    );
  }
}
