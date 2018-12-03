import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TaskDetailStep from './taskCreationSteps/TaskDetailStep';
import TaskAttachmentsStep from './taskCreationSteps/TaskAttachmentsStep';
import TaskAssignEmployeeStep from './taskCreationSteps/TaskAssignEmployeeStep';
import TaskSetDeadlineStep from './taskCreationSteps/TaskSetDeadlineStep';
import TaskSummaryStep from './taskCreationSteps/TaskSummaryStep';
import {Link} from '../../atoms/Link';

import { connect } from 'react-redux';
import { startFetchUsers } from '../../../services/users/actions';
import { startFetchTemplates } from '../../../services/templates/actions';
import { addTask } from '../../../services/tasks/actions';
import { uploadFile } from '../../../services/files/actions';
import { getEmployees } from '../../../services/users/reducer';
import { getTemplates } from '../../../services/templates/reducer';
import { getUser } from '../../../services/auth/reducer';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});


class TaskForm extends Component {
  state = {
    activeStep: 0,
    taskTitle: '',
    taskDescription: '',
    files: [],
    selectedEmployees: [],
    deadlines: [],
    selectedTemplate: 0
  };


  steps = ['Fill task details', 'Attachments', 'Assign Employee', 'Set deadline', 'Summary'];

  getStepContent = ( values ) => {
    switch (this.state.activeStep) {
      case 0:
        return <TaskDetailStep handleTaskInfo={ this.handleTaskInfo }  templates={ this.props.templates } handleTemplateChange = { this.handleTemplateChange } values = { values }/>;
      case 1:
        return <TaskAttachmentsStep handleAddFile = { this.handleAddFile } handleDeleteFile = { this.handleDeleteFile } values = { values }/>;
      case 2:
        return <TaskAssignEmployeeStep employees={ this.props.employees } values = { values } handleAssignEmployees={ this.handleAssignEmployees} />;
      case 3:
        return <TaskSetDeadlineStep values = { values } handleDatePicker={ this.handleDatePicker }/>;
      case 4:
        return <TaskSummaryStep values = { values }/>;
      default:
        throw new Error('Unknown step');
    }
  }


  handleNext = () => {
    if (this.state.activeStep === 2) {
      this.setDeadlines()
    }
  if(this.state.activeStep + 1 !== this.steps.length) {
    this.setState(state => ({ activeStep: state.activeStep + 1  }));

  } else {
    this.submitTasks(this.state)
    }
  };

  handleBack = () => {
    this.setState(state => ({ activeStep: state.activeStep - 1 }));
  };

  handleTemplateChange = (e) => {
    this.setState({ selectedTemplate: e.target.value });

    if ( e.target.value !== 0 ) {
        let template = this.props.templates.filter(template => template.id === e.target.value)[0]
        this.setState({
          taskTitle: template.taskName,
          taskDescription: template.taskInstructions
        })
    } else {
        this.setState({
        taskTitle: '',
        taskDescription: '',
        files: [],
        deadlines: []
      })
    }
  }

  handleDatePicker = (e,id) => {
    const newDeadlines = [...this.state.deadlines];
    let newDeadline = {
      id: id,
      deadline: e.target.value
    }
    let currentIndex = this.state.deadlines.indexOf(this.state.deadlines.filter(deadline => deadline.id === id)[0]);
    newDeadlines.splice(currentIndex, 1, newDeadline);
    this.setState({ deadlines: newDeadlines });
  }

  componentDidMount() {
    this.props.startFetchTemplates();
    this.props.startFetchUsers();
  }

  handleAssignEmployees =  (value) => {
  const { selectedEmployees } = this.state;
  const currentIndex = selectedEmployees.indexOf(value);
  const newChecked = [...selectedEmployees];
  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }

