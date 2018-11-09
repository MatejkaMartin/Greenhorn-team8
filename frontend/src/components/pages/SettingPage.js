import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import SettingForm from '../molecules/SettingForm'

export class SettingPage extends Component {
  render() {
    return (
          <Layout className="sp-2">
            <SettingForm/>
          </Layout>
    );
  }
}
