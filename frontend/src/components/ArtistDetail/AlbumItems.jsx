import React from "react";
import { Link } from "react-router-dom";
import { PerformerItem } from "../Artists/_ArtistsStyles";

const AlbumItems = ({ albums }) => {
  return (
    <>
      {albums.map((album) => (
        <Link key={album.id} to={album.album_name}>
          <PerformerItem>
            <img src={album.album_image} alt="" />
            <p>{album.album_name}</p>
          </PerformerItem>
        </Link>
      ))}
    </>
  );
};

export default AlbumItems;
