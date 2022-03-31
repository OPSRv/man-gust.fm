import NewMusic from "../assets/svg/notifications/new_music.svg";
import PlaylistAdded from "../assets/svg/notifications/playlist_added.svg";

export const NotificationsList = [
  {
    id: 1,
    text: "Playlist Added",
    count: "200 songs",
    icon: `${PlaylistAdded}`,
  },
  {
    id: 2,
    text: "Playlist Shared",
    count: "To 8 users",
    icon: `${PlaylistAdded}`,
  },
  {
    id: 3,
    text: "New music",
    count: "Beat It - Michael Jackson",
    icon: `${NewMusic}`,
  },
];
