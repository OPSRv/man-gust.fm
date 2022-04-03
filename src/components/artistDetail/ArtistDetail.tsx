import { Outlet } from "react-router-dom";
import { Col } from "../Content/_ContentStyles";
import { ArtistDetailHeader } from "./ArtistDetailHeader";

const ArtistDetail = () => {
  return (
    <>
      <ArtistDetailHeader />
      <Col>
        <Outlet />
      </Col>
    </>
  );
};

export { ArtistDetail };
