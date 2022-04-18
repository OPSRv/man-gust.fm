import styled from "styled-components";
import TopLogo from "../../assets/img/Artists/ArtistDetail/logoband.jpg";

export const ArtistsDetailWrapper = styled.div`
  width: 100%;
  color: white;
`;

export const ArtistsLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: no-repeat center/100% url(${TopLogo});
  width: 100%;
  opacity: 0.9;
  img {
    width: 40%;
    border-radius: 50%;
  }
`;
export const ArtistsLogoTextWrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

export const ArtistsDetailText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: #494949ae;
  h3 {
    margin: 0;
    font-size: calc(16px + 4 * ((100vw - 320px) / (2556 - 320)));
  }
  p {
    margin: 0;
    font-size: calc(10px + 4 * ((100vw - 320px) / (2556 - 320)));
  }
`;

export const ArtistsNavBarIcons = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 50%;
  box-shadow: 0 0 2px ${(props) => props.shadow_center},
      0 0 5px ${(props) => props.shadow_middle},
      0 0 7px ${(props) => props.shadow_outside}};
  &:active {
    transform: scale(0.9);
  }
  &:hover {
    opacity: 1;
  }
`;

export const ArtistsLinkWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(68, 68, 68, 0.109);
  backdrop-filter: blur(5px);
`;
export const ArtistsLink = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  opacity: 0.8;
  transition: 1s all easy;
  img {
    cursor: pointer;
    padding-right: 15px;
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.2s ease-out;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  a {
    cursor: pointer;
    font-size: calc(12px + 2 * ((100vw - 320px) / (2556 - 320)));
    margin-right: 5%;
    &:first-child {
      margin-left: 15px;
    }
    &:active {
      transform: scale(0.9);
    }
    &:hover {
      opacity: 1;
    }
  }
`;
export const ArtistsSocialLink = styled.div`
  height: ${(props) => props.height || "0px"};
  display: ${(props) => props.display || "none"};
  height: 65px;
  transition: all 1s ease;
  justify-content: space-around;
  align-items: center;
  a,
  span {
    cursor: pointer;
    font-size: calc(12px + 2 * ((100vw - 320px) / (2556 - 320)));
    margin-right: 2%;
    &:first-child {
      margin-left: 15px;
    }
    &:active {
      transform: scale(0.9);
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const ArtistsDetailContent = styled.div`
  width: 95%;
  min-height: 100vh;
`;
