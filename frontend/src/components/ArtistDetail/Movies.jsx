import React from "react";
import { useParams } from "react-router";
import { songAPI } from "../../service-function/songService";
import Spinner from "../Spiner/Spiner";
import YoutubeEmbed from "../Video/YoutubeEmbed";
import { ArtistsDetailContent } from "./_artistDetailStyles";

const Movies = () => {
  const { musicband_name } = useParams();

  const {
    data: videoData,
    isLoading,
    error,
    refetch,
  } = songAPI.endpoints.getAllVideo.useQuery(musicband_name);
  return (
    <ArtistsDetailContent>
      <>
        {error && (
          <div>
            виникла помилка Movies
            <button onClick={() => refetch()}>Спробувати ще раз</button>
          </div>
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          videoData &&
          videoData.map((video) => (
            <YoutubeEmbed
              key={video.id}
              embedId={video.video_url}
              name={video.video_name}
            />
          ))
        )}
      </>
    </ArtistsDetailContent>
  );
};

export default Movies;
