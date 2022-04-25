import React from "react";

import { useLocation } from "react-router";
import { useEffect } from "react";
const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
