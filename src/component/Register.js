import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Otp from "./Otp";
const validate = (values) => {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Required";
  } else if (values.firstname.length > 15) {
    errors.firstname = "less then 15 characters";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  } else if (values.lastname.length > 25) {
    errors.lastname = "less then 25 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (!values.conform) {
    errors.conform = "Required";
  } else if (values.password != values.conform) {
    errors.password = "Please Check The Conform Password";
  }
  return errors;
};

function Register() {
  const [otpPage, setOtpPage] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      conform: "",
    },
    validate,
    onSubmit: (values) => {
      delete values.conform;
      //   alert(JSON.stringify(values, null, 2));
      setOtpPage(values);
    //   nav("/otp");
    },
  });
  return (
    <div className="bg-gradient-primary" style={{ "min-height": "100vh" }}>
      {!otpPage ? (
        <div className="container ">
          <div class="row">
            <div className="col-lg-3"></div>
            <div class="col-lg-6">
              <div class="card o-hidden border-0 shadow-lg mt-5">
                <div class="card-body  p-0">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form class="user" onSubmit={formik.handleSubmit}>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleFirstName"
                            placeholder="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                            name="firstname"
                          />
                          {formik.errors.firstname ? (
                            <div className="text-danger">
                              {formik.errors.firstname}
                            </div>
                          ) : null}
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleLastName"
                            placeholder="Last Name"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                            name="lastname"
                          />
                          {formik.errors.lastname ? (
                            <div className="text-danger">
                              {formik.errors.lastname}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          placeholder="Email Address"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                          name="email"
                        />
                        {formik.errors.email ? (
                          <div className="text-danger">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div class="form-group row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                          />
                          {formik.errors.password ? (
                            <div className="text-danger">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>
                        <div class="col-sm-6">
                          <input
                            type="password"
                            class="form-control form-control-user"
                            id="exampleRepeatPassword"
                            placeholder="Repeat Password"
                            name="conform"
                            onChange={formik.handleChange}
                            value={formik.values.conform}
                          />
                          {formik.errors.conform ? (
                            <div className="text-danger">
                              {formik.errors.conform}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      {/* <a
                      href="login.html"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Register Account
                    </a> */}
                      <button class="btn btn-primary btn-user btn-block">
                        Register Account
                      </button>
                    </form>
                    <hr />

                    <div class="text-center">
                      <a class="small" href="login.html">
                        Already have an account? Login!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Otp otp={otpPage} ok="oktha" />
      )}
    </div>
  );
}

export default Register;
