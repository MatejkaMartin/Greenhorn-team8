import React, {Component, Fragment } from 'react'
import {Layout} from '../atoms/Layout'
import TemplatesTable from '../organisms/TemplatesTable'
import api from '../../api'
import ButtonCreate from '../molecules/ButtonCreate'
import TemplateDetail from '../molecules/TemplateDetail'


export class TemplatePage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      templates: []
     };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchTemplates();
  }

  fetchTemplates() {
    api.get('template').then(response => {
      const { data } = response;
      this.setState({
        templates: data.templates
      });
    });
  }

  handleClick() {
    this.setState({creatingTemplate: true} )
  }

  selectedTemplate(id) {

  }

  render() {
      return (
        <Layout className="flex-col">
          <ButtonCreate title="new template" redirectTo="/template/add"/>
          <ButtonCreate title="Assign template" redirectTo="/template/assign"/>
          <TemplatesTable templates = { this.state.templates }/>
          <Fragment>
            <TemplateDetail open={ false  } template={this.state.templates.first} handleClose= { this.handleClose } handleChangeState = { this.handleChangeState } ></TemplateDetail>
          </Fragment>
        </Layout>

      );
  }
}
