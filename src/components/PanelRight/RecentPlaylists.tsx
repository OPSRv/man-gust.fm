import styled from "styled-components";
import Options from "../../assets/svg/notifications/options.svg";
import Doing from "../../assets/img/RecentPlaylists/rectangle10.png";
import Relax from "../../assets/img/RecentPlaylists/rectangle9.png";
import PopWorld from "../../assets/img/RecentPlaylists/rectangle8.png";
import ElectricPop from "../../assets/img/RecentPlaylists/rectangle7.png";
import Summer from "../../assets/img/RecentPlaylists/rectangle6.png";
import Sound from "../../assets/img/RecentPlaylists/rectangle5.png";

const RecentPlaylistsWrapper = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const NotificationsHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: calc(12px + 4 * ((100vw - 320px) / (2556 - 320)));
  align-items: center;
  width: 100%;
  padding-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
  span {
    font-weight: 500;
  }
  img {
    width: 14px;
    cursor: pointer;
  }
`;

const RecentPlaylistsItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2%;
  grid-row-gap: 0px;
  transition: 1s ease all;
  /* @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(1, 1fr);
    } */
  span {
    font-size: 9px;
    font-weight: 500;
  }
`;

const RecentPlaylistsItems = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  span {
    font-size: calc(10px + 2 * ((100vw - 320px) / (2556 - 320)));
    @media (max-width: 768px) {
      font-size: calc(10px + 2 * ((100vw - 320px) / (2556 - 320)));
    }
  }
`;
const RecentPlaylistsImages = styled.img`
  width: 100%;
  min-width: 70px;
  max-width: 125px;
`;

const RecentPlaylists = () => {
  const RecentPlaylists = [
    {
      id: 1,
      icon: `${Doing}`,
      name: `Doing the H...`,
    },
    {
      id: 2,
      icon: `${Relax}`,
      name: "To Relax",
    },
    {
      id: 3,
      icon: `${PopWorld}`,
      name: "Pop World",
    },
    {
      id: 4,
      icon: `${ElectricPop}`,
      name: "Electric Pop",
    },
    {
      id: 5,
      icon: `${Summer}`,
      name: "Summer",
    },
    {
      id: 6,
      icon: `${Sound}`,
      name: "Sounds of th...",
    },
  ];

  return (
    <>
      <RecentPlaylistsWrapper>
        <NotificationsHeader>
          <span>Recent Playlists</span>
          <img src={Options} alt="options" />
        </NotificationsHeader>
        <RecentPlaylistsItem>
          {RecentPlaylists.map((item) => (
            <RecentPlaylistsItems key={item.id}>
              <RecentPlaylistsImages src={item.icon} />
              <span>{item.name}</span>
            </RecentPlaylistsItems>
          ))}
        </RecentPlaylistsItem>
      </RecentPlaylistsWrapper>
    </>
  );
};

export { RecentPlaylists };
