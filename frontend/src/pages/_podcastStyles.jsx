import styled from "styled-components";
import { keyframes } from "styled-components";

export const breatheAnimation = keyframes`
50%{
     border: solid 4px #1515152d;
}
`;

export const PodcastItemWrapper = styled.div`
  background-color: #1515152d;
  border: double 4px transparent;
  border-radius: 15px;
  margin-bottom: 20px;
  background-clip: content-box;
  display: flex;
  flex-flow: row nowrap;
  max-height: 300px;
  border: solid 4px transparent;
  &:hover {
    animation: ${breatheAnimation} 1.5s ease-in infinite;
  }
  &:active {
    transform: scale(0.989);
    background-color: #3636362c;
  }
`;
export const ImageWrapper = styled.div`
  background: url(${(props) => props.image});
  width: 300px;
  height: 300px;
  max-width: 30%;
  background-size: cover;
  border-radius: 15px 2px 2px 15px;
  background-position: center;
`;
export const TextWrapper = styled.div`
  white-space: normal;
  width: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: calc(5px + 14 * ((100vw - 320px) / (2556 - 320)));
  h1,
  h5,
  h6 {
    margin: 2px;
  }

  h1 {
    font-size: calc(22px + 4 * ((100vw - 320px) / (2556 - 320)));
  }
  h5 {
    cursor: pointer;
    font-size: calc(10px + 2 * ((100vw - 320px) / (2556 - 320)));
  }
  h6 {
    font-size: calc(10px + 6 * ((100vw - 320px) / (2556 - 320)));
  }
`;

export const PodcastDetail = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
  background: #00000014;

  border-radius: 15px;
`;
export const AudioWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