  this.setState({
    selectedEmployees: newChecked,
  });
  };

  handleTaskInfo = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDeleteFile = (filename) => {
    this.setState({ files: this.state.files.filter(file => file.name !== filename ) })
  };

  handleAddFile = (file) => {
    this.setState({ files: file })
  }

  setDeadlines = () => {
    let today =  new Date()
    if (this.state.selectedTemplate !== 0) {
      let days = this.props.templates.filter(template => template.id === this.state.selectedTemplate)[0].future_days
      today = today.setDate(today.getDate() + days);
      today = new Date(today)
    }

    let dateString = today.toISOString().slice(0,10)
    const { deadlines } = this.state;
    const newDeadlines = [...deadlines];
    for(var i=0; i < this.state.selectedEmployees.length; i++) {
      let newDeadline = {
        id: this.state.selectedEmployees[i].id,
        deadline: dateString
      }
      let currentIndex = deadlines.indexOf(deadlines.filter(deadline => deadline.id === newDeadline.id)[0]);
      if (currentIndex === -1) {
        newDeadlines.push(newDeadline);
      } else {
        newDeadlines.splice(currentIndex, 1, newDeadline);
      }
    }
    this.setState({ deadlines: newDeadlines });
  }

  submitTasks = async (state) => {
        let uploadedDocumentsIDs  = []
          if (state.files.length !== 0 ) {
          uploadedDocumentsIDs = await this.props.uploadFile(state.files,'tasks')
        }

        await this.props.addTask(this.createTasksJson(state,uploadedDocumentsIDs))
  }

  getDeadlineByEmployeeId = (employeeId) => {
    return this.state.deadlines.filter(deadline => deadline.id === employeeId)
  }

  createTasksJson = (state,uploadedDocumentsIDs) => {
    let taskJson = [];
    for(var i=0; i < state.selectedEmployees.length; i++) {
      var deadline = this.getDeadlineByEmployeeId(state.selectedEmployees[i].id)

      var task = {
          "taskTitle":  state.taskTitle,
          "taskDescription":  state.taskDescription,
          "files": uploadedDocumentsIDs,
          "employee_id" : state.selectedEmployees[i].id,
          "deadline": deadline[0].deadline,
          "owner_id": this.props.user.id
      };
      taskJson.push(task)
    }
    return taskJson
  }



  render() {
    const { classes } = this.props;
    const { activeStep,taskTitle,taskDescription,files,employees,deadlines,selectedEmployees, selectedTemplate } = this.state;
    const values = { taskTitle,taskDescription,files,employees,deadlines,selectedEmployees, selectedTemplate }
    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create Task
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {this.steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Fragment>
                  { this.getStepContent(values)}
                  <div className={classes.buttons}>
                   { activeStep === 0 &&  <Link to="/tasks"  className="no-underline ">
                      <Button variant="contained"
                              color="primary"
                              className={classes.button}>
                              Back to tasks
                      </Button>
                    </Link>
                  }
                    {activeStep !== 0 && (
                    <Button onClick={this.handleBack} className={classes.button}>
                      Back
                    </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={  this.handleNext  }
                      className={classes.button}
                      disabled={ (activeStep === 2 && this.state.selectedEmployees.length) === 0 || ( activeStep===0 && this.state.taskTitle === '')}
                    >
                      { activeStep === this.steps.length - 1 ? 'Save' : 'Next'}
                    </Button>
                  </div>
            </Fragment>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state  => {
    const { usersReducer, templateReducer, authenticationReducer } = state
    return {
      employees: getEmployees( usersReducer ),
      templates: getTemplates( templateReducer ),
      user: getUser(authenticationReducer)
    };
}

const mapDispatchToProps = {
  startFetchUsers,
  startFetchTemplates,
  addTask,
  uploadFile
};

const taskFormWithStyles = withStyles(styles)(TaskForm);
const connectedtaskFormWithStyles = connect(mapStateToProps,mapDispatchToProps)(taskFormWithStyles);
export {connectedtaskFormWithStyles as TaskForm} ;
