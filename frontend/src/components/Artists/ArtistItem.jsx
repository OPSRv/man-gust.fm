import React from "react";

import { PerformerItem } from "./_ArtistsStyles";
import { Link } from "react-router-dom";

const ArtistItem = ({ musicband }) => {
  return (
    <Link to={`${musicband.name}`}>
      <PerformerItem>
        <img src={musicband.logo} alt={musicband.name} />
        <p>{musicband.name}</p>{" "}
      </PerformerItem>
    </Link>
  );
};

export { ArtistItem };
