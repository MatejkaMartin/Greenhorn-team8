import React, {Component} from 'react'
import ButtonCreate from '../molecules/ButtonCreate'
import {Layout} from '../atoms/Layout'
import TemplatesTable from '../organisms/TemplatesTable'
import api from '../../api'


export class TemplatesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      creatingTemplate: false,
      templates: []
     };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchTemplates();
  }

  fetchTemplates() {
    api.get('templates').then(response => {
      const { data } = response;
      console.log(data)
      this.setState({
        templates: data.templates
      });
    });
  }

  handleClick() {
    this.setState({creatingTemplate: true} )
  }

  render() {
    if (this.state.creatingTemplate) {
      return (
        <div>
          <label className="text-xl text-grey-dark"> HERE WOULD be creating new template html </label>
        </div>
      );
    } else {
      return (
        <Layout className="flex-col">
          <ButtonCreate title="creat a new Template" onClick={this.handleClick}/>
          <TemplatesTable templates = { this.state.templates }/>
        </Layout>
      );
    }
  }
}
