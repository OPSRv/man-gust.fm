import React from "react";
import { CustomLink } from "../CustomLink";
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
          <CustomLink to={"/"}>Музика</CustomLink>
          <CustomLink to={"/podcasts"}>Подкасти</CustomLink>
          <CustomLink to={"/artist"}>Бібліотека</CustomLink>
          <CustomLink to={"/detail"}>Радіо</CustomLink>
        </LinksWrapper>
        <InputWrapper>
          <InputSearch type="text" />
        </InputWrapper>
      </NavBar>
      {/* )} */}
    </>
  );
};
export { Header };
