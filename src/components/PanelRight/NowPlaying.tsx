//components
import PlayerController from "./PlayerController";
//styled
import {
  NowPlay,
  NowPlayingImages,
  NowWrapper,
  NameBand,
} from "./_PanelRightStyles";
//img
import NowPlayingImg from "../../assets/img/NowPlaying/nowPlayning.png";

const NowPlaying = () => {
  return (
    <NowPlay>
      <p>Зараз грає</p>
      <NowPlayingImages src={NowPlayingImg} />
      <NowWrapper>
        <NameBand>
          <h3>Beat It</h3>
          <h6>Michael Jackson</h6>
        </NameBand>
        <PlayerController />
      </NowWrapper>
    </NowPlay>
  );
};

export { NowPlaying };
