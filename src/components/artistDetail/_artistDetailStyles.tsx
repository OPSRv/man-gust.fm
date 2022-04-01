import styled from "styled-components";
import TopLogo from "../../assets/img/Artists/ArtistDetail/logoband.jpg";

export const ArtistsDetailWrapper = styled.div`
  width: 100%;
  color: white;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 1000px) {
    top: 50px;
  }
`;

export const ArtistsLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: no-repeat center/100% url(${TopLogo});
  width: 100%;
  img {
    width: 40%;
    border-radius: 50%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;
export const ArtistsLogoTextWrapper = styled.div`
  width: 50%;
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
  @media (max-width: 1000px) {
    width: 40%;
  }
  height: 35px;
  background: #49494942;
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  background-image: linear-gradient(to top, #351212d3 0%, #531d1dcc 100%);
  margin-bottom: 30px;
`;
export const ArtistsLink = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
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
