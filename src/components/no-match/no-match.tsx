import { Link } from "react-router-dom";

import Image_404 from "../../assets/svg/404/404.svg";

const NoMatch = () => {
  return (
    <div style={{ color: "white", height: "100vh" }}>
      <p>От халепа, тут немає чого дивитися</p>
      <img src={Image_404} alt="" />
      <Link to="/">Повернутися на головну</Link>
    </div>
  );
};

export { NoMatch };
