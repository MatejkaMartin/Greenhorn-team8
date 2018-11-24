import React, {Component} from 'react'
import ButtonCreate from '../molecules/ButtonCreate'
import {Layout} from '../atoms/Layout'
import TemplatesTable from '../organisms/TemplatesTable'


export class TemplatesPage extends Component {

  constructor(props) {
    super(props);

    this.state = { creatingTemplate: false };
    this.handleClick = this.handleClick.bind(this);
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
            <TemplatesTable />
        </Layout>
      );
    }
  }
}
