import React, { useEffect } from "react";
import TopBar from "./TopBar.js";
import SideBar from "./SideBar.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "less then 15 characters";
  }

  if (!values.url) {
    errors.url = "Required";
  }
  return errors;
};
function CreatUrl() {
  const nav = useNavigate();
  useEffect(() => {
    return async () => {
      try {
        console.log(window.localStorage.getItem("token"));
        var valid = await axios.get("https://url-node.onrender.com/tokencheck", {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        });
      } catch (error) {
        window.localStorage.setItem("token", null);
        window.localStorage.setItem("email", null);
        nav("/login");
      }
    };
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      url: "",
    },
    validate,
    onSubmit: async (values) => {
       try {
        values.email = window.localStorage.getItem("email");
        await axios.post("https://url-node.onrender.com/urlshort",values,{
            headers:{
                "Authorization":window.localStorage.getItem("token")
            }
        });
        console.log(values)
        nav("/");
       } catch (error) {
         nav("/login");
       }
    },
  });
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <div></div>
              <Link
                to="/"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i class="  fa-solid fa-backward text-white-50"></i> Go Back
              </Link>
            </div>
            <div className="card">
              <div className="card-body">
                <form onSubmit={formik.handleSubmit}>
                  <div class="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      name="name"
                      placeholder="Enter Url Name..."
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    {formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div class="form-group">
                    <label>URL</label>
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleInputEmail"
                      name="url"
                      placeholder="Enter Url ..."
                      onChange={formik.handleChange}
                      value={formik.values.url}
                    />
                    {formik.errors.url ? (
                      <div className="text-danger">{formik.errors.url}</div>
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Create URL
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatUrl;
