import React from "react";
import { useParams } from "react-router";
import { songAPI } from "../../service-function/songService";
import PlayList from "../PlayList/PlayList";
import Spinner from "../Spiner/Spiner";
const AlbumDetail = () => {
  const { album_name } = useParams();

  const {
    data: album,
    isLoading,
    error,
    refetch,
  } = songAPI.endpoints.getAlbumID.useQuery(album_name);

  return (
    <>
      {error && (
        <div>
          виникла помилка Single
          <button onClick={() => refetch()}>Спробувати ще раз</button>
        </div>
      )}
      {isLoading ? <Spinner /> : <PlayList tracks={album.song} />}
    </>
  );
};

export default AlbumDetail;
