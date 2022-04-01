import styled from "styled-components";
import Searh from "../../assets/svg/other/searh.svg";

export const NavBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
  height: 60px;
  padding-left: 5px;
  padding-right: 5px;
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: white;
  font-size: 15px;
  width: 50%;
  max-width: 500px;
  user-select: none;
  p {
    padding: calc(5px + (10 - 5) * ((100vw - 320px) / (2556 - 320)));
    color: white;
    font-weight: 500;
    cursor: pointer;
    &:nth-child(1) {
      padding-left: 0;
    }
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
`;
export const InputSearch = styled.input`
  height: 25px;
  background: #2c0000;
  border-radius: 50px;
  outline: none;
  border: 0;
  color: white;
  font-size: 18px;
  padding: 7px 15px;
  width: 35%;
  max-width: 450px;
  background-image: url(${Searh});
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: right 15px bottom 52%;
  transition: 1s;
  opacity: 0.4;
  &:focus-visible {
    opacity: 1;
    width: 80%;
    background-position: right -100px bottom 52%;
  }
`;
