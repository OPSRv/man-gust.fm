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
      <MenuHeaderText>Твоя колекція</MenuHeaderText>
      {your_collection.map((item) => (
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

export { YourCollection };
