import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  width: 95%;
  margin-top: 5%;
`;
const GridImage = styled.img`
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  border-radius: 5px;
`;

const PhotoItem = ({ photos }) => {
  return (
    <Grid>
      {photos.map((photo) => (
        <GridImage src={photo.photo} key={photo.id} />
      ))}
    </Grid>
  );
};

export default PhotoItem;
