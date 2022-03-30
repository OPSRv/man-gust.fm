import styled from "styled-components";
import Header from "../header/Header";
import { PlayList } from "../generic/PlayList";

import { Slider } from "../slider/Slider";

import { Artists } from "../artists/Artists";
import { ArtistDetail } from "../artistDetail/ArtistDetail";

const Col = styled.div`
  padding-top: 0;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Content = () => {
  return (
    <>
      <Col>
        <Header />
        <Slider />
        <Artists />
        <ArtistDetail />
        <PlayList />
      </Col>
    </>
  );
};

export default Content;
