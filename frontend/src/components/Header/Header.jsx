import React from "react";
import CustomLink from "../CustomLink";
import {
  InputSearch,
  InputWrapper,
  LinksWrapper,
  NavBar,
} from "./_HeaderStyles";
// import { useLocation } from "react-router-dom";

const Header = () => {
  // const location = useLocation();
  // console.log(location.pathname);

  // const history = useHistory();

  // console.log(history.location.pathname);

  return (
    <>
      {/* {location.pathname === "/detail" ? (
        <span></span>
      ) : ( */}
      <NavBar>
        <LinksWrapper>
          <CustomLink to={"/"}>Головна</CustomLink>
          <CustomLink to={"/podcasts"}>Подкасти</CustomLink>
          <CustomLink to={"/musicbands"}>Виконавці</CustomLink>
          <CustomLink to={"/radio"}>Радіо</CustomLink>
        </LinksWrapper>
        <InputWrapper>
          <InputSearch type="text" />
        </InputWrapper>
      </NavBar>
      {/* )} */}
    </>
  );
};
export default Header;
