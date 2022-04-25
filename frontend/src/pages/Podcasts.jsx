import React, { useState } from "react";
import { Center, FlexColumn } from "../components/Artists/_ArtistsStyles";
import Spinner from "../components/Spiner/Spiner";
import { podcastAPI } from "../service-function/podcastService";
import PodcastItem from "./PodcastItem";
import PodcastHashTag from "./PodcastHashTag";
import { ButtonHashTag, PodcastHashTagWrapper } from "./_podcastStyles";

const Podcasts = () => {
  const [theme, setPodcastTheme] = useState("");

  const {
    data: podcasts,
    error,
    isLoading,
    refetch,
  } = podcastAPI.useGetAllPodcastQuery(theme);

  return (
    <>
      <Center>
        <FlexColumn>
          <h1 onClick={() => refetch(setPodcastTheme(""))}>Подкасти</h1>
          {isLoading && <Spinner />}
          {error && (
            <div>
              виникла помилка Podcasts
              <button onClick={() => refetch(theme)}>Спробувати ще раз</button>
            </div>
          )}
          <PodcastHashTag
            podcasts={podcasts}
            setPodcastTheme={setPodcastTheme}
          />
          <PodcastItem podcasts={podcasts} />
        </FlexColumn>
      </Center>
    </>
  );
};

export default Podcasts;
