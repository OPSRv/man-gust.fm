import styled from "styled-components";

export const NowPlay = styled.div`
  user-select: none;
  background-color: #4f4e4e4f;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
  max-width: 250px;
  max-height: 290px;
  align-self: center;
  border-radius: 15px;
  height: 33%;
  box-sizing: border-box;
  padding: 2%;
  z-index: 3;

  p {
    font-size: calc(12px + 2 * ((100vw - 320px) / (2556 - 320)));
    @media (max-width: 1000px) {
      display: none;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    min-height: 100%;

    border-radius: 0;
    padding: 10px;
    display: flex;
    flex-flow: row nowrap;
  }
`;

export const NowPlayingImages = styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  width: 80%;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    width: 80px;
    padding-right: 5px;
  }
  @media (max-width: 460px) {
    display: none;
  }
`;
export const NowWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 50%;
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: 100%;
  }
`;
export const NameBand = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  @media (max-width: 1000px) {
    align-items: flex-start;
    align-self: center;
  }
  h3 {
    font-weight: 600;
    font-size: 12px;
    margin: 0;
  }
  h6 {
    margin: 0;
    font-weight: 300;
    font-size: 12px;
  }
`;
export const PlayerControl = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  min-width: 135px;
  max-width: 165px;
  cursor: pointer;
  @media (max-width: 1000px) {
    padding: 2%;
  }
  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    justify-content: space-between;
    width: 52%;
    cursor: pointer;
  }
  span {
    width: 31px;
    height: 31px;
    background: #480000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 1s;
    img {
      width: 13px;
      height: 13px;
    }
  }
  img {
    width: 15px;
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const VolumeControl = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  img {
    width: 13px;
    height: 13px;
    padding-left: 2px;
    opacity: 0.8;
    cursor: pointer;
  }
  input[type="range"] {
    cursor: pointer;
    -webkit-appearance: none;
    height: 3px;
    width: 100%;
    background: rgb(107, 107, 107);
    border-radius: 5px;
    background-image: linear-gradient(
      90deg,
      #800000 0%,
      #b70000 44%,
      #b40000 100%
    );
    background-repeat: no-repeat;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: #d46a6a;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb:hover {
    box-shadow: #d46a6a50 0px 0px 0px 8px;
  }

  input[type="range"]::-webkit-slider-thumb:active {
    box-shadow: #d46a6a50 0px 0px 0px 1px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
