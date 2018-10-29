import React, {Component} from 'react';
import {Formik} from 'formik';
import {Button} from '../atoms/Button';
import {Layout} from '../atoms/Layout';
import {Row} from '../atoms/Row';
import { Link } from '../atoms/Link';
import {InputWithLabel} from '../molecules/InputWithLabel';


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
        render={({values, handleBlur, handleChange, handleSubmit, isSubmitting}) => (<form onSubmit={handleSubmit}>
        <Row>
          <Layout>
            <InputWithLabel id="email" label="Email" placeholder="Your email" type="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
            <br/>
            <InputWithLabel id="password" label="Password" placeholder="Your password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          </Layout>
          <br/>
          <Link className="text-muted no-underline" to="/first">Forgotten password?</Link>
          <br/><br/>
        </Row>
        <Button title="Login" type="submit" disabled={isSubmitting}/>
      </form>)}
    />);
  }
}
