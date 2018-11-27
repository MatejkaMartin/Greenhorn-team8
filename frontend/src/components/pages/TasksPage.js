import React, {Component} from 'react'
import {Layout} from '../atoms/Layout'
import {TasksTable} from '../molecules/TasksTable'
import ButtonCreate from '../molecules/ButtonCreate'
import {Link} from '../atoms/Link'
import { getUser } from '../../reducers/authentication.reducer';
import { connect } from 'react-redux';



class TasksPage extends Component {
  render() {
    const {user} = this.props;
    return (
      <Layout className="taskpage">

        {user.roleID === 2 &&
        <Link to="/tasks/add" class="no-underline">
          <ButtonCreate title="creat a new task"/>
        </Link>}

        <TasksTable title='Tasks' user={user}/>
      </Layout>
    );
  }
}

const mapStateToProps = state  => {
    const { authentication } = state
    return {
      user: getUser(authentication)
    };
}

const connectedTasksPage = connect(mapStateToProps)(TasksPage);
export {connectedTasksPage as TasksPage} ;
