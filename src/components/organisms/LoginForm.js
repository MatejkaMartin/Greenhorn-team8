import React, {Component} from 'react';
import {Formik} from 'formik';
import {Button} from '../atoms/Button';
import {Layout} from '../atoms/Layout';
import {Row} from '../atoms/Row';
import {InputWithLabel} from '../molecules/InputWithLabel';

export class LoginForm extends Component {

  render() {
    const initialValues = {
      name: '',
      email: ''
    };
    return (<Formik initialValues={initialValues} onSubmit={(values, actions) => {
        console.log('---> submit', values);
        actions.setSubmitting(false);
      }} render={({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (<form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Row>
          <Layout>
            <InputWithLabel id="email" label="Email" placeholder="Your email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            <InputWithLabel id="password" label="Password" placeholder="Your password" type="password" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          </Layout>
        </Row>
        <Button title="Login" type="submit" disabled={isSubmitting}/>
      </form>)}/>);
  }
}
