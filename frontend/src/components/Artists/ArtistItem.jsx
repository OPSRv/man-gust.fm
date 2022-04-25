import React from "react";

import { PerformerItem } from "./_ArtistsStyles";
import { Link } from "react-router-dom";

const ArtistItem = ({ musicband }) => {
  return (
    <Link to={musicband.musicband_name}>
      <PerformerItem>
        <img src={musicband.logo} alt={musicband.musicband_name} />
        <p>{musicband.musicband_name}</p>{" "}
      </PerformerItem>
    </Link>
  );
};

export default ArtistItem;
