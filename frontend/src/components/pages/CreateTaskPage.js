import React, {Component} from 'react';
import {Layout} from '../atoms/Layout';
import TaskForm from '../molecules/TaskForm';
import api from '../../api';

export class CreateTaskPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      templates: [],
      people: [],
    };
  }

  componentDidMount() {
    this.fetchCatalogs();
  }

  fetchCatalogs() {
    api.get('catalogs').then(response => {
      const { data } = response;
      this.setState({
        templates: data.templates,
        people: data.people,
      });
    });
  }

  render() {
    const { templates, people  } = this.state;
    return (
          <Layout className="ctp-2">
            <TaskForm templates={templates} people={people}/>
          </Layout>
        );
      }
    }
