import React, { useEffect, useState } from "react";
import TopBar from "./TopBar.js";
import SideBar from "./SideBar.js";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function DashBoard() {
  const nav = useNavigate();
  const [url, seturl] = useState([]);
  useEffect(() => {
    async function check() {
      try {
        var valid = await axios.get(
          "https://url-node.onrender.com/tokencheck",
          {
            headers: {
              Authorization: window.localStorage.getItem("token"),
            },
          }
        );
        try {
          var urllist = await axios.get(
            "https://url-node.onrender.com/geturl/" +
              window.localStorage.getItem("email"),
            {
              headers: {
                Authorization: window.localStorage.getItem("token"),
              },
            }
          );
          seturl(urllist.data);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        window.localStorage.setItem("token", null);
        window.localStorage.setItem("email", null);
        nav("/login");
      }
    }
    check();
  }, []);

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">URL Shortener</h1>
              <Link
                to="/creaturl"
                class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i class="fas fa-download fa-sm text-white-50"></i> Generate URL
              </Link>
            </div>
            <div className="card">
              <div className="card-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Date</th>
                      <th scope="col">Name</th>
                      <th scope="col">URL</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {url.map((obj, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{obj.time}</td>
                          <td>{obj.name}</td>
                          <td>{obj.shortener}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
