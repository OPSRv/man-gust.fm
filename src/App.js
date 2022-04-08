import { Sidebar } from "./components/Sidebar/Sidebar";
import { PanelRight } from "./components/PanelRight/PanelRight";
import { Header } from "./components/Header/Header";
import { ThemeData } from "./fake-data/theme-data";
import { Container } from "./_GlobalStyle";

import { AppRoutes } from "./AppRoutes";
import styled from "styled-components";
import { useState } from "react";

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

const RangeInput = styled.input`
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
  justify-content: space-between;
  background: ${(props) => props.background};
  border-radius: 50%;
  height: 15px;
  width: 15px;
  margin: 5px;
  cursor: pointer;
`;

const App = () => {
  const [ToogleTheme, setToogleTheme] = useState(
    "linear-gradient( to top, #110014  10%, #531d1d 100%)"
  );
  const [hue, setHue] = useState(314);
  return (
    <>
      <StyledApp hue={hue} background={ToogleTheme}>
        <Sidebar />
        <Container>
          <ThemeWrapper>
            {ThemeData.map((item) => (
              <ThemeCircle
                key={item.id}
                dataset={item.id}
                background={item.css}
                onClick={(e) => setToogleTheme(item.css)}
              ></ThemeCircle>
            ))}
          </ThemeWrapper>
          <RangeInput
            type="range"
            value={hue}
            onChange={(e) => setHue(e.target.value)}
            min="0"
            max="360"
            step="1"
          />
          <Header />
          <AppRoutes />
        </Container>
        <PanelRight />
      </StyledApp>
    </>
  );
};

export default App;
