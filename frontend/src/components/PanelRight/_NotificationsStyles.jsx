import styled from "styled-components";

export const Notification = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  max-height: 220px;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NotificationsHeader = styled.div`
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
export const NotificationsItemWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const NotificationsItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 12px;
`;

export const NotificationsText = styled.div`
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

export const IconsWrapper = styled.div`
  min-width: calc(35px + 14 * ((100vw - 320px) / (2556 - 320)));
  min-height: calc(35px + 14 * ((100vw - 320px) / (2556 - 320)));
  background: #631a1a;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.img`
  width: ${(props) => props.width || "45%"};
  align-self: center;
`;
