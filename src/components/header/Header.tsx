import React from "react";
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
        <p>Музика</p>
        <p>Подкасти</p>
        <p>Життя</p>
        <p>Радіо</p>
      </LinksWrapper>
      <InputWrapper>
        <InputSearch type="text" />
      </InputWrapper>
    </NavBar>
  );
};

export default Header;
