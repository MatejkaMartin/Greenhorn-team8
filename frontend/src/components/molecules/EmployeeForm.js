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
import PersonalInfoForm from './PersonalInfoForm';
import NameForm from './NameForm';
import EmailMobileForm from './EmailMobileForm';
import AssignmentForm from './AssignmentForm';

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

const steps = [
'Name',
'Email & Phone',
'Assignment'
];

function getStepContent(step,values,handleChange,jobPositions,departments,roles) {
  switch (step) {
    case 0:
      return <NameForm
      values={ values }
      handleChange={ handleChange }
      />;
    case 1:
      return <EmailMobileForm
      values={ values }
      handleChange={ handleChange }
      />;
    case 2:
      return <AssignmentForm
      values={ values }
      handleChange={ handleChange }
      jobPositions={ jobPositions }
      departments={ departments }
      roles={ roles }
      />;
    default:
      throw new Error('Unknown step');
  }
}

function giveMeButton(step) {
switch (step) {
  case 0:
    return 'Set email & Phone';
  case 1:
    return 'Assign user';
  case 2:
    return 'Create';
}
}

class Checkout extends React.Component{
  constructor(props) {
  super(props)
  this.state = {
    activeStep: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 0,
    department: 0,
    jobPosition: 0
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value },function() {console.log(this.state)});
  }

  render() {
    const { classes,departments,roles,jobPositions } = this.props;
    const { activeStep } = this.state;
    const { firstName,lastName,email,phone,role,department,jobPosition } = this.state;
    const values = { firstName,lastName,email,phone,role,department,jobPosition }
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create an Employee
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
                <React.Fragment>
                  {getStepContent(activeStep,values,this.handleChange,jobPositions,departments,roles)}
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
                    >{
                      giveMeButton(activeStep)
                    }
                    </Button>
                  </div>
                </React.Fragment>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
