import HomeIcon from "../assets/svg/menu/home.svg";
import TrendsIcon from "../assets/svg/menu/trends.svg";
import LibraryIcon from "../assets/svg/menu/library.svg";
import DiscoverIcon from "../assets/svg/menu/discover.svg";
import PlaylistsIcon from "../assets/svg/discover/playlists.svg";
import PodcastsIcon from "../assets/svg/discover/podcasts.svg";
import DailyMixIcon from "../assets/svg/discover/dailymix.svg";
import LikedSongsIcon from "../assets/svg/your_collection/liked_songs.svg";
import FavoriteArtistsIcon from "../assets/svg/your_collection/favorite_artists.svg";
import SettingsIcon from "../assets/svg/general/settings.svg";
import LogOutIcon from "../assets/svg/general/log_out.svg";

export const menu = [
  {
    id: 1,
    text: "Головна",
    icon: `${HomeIcon}`,
    url: "/",
  },
  {
    id: 2,
    text: "Радіо",
    icon: `${HomeIcon}`,
    url: "/radio",
  },
  {
    id: 3,
    text: "Виконавці",
    icon: `${LibraryIcon}`,
    url: "/musicbands",
  },
  {
    id: 4,
    text: "Тенденції",
    icon: `${TrendsIcon}`,
    url: "/trends",
  },
  {
    id: 5,
    text: "Відкрийте для себе",
    icon: `${DiscoverIcon}`,
    url: "/discover",
  },
];

export const discover = [
  {
    id: 1,
    text: "Списки відтворення",
    icon: `${PlaylistsIcon}`,
    url: "/playlists",
  },
  {
    id: 2,
    text: "Подкасти",
    icon: `${PodcastsIcon}`,
    url: "/podcasts",
  },
  {
    id: 3,
    text: "Щоденна суміш",
    icon: `${DailyMixIcon}`,
    url: "/daily-mix",
  },
];

export const your_collection = [
  {
    id: 1,
    text: "Уподобання",
    icon: `${LikedSongsIcon}`,
    url: "/liked-songs",
  },
  {
    id: 2,
    text: "Улюблені виконавці",
    icon: `${FavoriteArtistsIcon}`,
    url: "/favorite",
  },
];

export const general = [
  {
    id: 1,
    text: "Налаштування",
    icon: `${SettingsIcon}`,
    url: "/settings",
  },
  {
    id: 2,
    text: "Вийти",
    icon: `${LogOutIcon}`,
    url: "/logout",
  },
];
