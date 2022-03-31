import styled from "styled-components";

export const SideBar = styled.div`
  background-color: #1a1a1ac1;
  color: #f6f6f6;
  width: 15%;
  min-width: 250px;
  max-width: 354px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding-right: calc(15px + (15 - 5) * ((100vw - 320px) / (2556 - 320)));
  padding-left: calc(15px + (15 - 5) * ((100vw - 320px) / (2556 - 320)));
  overflow-y: hidden;
  height: 100vh;
  position: sticky;
  top: 0;
  /* transition: 1s; */
  box-sizing: border-box;

  @media (max-width: 1000px) {
    /* display: none; */
    background-color: #1a1a1a;
    min-width: 250px;
    max-width: 100%;
    width: 100%;
    position: sticky;
    bottom: 0;
    height: 70px;
    padding: 0;
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column nowrap;
  justify-content: space-around;
  @media (max-width: 1000px) {
    height: 100%;
  }
`;
