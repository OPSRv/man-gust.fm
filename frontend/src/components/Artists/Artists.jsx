import React, { useState } from "react";
import { musicBandAPI } from "../../service-function/musicBandService";
import Spinner from "../Spiner/Spiner";
import ArtistItem from "./ArtistItem";
import { Center, FlexColumn, ItemWrapper } from "./_ArtistsStyles";
import HashTag from "../HashTag/HashTag";

const Artists = () => {
  const [theme, setTheme] = useState("");

  const {
    data: musicbands,
    error,
    isLoading,
    refetch,
  } = musicBandAPI.useGetMusicBandsQuery(theme);

  return (
    <>
      <Center>
        <FlexColumn>
          <h1 onClick={() => refetch(setTheme(""))}>Виконавці</h1>
          {isLoading && <Spinner />}
          {error && (
            <div>
              виникла помилка Artists
              <button onClick={() => refetch()}>Спробувати ще раз</button>
            </div>
          )}
          <HashTag themeList={musicbands} setTheme={setTheme} />
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

export default Artists;
