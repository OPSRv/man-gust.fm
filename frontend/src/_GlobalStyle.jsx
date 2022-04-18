import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    scrollbar-width: auto;
    scrollbar-color: #531d1d #1c1c1c;
}
*::-webkit-scrollbar {
    width: 7px;
    display: none;
}

*::-webkit-scrollbar-track {
    background: #1c1c1c;
}

*::-webkit-scrollbar-thumb {
    background-color: #531d1d;
    border-radius: 5px;
    border: 0px none #1c1c1c;
}
html{
  background-color: #1a1a1a;
}
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 300;
    letter-spacing: 1px;
    background: linear-gradient( to top, #110014  10%, #531d1d 100%);
  }
  a{
  color: white;
  text-decoration: none;
  white-space: nowrap;
}
`;
export const Container = styled.div`
  padding-top: 0;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 100vh;
`;
