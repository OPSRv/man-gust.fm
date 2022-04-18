import React from "react";
import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({ path: to, end: to.length === 1 });

  return (
    <Link
      to={to}
      style={{
        color: match ? "#888888" : "#ffffff",
        fontWeight: match ? "bold" : "normal",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
