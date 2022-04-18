import React from "react";
import { general } from "../../fake-data/Mock-SideBar";
import { CustomLink } from "../CustomLink";
import {
  Icons,
  MenuHeaderText,
  MenuItems,
  MenuItemsWrapper,
  MenuText,
} from "./_SidebarStyles";

const General = () => {
  return (
    <MenuItemsWrapper>
      <MenuHeaderText>Основні</MenuHeaderText>
      {general.map((item) => (
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

export { General };
