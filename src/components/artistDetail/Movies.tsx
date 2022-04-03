import React from "react";
import { YoutubeEmbed } from "../Video/YoutubeEmbed";
import { ArtistsDetailContent } from "./_artistDetailStyles";

const Movies = () => {
  return (
    <ArtistsDetailContent>
      <h1>Movies</h1>
      <YoutubeEmbed embedId="poNUrIBcMqg" />
    </ArtistsDetailContent>
  );
};

export { Movies };
