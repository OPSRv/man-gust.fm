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
      <MenuHeaderText>Discover</MenuHeaderText>
      {discover.map((item) => (
        <MenuItems key={item.id}>
          <CustomLink to={"artist"}>
            <Icons src={item.icon} alt={item.text} />
            <MenuText>{item.text}</MenuText>
          </CustomLink>
        </MenuItems>
      ))}
    </MenuItemsWrapper>
  );
};

export { Discover };
