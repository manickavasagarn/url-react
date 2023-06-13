import React, { useEffect } from "react";
import TopBar from "./TopBar.js";
import SideBar from "./SideBar.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const nav = useNavigate();
  useEffect(() => {
    return async () => {
      try {
        console.log(window.localStorage.getItem("token"));
        var valid = await axios.get("http://localhost:3001/urlshort", {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        });
      } catch (error) {
        window.localStorage.setItem("token", null);
        nav("/login");
      }
    };
  }, []);

  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopBar />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
