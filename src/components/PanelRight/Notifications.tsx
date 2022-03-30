import styled from "styled-components";
import Options from "../../assets/svg/notifications/options.svg";

import NewMusic from "../../assets/svg/notifications/new_music.svg";
import PlaylistAdded from "../../assets/svg/notifications/playlist_added.svg";

const Notification = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  max-height: 220px;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const NotificationsHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  font-size: calc(12px + 4 * ((100vw - 320px) / (2556 - 320)));
  padding-bottom: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
  span {
    font-weight: 500;
  }
  img {
    width: 14px;
    cursor: pointer;
  }
`;
const NotificationsItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const NotificationsItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 12px;
`;

const NotificationsText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin-left: 5px;
  font-size: calc(12px + 4 * ((100vw - 320px) / (2556 - 320)));
  font-weight: 300;
  padding-left: 10px;
  span:nth-last-child(odd) {
    font-size: calc(10px + 2 * ((100vw - 320px) / (2556 - 320)));
    font-weight: 300;
  }
`;

const IconsWrapper = styled.div`
  min-width: calc(35px + 14 * ((100vw - 320px) / (2556 - 320)));
  min-height: calc(35px + 14 * ((100vw - 320px) / (2556 - 320)));
  background: #631a1a;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Icons = styled.img`
  width: ${(props) => props.width || "45%"};
  align-self: center;
`;

const Notifications = () => {
  return (
    <Notification>
      <NotificationsHeader>
        <span>Notifications</span>
        <img src={Options} alt="options" />
      </NotificationsHeader>
      <NotificationsItemWrapper>
        {NotificationsList.map((item) => (
          <NotificationsItem key={item.id}>
            <IconsWrapper>
              <Icons src={item.icon} alt={item.text} />
            </IconsWrapper>
            <NotificationsText>
              <span>{item.text}</span>
              <span>{item.count}</span>
            </NotificationsText>
          </NotificationsItem>
        ))}
      </NotificationsItemWrapper>
    </Notification>
  );
};

export { Notifications };

const NotificationsList = [
  {
    id: 1,
    text: "Playlist Added",
    count: "200 songs",
    icon: `${PlaylistAdded}`,
  },
  {
    id: 2,
    text: "Playlist Shared",
    count: "To 8 users",
    icon: `${PlaylistAdded}`,
  },
  {
    id: 3,
    text: "New music",
    count: "Beat It - Michael Jackson",
    icon: `${NewMusic}`,
  },
];
