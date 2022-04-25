import React from "react";
import { Link } from "react-router-dom";

import Image_404 from "../../assets/svg/404/404.svg";
import { NoMatchWrapper } from "./_no-matchStyles";

const NoMatch = () => {
  return (
    <NoMatchWrapper>
      <p>От халепа, тут немає чого дивитися</p>
      <img src={Image_404} alt="" />
      <Link to="/">Повернутися на головну</Link>
    </NoMatchWrapper>
  );
};

export default NoMatch;
