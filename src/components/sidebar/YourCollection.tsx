import { your_collection } from "../../fake-data/Mock-SideBar";
import { CustomLink } from "../CustomLink";
import {
  Icons,
  MenuHeaderText,
  MenuItems,
  MenuItemsWrapper,
  MenuText,
} from "./_SidebarStyles";

const YourCollection = () => {
  return (
    <MenuItemsWrapper>
      <MenuHeaderText>Your collection</MenuHeaderText>
      {your_collection.map((item) => (
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

export { YourCollection };
