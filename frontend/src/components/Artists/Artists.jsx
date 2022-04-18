import React from "react";
import {
  FlexColumn,
  ItemWrapper,
  PerformerItem,
  Center,
} from "./_ArtistsStyles";

import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Spinner } from "../Spiner/Spiner";

const Artists = () => {
  // const [loading, setLoading] = useState(true);
  // const [artistsList, setArtistsList] = useState([]);
  const artistsList = [];
  return (
    <>
      <Center>
        <FlexColumn>
          <h1>Виконавці</h1>
          {/* {loading && <Spinner />}
          {!loading && ( */}
          <ItemWrapper>
            {artistsList.map((item) => (
              <Link to={`${item.name}`} key={item.id}>
                <PerformerItem>
                  <img src={item.logo} alt={item.name} />
                  <p>{item.name}</p>{" "}
                </PerformerItem>
              </Link>
            ))}
          </ItemWrapper>
          {/* )} */}
        </FlexColumn>
      </Center>
    </>
  );
};

export { Artists };
