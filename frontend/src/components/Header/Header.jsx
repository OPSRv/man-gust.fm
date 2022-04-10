import { CustomLink } from "../CustomLink";
import {
  InputSearch,
  InputWrapper,
  LinksWrapper,
  NavBar,
} from "./_HeaderStyles";

const Header = () => {
  return (
    <NavBar>
      <LinksWrapper>
        <CustomLink to={"/"}>Музика</CustomLink>
        <CustomLink to={"/podcasts"}>Подкасти</CustomLink>
        <CustomLink to={"/artist"}>Бібліотека</CustomLink>
        <CustomLink to={"/detail"}>Радіо</CustomLink>
      </LinksWrapper>
      <InputWrapper>
        <InputSearch type="text" />
      </InputWrapper>
    </NavBar>
  );
};
export { Header };
