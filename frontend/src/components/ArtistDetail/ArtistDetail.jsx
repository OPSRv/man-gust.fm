import React from "react";
import { Outlet } from "react-router-dom";
import ArtistDetailHeader from "./ArtistDetailHeader";
import { Container } from "../../_GlobalStyle";
import { musicBandAPI } from "../../service-function/musicBandService";
import { useParams } from "react-router";
import Spinner from "../Spiner/Spiner";

const ArtistDetail = () => {
  const { musicband_name } = useParams();
  const {
    data: musicBandData,
    isLoading,
    error,
    refetch,
  } = musicBandAPI.endpoints.getMusicBandID.useQuery(musicband_name);

  return (
    <>
      {error && (
        <div>
          виникла помилка ArtistDetail
          <button onClick={() => refetch()}>Спробувати ще раз</button>
        </div>
      )}
      <ArtistDetailHeader musicBandData={musicBandData} isLoading={isLoading} />
      <Container>
        {isLoading ? <Spinner /> : <Outlet context={musicband_name} />}
      </Container>
    </>
  );
};

export default ArtistDetail;
