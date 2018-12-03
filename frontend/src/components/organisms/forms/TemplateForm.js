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
import TemplateDetailStep from './templateCreationSteps/TemplateDetailStep';
import TemplateAttachmentsStep from './templateCreationSteps/TemplateAttachmentsStep';
import TemplateSetFutureDaysStep from './templateCreationSteps/TemplateSetFutureDaysStep';
import {Link} from '../../atoms/Link';
import { connect } from 'react-redux';
import { addTemplate } from '../../../services/templates/actions';
import { uploadFile } from '../../../services/files/actions';

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



class TemplateForm extends Component {
  state = {
    activeStep: 0,
    templateTitle: '',
    taskTitle: '',
    taskInstructions: '',
    files: [],
    futureDay: 0
  };


  steps = ['Template details', 'Template attachments', 'Default deadline'];

  getStepContent = (step, values) => {
    switch (step) {
      case 0:
        return <TemplateDetailStep values= { values } handleChange = { this.handleChange } />;
      case 1:
        return <TemplateAttachmentsStep values= { values } handleAddFiles= { this.handleAddFiles } handleDeleteFile = { this.handleDeleteFile }/>;
      case 2:
        return <TemplateSetFutureDaysStep values= { values } handleChange = { this.handleChange }/>;
      default:
        throw new Error('Unknown steps');
    }
  }


  handleNext = () => {
    if (this.steps.length === this.state.activeStep + 1) {
      this.saveTemplate(this.state);
    } else {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    })
    );
  }
  };

  saveTemplate = async (state) => {
    const uploadIDs = [];
    if (state.files.length !== 0 ) {
    uploadIDs = await this.props.uploadFile(state.files,'templates');
    }
    let templateJson = {
      templateTitle: state.templateTitle,
      taskTitle: state.taskTitle,
      taskInstructions: state.taskInstructions,
      files: uploadIDs,
      futureDay: state.futureDay
    }

    await this.props.addTemplate(templateJson)

  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    })
    );
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddFiles = (file) => {
    this.setState({ files: file })
  }

  handleDeleteFile = (filename) => {
    this.setState({ files: this.state.files.filter(file => file.name !== filename ) })
  };



  render() {
    const { classes } = this.props;
    const { activeStep, ...state  } = this.state;
    const values = { activeStep, ...state };
    return (
      <Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Create Template
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {this.steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Fragment>
                <Fragment>
                  { this.getStepContent(activeStep, values)}
                </Fragment>
            </Fragment>
            <Link to="/tasks"  className="no-underline ">
               <Button variant="contained"
                       color="primary"
                       className={classes.button}>
                       Back to tasks
               </Button>
             </Link>
             {activeStep !== 0 && (
             <Button onClick={this.handleBack} className={classes.button}>
               Back
             </Button>
             )}
            <Button
              variant="contained"
              color="primary"
              onClick={  this.handleNext  }
              className={ classes.button }
            >
            { this.steps.length === activeStep + 1 ? 'Save template' : 'Next' }
            </Button>
          </Paper>
        </main>
      </Fragment>
    );
  }
}

TemplateForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  addTemplate,
  uploadFile
};

const templateFormWithStyles = withStyles(styles)(TemplateForm);
const connectedTemplateFormWithStyles = connect(null,mapDispatchToProps)(templateFormWithStyles);
export {connectedTemplateFormWithStyles as TemplateForm} ;
