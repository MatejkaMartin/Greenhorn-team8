import React, {Component} from 'react';
import {LoginForm} from '../organisms/LoginForm';
import logo from '../../img/greenhornlogo.png';

export class LoginPage extends Component {
  render() {
    return (
      <div className=" bg-grey-lighter absolute pin font-sans">
        <hr/>
        <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">

        <img src={logo} className="h-16" alt="logo"/>
        <br/>
            <h1 className="font-hairline mb-6 text-center">Login to our Website</h1>
            <LoginForm/>
            </div>
        </div>
    </div>

      </div>);
  }
}
