import { FC } from "react";
//styles
import { SideBar } from "./_SidebarStyles";
//components
import { YourCollection } from "./YourCollection";
import { Menu } from "./Menu";
import { Logo } from "./Logo";
import { Discover } from "./Discover";
import { General } from "./General";

const Sidebar: FC = () => {
  return (
    <SideBar>
      <Logo />
      <Menu />
      <Discover />
      <YourCollection />
      <General />
    </SideBar>
  );
};

export { Sidebar };
