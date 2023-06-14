import { useFormik } from "formik";
import React, { useEffect } from "react";

function Otp(props) {
  const formik = useFormik({
    initialValues: {
     otp:""
    },

    onSubmit: (values) => {
      delete values.conform;
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div className="bg-gradient-primary" style={{ "min-height": "100vh" }}>
      <div className="container  ">
        <div class="row">
          <div className="col-lg-3"></div>
          <div class="col-lg-6">
            <div class="card o-hidden border-0 shadow-lg mt-5">
              <div class="card-body  p-0">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Otp verification !</h1>
                  </div>
                  <form class="user" onSubmit={formik.handleSubmit}>

                    <div class="form-group">
                      <input
                        type="number"
                        class="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Otp"
                        onChange={formik.handleChange}
                        value={formik.values.otp}
                        name="otp"
                      />
                      {formik.errors.email ? (
                        <div className="text-danger">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    
                    {/* <a
                    href="login.html"
                    class="btn btn-primary btn-user btn-block"
                  >
                    Register Account
                  </a> */}
                    <button class="btn btn-primary btn-user btn-block">
                     Submit
                    </button>
                  </form>
                  <hr />

                  <div class="text-center">
                  <button class="btn btn-info btn-user btn-block">
                     Resend Otp
                    </button>
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

export default Otp;
