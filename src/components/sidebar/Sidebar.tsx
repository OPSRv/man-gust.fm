import { FC } from "react";
//fake
import {
  discover,
  general,
  menu,
  your_collection,
} from "../../fake-data/Mock-SideBar";

import MusicLogo from "../../assets/svg/other/music.svg";
//styles
import {
  SideBar,
  MenuItemsWrapper,
  MenuHeaderText,
  MenuText,
  MenuItems,
  Logo,
  LogoIcons,
  Icons,
  TextColor,
} from "./_SidebarStyles";
import { Link } from "react-router-dom";
import { CustomLink } from "../CustomLink";

const Sidebar: FC = () => {
  return (
    <>
      <SideBar>
        <CustomLink to={"/"}>
          <Logo>
            <LogoIcons src={MusicLogo} alt="logo" />
            <TextColor color={"#FF5656"}>MANGUST</TextColor>
            <TextColor>FM</TextColor>
          </Logo>
        </CustomLink>
        <MenuItemsWrapper>
          <MenuHeaderText>Menu</MenuHeaderText>
          {menu.map((item) => (
            <MenuItems key={item.id}>
              <CustomLink to={item.url}>
                <Icons src={item.icon} alt={item.text} />
                <MenuText>{item.text}</MenuText>
              </CustomLink>
            </MenuItems>
          ))}
        </MenuItemsWrapper>
        <MenuItemsWrapper>
          <MenuHeaderText>Discover</MenuHeaderText>
          {discover.map((item) => (
            <MenuItems key={item.id}>
              <CustomLink to={item.url}>
                <Icons src={item.icon} alt={item.text} />
                <MenuText>{item.text}</MenuText>
              </CustomLink>
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
