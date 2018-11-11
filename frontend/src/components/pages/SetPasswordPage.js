import React, {Component} from 'react';
import { Layout } from '../atoms/Layout';
import Logo from '../atoms/Logo';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import api from '../../api';
import { history } from '../../helpers/history';



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
  form: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SetPasswordPage extends Component {
  state = {
    password : '',
    confPassword: '',
    token: this.props.match.params.token,
    showPassword: false,
    isError: false,
    isSuccess: false
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    api.post('auth/setPassword', {
      password: this.state.password,
      token: this.state.token
    }).then(response => {
      this.setState({
        isSuccess: true,
        isError: false })
      setTimeout(() => { history.push('/') }, 5000)
    }
    ).catch(() => {
      this.setState({
        isSuccess: false,
        isError: true })
    });

  }

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword})
  }

 render() {
   const {password,confPassword,isError,isSuccess } = this.state;
   const { classes } = this.props;
  return (
   <Layout className="lp-1">
      <Logo/>
      <main className={classes.layout}>
      <form className={classes.form} onSubmit={ this.handleSubmit }>
      { isError && <div className="text-red">Link is expired</div> }
      { isSuccess && <div className="text-green">Your password has been set</div> }
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Password:</InputLabel>
            <Input
              id="password"
              name="password"
              autoComplete="off"
              type={ this.state.showPassword ? "text" : "password"}
              value={ password }
              onChange={ this.handleChange }
              autoFocus
            />
            <button type="checkbox" onClick={ this.showPassword }>Show password</button>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Confirm password:</InputLabel>
            <Input
              id="confPassword"
              name="confPassword"
              type={ this.state.showPassword ? "text" : "password"}
              autoComplete="off"
              value={ confPassword }
              onChange={ this.handleChange }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}>
              Set up password
            </Button>
        </FormControl>
        </form>
        </main>
   </Layout>
  );
  }
}

SetPasswordPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
const setPasswordPageWithStyles = withStyles(styles)(SetPasswordPage);
export {setPasswordPageWithStyles as SetPasswordPage} ;
