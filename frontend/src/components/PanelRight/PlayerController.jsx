import React, { useEffect, useState } from "react";
//img
import Back from "../../assets/svg/player/back.svg";
import Next from "../../assets/svg/player/next.svg";
import Pause from "../../assets/svg/player/pause.svg";
import Play from "../../assets/svg/player/play.svg";
import Random from "../../assets/svg/player/random.svg";
import Repeat from "../../assets/svg/player/repeat.svg";
import Volume from "../../assets/svg/player/volume.svg";
import VolumeMute from "../../assets/svg/player/volumeMute.svg";
//styled
import { PlayerControl, VolumeControl } from "./_NowPlayingStyles";

const VolumeRange = {
  max: 1,
  min: 0,
};

const PlayerController = () => {
  const url =
    "http://127.0.0.1:8000/media/music_band/KLEFT/songs/%D0%94%D0%BE%D1%89%D1%96/My_Friend_Pedro_OST_Level_2___buttercubic_stuff.mp3";

  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const [value, setValue] = useState("0.5");
  const [volume, setVolume] = useState(true);

  const toggleVolumeMute = () => {
    if (value !== "0") {
      setVolume(!volume);
    }
  };

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / VolumeRange.max}% 100%` };
  };

  const togglePlay = () => setPlaying(!playing);

  useEffect(() => {
    // if (!audio.paused) {
    //   alert("audio played");
    // }
    // console.log(audio.duration / 60, "duration");

    !volume ? (audio.volume = VolumeRange.min) : (audio.volume = value);
    playing ? audio.play() : audio.pause();
  }, [playing, audio, value, volume]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return (
    <>
      <PlayerControl>
        <img src={Repeat} alt="back" />
        <div>
          <img src={Back} alt="back" />
          <span onClick={togglePlay}>
            <img
              src={playing ? Pause : Play}
              alt={playing ? "Pause" : "Play"}
            />
          </span>
          <img src={Next} alt="next" />
        </div>
        <img src={Random} alt="back" />
      </PlayerControl>

      <VolumeControl>
        <input
          type="range"
          min={VolumeRange.min}
          step="0.01"
          max={VolumeRange.max}
          onChange={(e) => setValue(e.target.value)}
          style={getBackgroundSize()}
          value={value}
        />
        <img
          src={volume && value !== "0" ? Volume : VolumeMute}
          alt="volume"
          onClick={toggleVolumeMute}
        />
      </VolumeControl>
    </>
  );
};

export default PlayerController;
