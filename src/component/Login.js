import { useFormik } from "formik";
import React from "react";
const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "less then 15 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (values.email.length > 25) {
    errors.email = "less then 25 characters";
  }
  return errors;
};
function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-gradient-primary" style={{ "min-height": "100vh" }}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="row">
              <div class="col-lg-3"></div>
              <div class="col-lg-6">
                <div class="card o-hidden border-0 shadow-lg my-5">
                  <div class="card-body p-0">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">
                          Welcome Back To Data Aces URL Shortener
                        </h1>
                      </div>
                      <form class="user" onSubmit={formik.handleSubmit}>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            name="email"
                            placeholder="Enter Email Address..."
                            onChange={formik.handleChange}
                            value={formik.values.email}
                          />
                          {formik.errors.email ? (
                            <div className="text-danger">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                        <div class="form-group">
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

                        {/* <a
                          href="index.html"
                          class="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </a> */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block"
                        >
                          Login
                        </button>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
