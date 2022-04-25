import React from "react";
//components
import PlayList from "../PlayList/PlayList";
import Slider from "../Slider/Slider";
import Artists from "../Artists/Artists";

const Content = () => {
  return (
    <>
      <Slider />
      <Artists />
      <PlayList />
    </>
  );
};

export default Content;
