import React from "react";
import TopBar from "./TopBar.js";
import SideBar from "./SideBar.js";  
function DashBoard() {
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
