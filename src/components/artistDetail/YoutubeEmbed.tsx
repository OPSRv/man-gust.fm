import React from "react";
import styled from "styled-components";

interface IYoutubeEmbedProps {
  embedId: string;
}

const VideoResponsive = styled.div`
  width: 100%;

  min-height: 400px;
  z-index: 5;
  iframe {
    min-width: 320px;
    min-height: 400px;
    height: 100;
    width: 100%;
  }
`;

const YoutubeEmbed: React.FC<IYoutubeEmbedProps> = ({ embedId }) => (
  <VideoResponsive>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </VideoResponsive>
);

export default YoutubeEmbed;
