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
export const ArtistsNavBar = styled.div`
  width: 30%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 10;
  height: 35px;
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1000px) {
    top: 50px;
  }
  @media (max-width: 1000px) {
    width: 40%;
  }
  img {
    width: 20px;
    cursor: pointer;
    opacity: 0.8;
    &:active {
      transform: scale(0.9);
    }
    &:hover {
      opacity: 1;
    }
  }
`;
export const ArtistsLinkWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background-color: rgba(153, 23, 23, 0.306);
  backdrop-filter: blur(5px);
  margin-bottom: 30px;
`;
export const ArtistsLink = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 30%;
  align-items: center;
  opacity: 0.8;
  a {
    cursor: pointer;
    font-size: calc(12px + 2 * ((100vw - 320px) / (2556 - 320)));
    margin-right: 10%;
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