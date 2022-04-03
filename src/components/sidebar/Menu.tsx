import { menu } from "../../fake-data/Mock-SideBar";
import { CustomLink } from "../CustomLink";
import {
  Icons,
  MenuHeaderText,
  MenuItems,
  MenuItemsWrapper,
  MenuText,
} from "./_SidebarStyles";

const Menu = () => {
  return (
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
  );
};

export { Menu };
