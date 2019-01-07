import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { login } from '../../../services/auth/actions';
import { getError } from '../../../services/auth/reducer';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value } );
  }

  validate = () => {
      if(this.state.email.length===0 || this.state.password.length===0) {
      this.setState({ errorMessage : 'Credentials can´t be empty' })
    } else {
      this.setState({ errorMessage : '' })
    }
  }


  handleSubmit = (e) => {
      this.validate();
      e.preventDefault();
      const { email, password } = this.state;
      const { login } = this.props;
      login(email,password);
  }

  errorMessage = () => {
    if (this.props.errorMessage) {
      return (
        <div className="text-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }



  render() {
      const { email, password } = this.state;
      const { classes } = this.props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login to Greenhorn
          </Typography>

          <form className={classes.form} onSubmit={ this.handleSubmit }>
            { this.errorMessage() }
            <FormControl margin="normal" required fullWidth={true}>
              <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="on"
                  value={ email }
                  onChange={ this.handleChange }
                  autoFocus
                />
            </FormControl>

            <FormControl margin="normal" required fullWidth={true}>
              <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={ this.handleChange }
                  value={ password }
                />
            </FormControl>

            <Button
              type="submit"
              fullWidth={true}
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={ !password || !email }>
              Login
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state  => {
    const { authenticationReducer } = state
    return {
      errorMessage: getError(authenticationReducer )
    };
}

const mapDispatchToProps = {
  login,
};

const loginFormWithStyles = withStyles(styles)(LoginForm);
const connectedLoginForm = connect(mapStateToProps,mapDispatchToProps)(loginFormWithStyles);
export {connectedLoginForm as LoginForm} ;
