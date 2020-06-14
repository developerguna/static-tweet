// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import './basicform.css'
import {HeaderNav } from '../Header/app.js'
import './login.css'
const Basic = () => {
const [state,setState] = useState(true);
return(
  <div>
    {state === true ?
  (<div className="container-login100" >
    <div className="wrap-login100">
  <div className="BasicForm">
  
    <Formik
      initialValues={{ email: 'gantapalguna@gmail.com', password: 'admin', username: 'admin' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.username)
        {
          errors.username = 'Required';
        }
        else if(values.username !== 'admin')
        {
          errors.username = 'You are not authorized to view application';
        }
        if(!values.password)
        {
          errors.password = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
       
          const userdata=JSON.stringify(values);
          console.log(values.username);
         
            setState({state:false}) ;
            setSubmitting(false);
          
      }}
    >
      {({ isSubmitting }) => (
        
        <Form>
          
          <fieldset>
          <legend>Login Form</legend>
          <div>
          <label>Full Name :</label>
            <Field type="name" name="username" placeholder="Enter Full Name" />
            <ErrorMessage name="username" component="p" />
          </div>
            <div>
            <label>Email :</label>
            <Field type="email" name="email" placeholder="Enter Your Email" />
            <ErrorMessage name="email" component="p" />
            </div>
            
            <div>
            <label>Password :</label>
            <Field type="password" name="password" placeholder="Password" />

            <ErrorMessage name="password" component="p" />
            </div>
            <div>
            <button  type="submit" disabled={isSubmitting}>
            Submit
          </button>
            </div>
            
            </fieldset>
            
            

          
          
        </Form>
      )}
    </Formik>
  </div></div></div>):(<HeaderNav/>)
}
  </div>
      
);

      }

export default Basic;