import React from "react";
import { Link } from "react-router-dom";
import { CustomLink } from "../CustomLink";
// import { NavLink } from "react-router-dom";
import {
  NavBar,
  LinksWrapper,
  InputWrapper,
  InputSearch,
} from "./_HeaderStyles";

const Header = () => {
  return (
    <NavBar>
      <LinksWrapper>
        <CustomLink to={"/"}>Музика</CustomLink>
        <CustomLink to={"/"}>Подкасти</CustomLink>
        <CustomLink to={"/artist"}>Бібліотека</CustomLink>
        <CustomLink to={"/artist-detail"}>Радіо</CustomLink>
      </LinksWrapper>
      <InputWrapper>
        <InputSearch type="text" />
      </InputWrapper>
    </NavBar>
  );
};

export default Header;
