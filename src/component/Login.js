import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 15) {
    errors.password = "less then 15 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
function Login() {
  useEffect(() => {
    return async () => {
      if (window.localStorage.getItem("token")) {
        try {
          console.log(window.localStorage.getItem("token"));
          var valid = await axios.get("http://localhost:3001/urlshort", {
            headers: {
              Authorization: window.localStorage.getItem("token"),
            },
          });
          nav("/");
        } catch (error) {
          window.localStorage.setItem("token", null);
        }
      }
    };
  }, []);
  const nav = useNavigate();
  const [error, seterror] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        var data = await axios.post("http://localhost:3001/login", values);
        window.localStorage.setItem("token", data.data.token);
        nav("/");
      } catch (error) {
        seterror(error.response.data.message);
        console.log(error.response.data.message);
      }
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
                      <div className="text-danger">{error}</div>
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
                        <Link class="small" to="/register">
                          Create an Account!
                        </Link>
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
