import React, {Component} from 'react';
import {Formik} from 'formik';
import {Button} from '../atoms/Button';
import {Layout} from '../atoms/Layout';
import {Form} from '../atoms/Form'
import {Label} from '../atoms/Label'
import {Input} from '../atoms/Input'
import { Link } from '../atoms/Link';
import Logo from '../../img/greenhornlogo.png';

export class LoginForm extends Component {

  render() {
    const initialValues = {
      email: '',
      password: ''
    };

    return (
      <Formik
        initialValues={initialValues}

        onSubmit={(values, actions) => {
        console.log('---> submit', values);
        actions.setSubmitting(false);}}

        render={({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <Form class="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <img src={Logo} className="logo-1" alt="logo"/>
              <Layout class="mb-4">
                <Label class="block text-grey-darker text-sm font-bold mb-2" for="email">
                  Email</Label>
                <Input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:border-green"
                  id="email" type="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
              </Layout>

              <Layout class="mb-6">
                <Label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                  Password</Label>
                <Input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:border-green"
                  id="password" type="password" placeholder="Your Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
              </Layout>

              <Layout class="flex items-center justify-between">
                <Button className="baton" class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" title="Login" type="submit" disabled={isSubmitting}/>
                <Link class="no-underline" to="/dashboard">Forgot password?</Link>
              </Layout>
            </Form>
          </form>)}/>
        );
      }
    }
