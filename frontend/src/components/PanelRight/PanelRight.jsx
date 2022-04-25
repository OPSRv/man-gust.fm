import React from "react";
import Notifications from "./Notifications";
import RecentPlaylist from "./RecentPlaylist";
import NowPlaying from "./NowPlaying";

import { SideBar, MenuItemsWrapper } from "./_PanelRightStyles";

const PanelRight = () => {
  return (
    <SideBar>
      <MenuItemsWrapper>
        <Notifications />
        <RecentPlaylist />
        <NowPlaying />
      </MenuItemsWrapper>
    </SideBar>
  );
};

export default PanelRight;
