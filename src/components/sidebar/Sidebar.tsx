import { FC } from "react";
import styled from "styled-components";
import HomeIcon from "../../assets/svg/menu/home.svg";
import TrendsIcon from "../../assets/svg/menu/trends.svg";
import LibraryIcon from "../../assets/svg/menu/library.svg";
import DiscoverIcon from "../../assets/svg/menu/discover.svg";
import PlaylistsIcon from "../../assets/svg/discover/playlists.svg";
import PodcastsIcon from "../../assets/svg/discover/podcasts.svg";
import DailyMixIcon from "../../assets/svg/discover/dailymix.svg";
import LikedSongsIcon from "../../assets/svg/your_collection/liked_songs.svg";
import FavoriteArtistsIcon from "../../assets/svg/your_collection/favorite_artists.svg";
import LocalIcon from "../../assets/svg/your_collection/Local.svg";
import SettingsIcon from "../../assets/svg/general/settings.svg";
import LogOutIcon from "../../assets/svg/general/log_out.svg";
import MusicLogo from "../../assets/svg/other/music.svg";

const SideBar = styled.div`
  background-color: #1a1a1ac1;
  color: #f6f6f6;
  width: 35%;
  min-width: 240px;
  max-width: 280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-left: calc(20px + (50 - 20) * ((100vw - 320px) / (2556 - 320)));
  padding-top: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
  position: sticky;
  top: 0;
  overflow-y: hidden;
  height: 100vh;
  /* transition: 1s; */
  @media (max-width: 1000px) {
    flex-flow: column nowrap;

    width: 100%;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    z-index: 10;
    &:hover {
      padding-left: calc(20px + (50 - 20) * ((100vw - 320px) / (2556 - 320)));
      padding-top: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
      height: 100vh;
    }
  }
`;
const MenuItemsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const MenuHeaderText = styled.span`
  font-size: calc(10px + 4 * ((100vw - 320px) / (2556 - 320)));
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 10px;
`;
const MenuText = styled.span`
  font-size: calc(14px + 2 * ((100vw - 320px) / (2556 - 320)));
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
const MenuItems = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 8px 0;
`;

const Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-weight: 700;
`;
const LogoIcons = styled.img`
  width: calc(25px + 4 * ((100vw - 320px) / (2556 - 320)));
  padding-right: 20px;
`;
const Icons = styled.img`
  width: ${(props) => props.width || "24px"};
  padding-right: 25px;
`;
const TextColor = styled.span`
  color: ${(props) => props.color || "white"};
  font-size: calc(25px + 4 * ((100vw - 320px) / (2556 - 320)));
`;
const menu = [
  {
    id: 1,
    text: "Додому",
    icon: `${HomeIcon}`,
  },
  {
    id: 2,
    text: "Тенденції",
    icon: `${TrendsIcon}`,
  },
  {
    id: 3,
    text: "Бібліотека",
    icon: `${LibraryIcon}`,
  },
  {
    id: 4,
    text: "Відкрийте для себе",
    icon: `${DiscoverIcon}`,
  },
];

const discover = [
  {
    id: 1,
    text: "Списки відтворення",
    icon: `${PlaylistsIcon}`,
  },
  {
    id: 2,
    text: "Подкасти",
    icon: `${PodcastsIcon}`,
  },
  {
    id: 3,
    text: "Щоденна суміш",
    icon: `${DailyMixIcon}`,
  },
];

const your_collection = [
  {
    id: 1,
    text: "Уподобання",
    icon: `${LikedSongsIcon}`,
  },
  {
    id: 2,
    text: "Улюблені виконавці",
    icon: `${FavoriteArtistsIcon}`,
  },
  {
    id: 3,
    text: "Місцеві",
    icon: `${LocalIcon}`,
  },
];

const general = [
  {
    id: 1,
    text: "Налаштування",
    icon: `${SettingsIcon}`,
  },
  {
    id: 2,
    text: "Вийти",
    icon: `${LogOutIcon}`,
  },
];

const Sidebar: FC = () => {
  return (
    <>
      <SideBar>
        <Logo>
          <LogoIcons src={MusicLogo} alt="logo" />
          <TextColor color={"#FF5656"}>MANGUST</TextColor>
          <TextColor>FM</TextColor>
        </Logo>
        <MenuItemsWrapper>
          <MenuHeaderText>Menu</MenuHeaderText>
          {menu.map((item) => (
            <MenuItems key={item.id}>
              <Icons src={item.icon} alt={item.text} />
              <MenuText>{item.text}</MenuText>
            </MenuItems>
          ))}
        </MenuItemsWrapper>
        <MenuItemsWrapper>
          <MenuHeaderText>Discover</MenuHeaderText>
          {discover.map((item) => (
            <MenuItems key={item.id}>
              <Icons src={item.icon} alt={item.text} />
              <MenuText>{item.text}</MenuText>
            </MenuItems>
          ))}
        </MenuItemsWrapper>
        <MenuItemsWrapper>
          <MenuHeaderText>Your collection</MenuHeaderText>
          {your_collection.map((item) => (
            <MenuItems key={item.id}>
              <Icons src={item.icon} alt={item.text} />
              <MenuText>{item.text}</MenuText>
            </MenuItems>
          ))}
        </MenuItemsWrapper>
        <MenuItemsWrapper>
          <MenuHeaderText>General</MenuHeaderText>
          {general.map((item) => (
            <MenuItems key={item.id}>
              <Icons src={item.icon} alt={item.text} />
              <MenuText>{item.text}</MenuText>
            </MenuItems>
          ))}
        </MenuItemsWrapper>
      </SideBar>
    </>
  );
};

export default Sidebar;
