import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={"/"}>Музика</Link>
        <Link to={"/"}>Подкасти</Link>
        <Link to={"/artist"}>Бібліотека</Link>
        <Link to={"/"}>Радіо</Link>
      </LinksWrapper>
      <InputWrapper>
        <InputSearch type="text" />
      </InputWrapper>
    </NavBar>
  );
};

export default Header;
