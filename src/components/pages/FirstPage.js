import React, {Component} from 'react';
import {PageMenu} from '../molecules/PageMenu';
import {PageHeader} from '../molecules/PageHeader';
import {PageFooter} from '../molecules/PageFooter';
import {Layout} from '../atoms/Layout';
import calendar from '../../img/calendar.png';
import employee from '../../img/employee.png';

export class FirstPage extends Component {
  render() {
    return (
      <Layout>
        <PageHeader class="z-40"/>
          <div>
            <br/>
              <h2 class="mt-24">Welcome XXX, nice to meet you again. </h2>
            <br/>
          </div>

              {/*IF USER PAK*/}

          <div>
            <h2>Your tasks:</h2>
            <br/>
          </div>
          <img src={calendar} className="" alt="calendar"/>

              {/*IF ADMIN PAK*/}

          <div>
            <h2>Your employees:</h2>
            <br/>
          </div>
          <img src={employee} className="" alt="employee"/>
          
        <PageFooter/>
      </Layout>);
  }
}
