import React from "react";
//styles
import { SideBar } from "./_SidebarStyles";
//components
import YourCollection from "./YourCollection";
import Menu from "./Menu";
import Logo from "./Logo";
import Discover from "./Discover";
import General from "./General";
// import { Hamburger } from "./Hamburger";

const Sidebar = () => {
  return (
    <SideBar>
      <Logo />
      <Menu />
      <Discover />
      <YourCollection />
      <General />
      {/* <Hamburger /> */}
    </SideBar>
  );
};

export default Sidebar;
