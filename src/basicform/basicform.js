// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import "./basicform.scss";
import { HeaderNav } from "../Header/app.js";
import "./login.css";
import lottie from "lottie-web/build/player/lottie_light";
import WelcomeDesignBack from "../static/colorBackground.json";
import FooterNav from "../Footer/app";
import Hexagonal from "../HexaGona/hexagona";
import SignIn from "../firebaseComponents/SignIn";
import SignUp from "../firebaseComponents/SignUp";
import Application from "../firebaseComponents/Application";
import FirebaseApp from "../firebaseComponents/App";

const Basic = () => {
  const [state, setState] = useState(true);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#WelcomeDesignBack"),
      animationData: WelcomeDesignBack,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });
  }, []);

  return (
    <div>
      {state === true ? (
        <div className="container-login100" >
          <div className="body" id="WelcomeDesignBack"></div>
          <div className="grad"></div>
          <div className="header">
            <div>
              Site<span>React</span>
            </div>
          </div>
          <div className="">
            <div className="login BasicForm" >
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  username: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.username) {
                    errors.username = "Required";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  } else if (values.password !== "admin") {
                    errors.password = "Use Correct credentials";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  localStorage.setItem("usersignin", values.username);
                  localStorage.setItem("usersigninmail", values.email);
                  setState({ state: false });
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                   

                    <Field
                      type="text"
                      name="username"
                      placeholder="Enter Full Name"
                    />
                    <ErrorMessage className="ErrorMessage"  name="username" component="p" />

                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                    />
                    <ErrorMessage className="ErrorMessage"  name="email" component="p" />

                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />

                    <ErrorMessage className="ErrorMessage" name="password" component="p" />

                    <Field
                      value="Login"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <HeaderNav><Hexagonal/><FirebaseApp/><FooterNav /></HeaderNav>
        </div>
      )}
    </div>
  );
};

export default Basic;
