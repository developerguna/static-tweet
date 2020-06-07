// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './basicform.css'
import {HeaderNav } from '../Header/app.js'
const Basic = () => (
  <div className="BasicForm">
    
    <Formik
      initialValues={{ email: '', password: '', fullname: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
       
          const userdata=JSON.stringify(values);
          console.log(userdata);
          setSubmitting(false);
       
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          
          <fieldset>
          <legend>Login Form</legend>
          <div>
          <label>Full Name :</label>
            <Field type="name" name="fullname" placeholder="Enter Full Name" />
          </div>
            <div>
            <label>Email :</label>
            <Field type="email" name="email" placeholder="Enter Your Email" />
            <ErrorMessage name="email" component="div" />
            </div>
            
            <div>
            <label>Password :</label>
            <Field type="password" name="password" placeholder="Password" />

            <ErrorMessage name="password" component="div" />
            </div>
            <div>
            <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
            </div>
            
            </fieldset>
            
            

          
          
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;