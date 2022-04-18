import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  /* background: linear-gradient(
    to top,
    hsl(${(props) => props.hue}, 90%, 65%),
    hsl(${(props) => props.hue - 105}, 14%, 25%)
  ); */
  transition: 2s;
  background: ${(props) => props.background};
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
  }
`;

export const RangeInput = styled.input`
  width: "100%";
`;

export const ThemeWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  background: ${(props) => props.background};
`;

export const ThemeCircle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 50%;
  height: 45px;
  width: 45px;
  margin: 5px;
  color: #eee;
  cursor: pointer;
  span {
    background: #00000055;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }
`;
