import React from "react";
import { TablePlayList, Cover, LikeButtone } from "./_PlayListStyles";
import Like from "../../assets/svg/other/like.svg";
import UnLike from "../../assets/svg/other/unlike.svg";

const PlayList = ({ tracks }) => {
  let count = 1;

  const isLiked = (e, track) => {
    e.stopPropagation();
    console.log("like -", track.id);
  };
  const PlayTrack = (track) => {
    console.log(track);
  };

  return (
    <>
      <TablePlayList>
        <tbody>
          <tr>
            <td>#</td>
            <td></td>
            <td>Виконавець</td>
            <td>Назва пісні</td>
            <td>Тривалість</td>
            <td>Вподобання</td>
          </tr>

          {tracks &&
            tracks.map((track) => (
              <tr key={track.id} onClick={() => PlayTrack(track)}>
                <td>{count++}</td>
                <td>
                  <Cover src={track.song_image} alt="cover" />
                </td>
                <td>{track.musicband.musicband_name}</td>
                <td>{track.song_name}</td>
                <td>{track.duration}</td>
                <td>
                  <LikeButtone
                    src={track.is_fan ? Like : UnLike}
                    alt=""
                    onClick={(e) => isLiked(e, track)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </TablePlayList>
    </>
  );
};

export default PlayList;
