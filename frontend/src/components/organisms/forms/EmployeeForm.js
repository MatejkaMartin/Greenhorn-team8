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
import NameStep from './userCreationSteps/NameStep';
import EmailMobileStep from './userCreationSteps/EmailMobileStep';
import AssignmentStep from './userCreationSteps/AssignmentStep';
import SummaryStep from './userCreationSteps/SummaryStep';
import { connect } from 'react-redux';
import { addUser } from '../../../services/users/actions';

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


class EmployeeForm extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    activeStep: 0,
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    role: 0,
    department: 0,
    jobPosition: 0,
    avatarURL: 'https://firebasestorage.googleapis.com/v0/b/greenhorn-e8303.appspot.com/o/images%2Fpic2.png?alt=media&token=c5be4157-3bb5-44bc-9f6d-3e286d31438c',
    open: false
    }
  }



  steps = [
  'Enter name',
  'Email & Phone',
  'Assign user',
  'Summary'
  ];

  getStepContent = (step,values,catalogs) => {
    switch (step) {
      case 0:
        return <NameStep
        values={ values }
        handleChange={ this.handleChange }
        />;
      case 1:
        return <EmailMobileStep
        values={ values }
        handleChange={ this.handleChange }
        />;
      case 2:
        return <AssignmentStep
        values={ values }
        handleChange={ this.handleChange }
        catalogs={ catalogs }
        />;
      case 3:
        return <SummaryStep
        values={ values }
        catalogs={ catalogs }
        />;
      default:
        throw new Error('Unknown step');
    }
  }

  giveMeButton = (step) => {
  switch (step) {
    case 0:
      return 'Set email & Phone';
    case 1:
      return 'Assign user';
    case 2:
      return 'Summary';
    case 3:
      return 'Create';
    default:
      return ''
  }
  }

  handleNext = () => {
    if(this.state.activeStep===3) {
      this.props.addUser(this.state)
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { classes,departments,roles,jobPositions } = this.props;
    const catalogs = { departments,roles,jobPositions }
    const { activeStep } = this.state;
    const { firstName,lastName,email,mobile,role,department,jobPosition } = this.state;
    const values = { firstName,lastName,email,mobile,role,department,jobPosition }
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create an Employee
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {this.steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
                <React.Fragment>
                  {this.getStepContent(activeStep,values,catalogs)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={ this.handleNext }
                      className={classes.button}
                      disabled={ (activeStep ===0 && (!firstName || !lastName)) || (activeStep ===1 && (!email || !mobile)) || (activeStep ===2 && (!role || !department)) }
                    >{
                      this.giveMeButton(activeStep)
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

EmployeeForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapDispatchToProps = {
  addUser,
};

const employeeFormWithStyles = withStyles(styles)(EmployeeForm);
const connectedEmployeeFormWithStyles = connect(null,mapDispatchToProps)(employeeFormWithStyles);
export {connectedEmployeeFormWithStyles as EmployeeForm} ;
