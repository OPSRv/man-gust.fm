import styled from "styled-components";

export const SideBar = styled.div`
  background-color: #1a1a1ac1;
  color: #f6f6f6;
  width: 35%;
  min-width: 240px;
  max-width: 280px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-left: calc(20px + (50 - 20) * ((100vw - 320px) / (2556 - 320)));
  padding-top: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
  position: sticky;
  top: 0;
  overflow-y: hidden;
  height: 100vh;
  /* transition: 1s; */
  @media (max-width: 1000px) {
    flex-flow: column nowrap;

    width: 100%;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    z-index: 2;
    &:hover {
      padding-left: calc(20px + (50 - 20) * ((100vw - 320px) / (2556 - 320)));
      padding-top: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
      height: 100vh;
    }
  }
`;
export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const MenuHeaderText = styled.span`
  font-size: calc(10px + 4 * ((100vw - 320px) / (2556 - 320)));
  font-weight: 500;
  text-transform: uppercase;
  padding-bottom: 10px;
`;
export const MenuText = styled.span`
  font-size: calc(14px + 2 * ((100vw - 320px) / (2556 - 320)));
  opacity: 0.8;
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    opacity: 0.8;
  }
`;
export const MenuItems = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 8px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  font-weight: 700;
`;
export const LogoIcons = styled.img`
  width: calc(25px + 4 * ((100vw - 320px) / (2556 - 320)));
  padding-right: 20px;
`;
export const Icons = styled.img`
  width: ${(props) => props.width || "24px"};
  padding-right: 25px;
`;
export const TextColor = styled.span`
  color: ${(props) => props.color || "white"};
  font-size: calc(25px + 4 * ((100vw - 320px) / (2556 - 320)));
`;
