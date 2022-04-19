import React from "react";
import { musicBandAPI } from "../../service-function/musicBandService";
import { Spinner } from "../Spiner/Spiner";
import { ArtistItem } from "./ArtistItem";
import { Center, FlexColumn, ItemWrapper } from "./_ArtistsStyles";

const Artists = () => {
  const {
    data: musicbands,
    error,
    isLoading,
    refetch,
  } = musicBandAPI.useGetMusicBandsQuery();

  return (
    <>
      <Center>
        <FlexColumn>
          <h1>Виконавці</h1>
          {isLoading && <Spinner />}
          {error && (
            <div>
              виникла помилка
              <button onClick={() => refetch()}>Спробувати ще раз</button>
            </div>
          )}
          <ItemWrapper>
            {musicbands &&
              musicbands.map((musicband) => (
                <ArtistItem musicband={musicband} key={musicband.id} />
              ))}
          </ItemWrapper>
        </FlexColumn>
      </Center>
    </>
  );
};

export { Artists };
