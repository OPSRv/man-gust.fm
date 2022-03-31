import styled from "styled-components";

export const RecentPlaylistsWrapper = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const NotificationsHeader = styled.div`
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

export const RecentPlaylistsItem = styled.div`
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

export const RecentPlaylistsItems = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  span {
    font-size: calc(8px + 2 * ((100vw - 320px) / (2556 - 320)));
  }
`;
export const RecentPlaylistsImages = styled.img`
  width: 100%;
  min-width: 70px;
  max-width: 125px;
`;
