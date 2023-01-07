import React from "react";
import Routes1 from "./Routes";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import ChatBox from "./components/ChatBox/ChatBox";

function Layout(props) {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ width: "100%" }}>
        <NavBar />
        <div>
          <Routes1 />
          <ChatBox/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
