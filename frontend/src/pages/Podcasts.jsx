import React, { useState } from "react";
import { Center, FlexColumn } from "../components/Artists/_ArtistsStyles";
import Spinner from "../components/Spiner/Spiner";
import { podcastAPI } from "../service-function/podcastService";
import PodcastItem from "./PodcastItem";
import HashTag from "../components/HashTag/HashTag";
import { ButtonHashTag, PodcastHashTagWrapper } from "./_podcastStyles";

const Podcasts = () => {
  const [theme, setTheme] = useState("");

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
          <h1 onClick={() => refetch(setTheme(""))}>Подкасти</h1>
          {isLoading && <Spinner />}
          {error && (
            <div>
              виникла помилка Podcasts
              <button onClick={() => refetch(theme)}>Спробувати ще раз</button>
            </div>
          )}
          <HashTag themeList={podcasts} setTheme={setTheme} />
          <PodcastItem podcasts={podcasts} />
        </FlexColumn>
      </Center>
    </>
  );
};

export default Podcasts;
