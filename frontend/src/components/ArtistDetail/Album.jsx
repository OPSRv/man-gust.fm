import React from "react";
import { useOutletContext } from "react-router-dom";
import { songAPI } from "../../service-function/songService";
import { Container } from "../../_GlobalStyle";
import { Center, FlexColumn, ItemWrapper } from "../Artists/_ArtistsStyles";
import Spinner from "../Spiner/Spiner";
import AlbumItems from "./AlbumItems";

const Album = () => {
  const album_name = useOutletContext();
  const {
    data: albums,
    isLoading,
    error,
    refetch,
  } = songAPI.endpoints.getAlbum.useQuery(album_name);

  return (
    <>
      {error && (
        <div>
          виникла помилка Album
          <button onClick={() => refetch()}>Спробувати ще раз</button>
        </div>
      )}{" "}
      <Container>
        <Center>
          <FlexColumn>
            <ItemWrapper>
              {isLoading ? <Spinner /> : <AlbumItems albums={albums} />}
            </ItemWrapper>{" "}
          </FlexColumn>
        </Center>{" "}
      </Container>
    </>
  );
};

export default Album;
