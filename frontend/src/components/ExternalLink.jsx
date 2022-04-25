import React from "react";
const ExternalLink = ({ children, to, ...props }) => {
  return (
    <a href={to} {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
