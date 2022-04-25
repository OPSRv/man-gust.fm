import React from "react";
import { useOutletContext } from "react-router-dom";
import { songAPI } from "../../service-function/songService";
import PlayList from "../PlayList/PlayList";
import Spinner from "../Spiner/Spiner";

const AllTracks = () => {
  const song_name = useOutletContext();
  const {
    data: tracks,
    isLoading,
    error,
    refetch,
  } = songAPI.endpoints.getAllSong.useQuery(song_name);

  return (
    <>
      {error && (
        <div>
          виникла помилка AllTracks
          <button onClick={() => refetch()}>Спробувати ще раз</button>
        </div>
      )}
      {isLoading ? <Spinner /> : <PlayList tracks={tracks} />}
    </>
  );
};

export default AllTracks;
