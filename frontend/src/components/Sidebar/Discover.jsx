import React from "react";
import { discover } from "../../fake-data/Mock-SideBar";
import { CustomLink } from "../CustomLink";
import {
  Icons,
  MenuHeaderText,
  MenuItems,
  MenuItemsWrapper,
  MenuText,
} from "./_SidebarStyles";

const Discover = () => {
  return (
    <MenuItemsWrapper>
      <MenuHeaderText>Цікаво</MenuHeaderText>
      {discover.map((item) => (
        <CustomLink to={item.url} key={item.id}>
          <MenuItems>
            <Icons src={item.icon} alt={item.text} />
            <MenuText>{item.text}</MenuText>
          </MenuItems>
        </CustomLink>
      ))}
    </MenuItemsWrapper>
  );
};

export { Discover };
