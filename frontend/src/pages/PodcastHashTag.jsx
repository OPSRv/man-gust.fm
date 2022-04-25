import React from "react";

import { PodcastHashTagWrapper, ButtonHashTag } from "./_podcastStyles";

const PodcastHashTag = ({ podcasts, setPodcastTheme }) => {
  return (
    <>
      <PodcastHashTagWrapper>
        <ButtonHashTag onClick={() => setPodcastTheme("")}>#</ButtonHashTag>
        {podcasts &&
          podcasts
            .filter(
              (ele, ind) =>
                ind === podcasts.findIndex((elem) => elem.theme === ele.theme)
            )
            .map((filteredPodcast) => (
              <ButtonHashTag
                key={filteredPodcast.id}
                to={filteredPodcast.theme}
                onClick={() => setPodcastTheme(filteredPodcast.theme)}
              >
                #{filteredPodcast.theme}
              </ButtonHashTag>
            ))}
      </PodcastHashTagWrapper>
    </>
  );
};

export default PodcastHashTag;
