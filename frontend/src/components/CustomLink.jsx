import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch({ path: to, end: to.length === 1 });

  return (
    <Link
      to={to}
      style={{
        color: match ? "#1f1e1e" : "white",
        fontWeight: match ? "bold" : "normal",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
