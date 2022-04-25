import React from "react";
import { useOutletContext } from "react-router-dom";
import { songAPI } from "../../service-function/songService";
import Spinner from "../Spiner/Spiner";
import PhotoItem from "./PhotoItem";

const PhotoGallery = () => {
  const name = useOutletContext();
  const {
    data: photos,
    isLoading,
    error,
    refetch,
  } = songAPI.endpoints.getAllPhoto.useQuery(name);

  return (
    <>
      {" "}
      {error && (
        <div>
          виникла помилка PhotoGallery
          <button onClick={() => refetch()}>Спробувати ще раз</button>
        </div>
      )}
      {isLoading ? <Spinner /> : <PhotoItem photos={photos} />}
    </>
  );
};
export default PhotoGallery;
