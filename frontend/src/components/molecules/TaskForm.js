import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TaskTypeStep from './TaskTypeStep';
import TaskInfoStep from './TaskInfoStep';
import TaskAssignStep from './TaskAssignStep';
import { history } from '../../helpers/history'
import api from '../../api';

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

const steps = ['Choose Task', 'Task Informations', 'Assign Employee'];

function getStepContent(step, values, handleChange, template, people, type) {
  switch (step) {
    case 0:
      return <TaskTypeStep
        values={values}
        handleChange={handleChange}
        type={type}/>;
    case 1:
      return <TaskInfoStep
        values={values}
        handleChange={handleChange}
        type={type}
        template={template}/>;
    case 2:
      return <TaskAssignStep
        values={values}
        handleChange={handleChange}
        people={people}/>;
    default:
      throw new Error('Unknown step');
  }
}

class TaskForm extends React.Component {

  constructor(props) {
  super(props)
  this.state = {
    activeStep: 0,
    type: 'adhoc',
    title: '',
    instructions: '',
    deadline: '',
    template: '',
    people: [],
    file: [],
    }
  }

  submitForm = () => {
    api
      .post('tasks/add',   {
    type: this.state.type,
    title: this.state.title,
    instructions: this.state.instructions,
    deadline: this.state.deadline,
    template: this.state.templates,
    people: this.state.people,
    file: this.state.file,
  })
      .then(function (response) {
        history.push('/tasks')
      })
      .catch(function (error) {
      }
      );
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    //alert( [event.target.name]: event.target.value );
  }

  handleNext = () => {
    if(this.state.activeStep===2) {
      this.submitForm()
    } else {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    }
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes, templates, peoples} = this.props;
    const { activeStep } = this.state;
    const { type, title, instructions, deadline, template, people, file } = this.state;
    const values = { type, title, instructions, deadline, template, people, file }

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create Task
            </Typography>

            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for task.
                  </Typography>
                  <Typography variant="subtitle1">
                    Task created!
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep, values, this.handleChange, templates, peoples, type)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Create' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskForm);
