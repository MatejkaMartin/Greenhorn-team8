import React, {Component} from 'react';
import {Button} from '../atoms/Button';
import {Layout} from '../atoms/Layout';
import {Row} from '../atoms/Row';
import {InputWithLabel} from '../molecules/InputWithLabel';
import { connect } from 'react-redux';
import { login } from '../../actions/user.actions';


class LoginForm extends Component {

constructor(props) {
  super(props);
  this.state = {
    email: '',
    password: '',
    errorMessage: this.props.errorMessage,
  };
  this.validate = this.validate.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
  this.setState({ [e.target.name]: e.target.value } );
}

validate() {
    if(this.state.email.length===0 || this.state.password.length===0) {
    this.setState({ errorMessage : 'Credentials can´t be empty' })
  } else {
    this.setState({ errorMessage : '' })
  }
}


handleSubmit(e) {
    this.validate();
    e.preventDefault();
    const { email, password } = this.state;
    if (email && password) {
      const { login } = this.props;
      login(email,password);
    }
}

errorMessage() {
  if (this.state.errorMessage) {
    return (
      <div className="text-red">
        {this.state.errorMessage}
      </div>
    );
  }
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
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
          <Layout>
            {this.errorMessage()}
            <InputWithLabel
            id="email"
            label="Email"
            placeholder="Your email"
            name="email"
            type="text"
            value={email}
            onChange={this.handleChange}
            autoFocus/>
            <br/>
            <InputWithLabel id="password"
            label="Password"
            placeholder="Your password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange} />
          </Layout>
          <br/>
        </Row>
        <Button title="Login" type="submit"/>
      </form>
      )};
  }


function mapStateToProps(state) {
    return {
      errorMessage: state.authentication.error
    };
}

const mapDispatchToProps = {
  login,
};

const connectedLoginPage = connect(mapStateToProps,mapDispatchToProps)(LoginForm);
export { connectedLoginPage as LoginForm };
