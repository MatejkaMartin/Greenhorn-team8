import React, {Component} from 'react';
import {LoginForm} from '../organisms/LoginForm';
import logo from '../../img/greenhornlogo.png';

export class LoginPage extends Component {
  render() {
    return (
      <div class=" bg-grey-lighter absolute pin font-sans">
      <div class="container mx-auto h-full flex justify-center items-center">
        <div class="w-1/3">
          <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
            <img src={logo} className="h-17" alt="logo"/>
            <br/><br/>
            <h2 class="font-hairline text-center">Login Form</h2>
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>);
  }
}
