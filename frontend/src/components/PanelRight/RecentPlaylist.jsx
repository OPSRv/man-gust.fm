import React from "react";
import {
  RecentPlaylistsWrapper,
  NotificationsHeader,
  RecentPlaylistsItem,
  RecentPlaylistsItems,
  RecentPlaylistsImages,
} from "./_RecentPlaylistsStyles";

import Options from "../../assets/svg/notifications/options.svg";

import { RecentPlaylists } from "../../fake-data/Mock-RecentPlaylists";

const RecentPlaylist = () => {
  return (
    <>
      <RecentPlaylistsWrapper>
        <NotificationsHeader>
          <span>Recent Playlists</span>
          <img src={Options} alt="options" />
        </NotificationsHeader>
        <RecentPlaylistsItem>
          {RecentPlaylists.map((item) => (
            <RecentPlaylistsItems key={item.id}>
              <RecentPlaylistsImages src={item.icon} />
              <span>{item.name}</span>
            </RecentPlaylistsItems>
          ))}
        </RecentPlaylistsItem>
      </RecentPlaylistsWrapper>
    </>
  );
};

export default RecentPlaylist;
