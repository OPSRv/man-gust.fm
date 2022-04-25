import React from "react";
import styled from "styled-components";

const VideoResponsive = styled.div`
  width: 100%;
  min-height: 300px;
  z-index: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: white;
  iframe {
    border-radius: 5px;
    min-width: 300px;
    min-height: 400px;
    height: auto;
    width: 95%;
  }
`;

const YoutubeEmbed = ({ embedId, name }) => (
  <VideoResponsive>
    <h1>{name}</h1>
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
