import React from "react";
import { Link } from "react-router-dom";

import {
  PodcastItemWrapper,
  ImageWrapper,
  TextWrapper,
} from "./_podcastStyles";

const PodcastItem = ({ podcasts }) => {
  return (
    <>
      {podcasts &&
        podcasts.map((podcast) => (
          <Link key={podcast.id} to={podcast.podcast_name}>
            <PodcastItemWrapper>
              <ImageWrapper image={podcast.image}></ImageWrapper>
              <TextWrapper>
                <span>
                  <h1>{podcast.podcast_name}</h1>
                  <h5>#{podcast.theme}</h5>
                </span>
                <h6>{podcast.description}</h6>
              </TextWrapper>
            </PodcastItemWrapper>
          </Link>
        ))}
    </>
  );
};

export default PodcastItem;
