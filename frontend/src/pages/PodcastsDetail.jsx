import React from "react";
import { useParams } from "react-router";
import Spinner from "../components/Spiner/Spiner";
import { podcastAPI } from "../service-function/podcastService";
import { Container } from "../_GlobalStyle";
import { Center, FlexColumn } from "../components/Artists/_ArtistsStyles";
import {
  PodcastDetail,
  ImageWrapper,
  TextWrapper,
  AudioWrapper,
} from "./_podcastStyles";
import { LikeButtone } from "../components/PlayList/_PlayListStyles";

import Like from "../assets/svg/other/like.svg";
import UnLike from "../assets/svg/other/unlike.svg";

const PodcastsDetail = () => {
  const { podcast_name } = useParams();

  const {
    data: podcast_song,
    error,
    isLoading,
    refetch,
  } = podcastAPI.useGetPodcastSongQuery(podcast_name);

  const isLiked = (e, id) => {
    e.stopPropagation();
    console.log("like -", id);
  };

  return (
    <>
      <Container>
        <Center>
          <FlexColumn>
            {error && (
              <div>
                виникла помилка Podcasts
                <button onClick={() => refetch()}>Спробувати ще раз</button>
              </div>
            )}
            <h1>#{podcast_name}</h1>
            {isLoading ? (
              <Spinner />
            ) : (
              podcast_song.map((item) => (
                <PodcastDetail key={item.id}>
                  <ImageWrapper image={item.cover}></ImageWrapper>
                  <TextWrapper>
                    <h1>{item.podcast_song_name}</h1>
                    <h5>{item.description}</h5>
                    <h6>Тривалість: {item.duration}</h6>
                    <h6>#{item.release}</h6>
                    <AudioWrapper>
                      <audio src={item.audio} controls></audio>
                      <LikeButtone
                        src={item.is_fan ? Like : UnLike}
                        alt=""
                        onClick={(e) => isLiked(e, item.id)}
                      />
                    </AudioWrapper>
                  </TextWrapper>
                </PodcastDetail>
              ))
            )}
          </FlexColumn>
        </Center>
      </Container>
    </>
  );
};

export default PodcastsDetail;
