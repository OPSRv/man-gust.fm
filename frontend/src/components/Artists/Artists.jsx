import React from "react";
import {
  FlexColumn,
  ItemWrapper,
  PerformerItem,
  Center,
} from "./_ArtistsStyles";
import axios from "axios";
// import { ArtistsList } from "../../fake-data/Mock-ArtistsList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "../Spiner/Spiner";

import api from "../../service-function/api";

const Artists = () => {
  const [loading, setLoading] = useState(true);
  const [artistsList, setArtistsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://127.0.0.1:8000/api/v1/musicbands/"
        );
        setArtistsList(response);
        console.log(response, "response");
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Center>
        <FlexColumn>
          <h1>Виконавці</h1>
          {loading && <Spinner />}
          {!loading && (
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
          )}
        </FlexColumn>
      </Center>
    </>
  );
};

export { Artists };
