import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import { TemplateForm } from '../organisms/forms/TemplateForm'

export class CreateTemplatePage extends Component {

  render() {
    return (
          <Layout className="ctp-2">
            <TemplateForm/>
          </Layout>
    );
  }
}
