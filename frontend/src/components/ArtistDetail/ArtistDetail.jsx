import React from "react";
import { Outlet } from "react-router-dom";
import { ArtistDetailHeader } from "./ArtistDetailHeader";
import { Container } from "../../_GlobalStyle";
const ArtistDetail = () => {
  return (
    <>
      <ArtistDetailHeader />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export { ArtistDetail };
