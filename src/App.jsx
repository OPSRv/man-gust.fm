import { Sidebar } from "./components/Sidebar/Sidebar";
import { PanelRight } from "./components/PanelRight/PanelRight";
import { Header } from "./components/Header/Header";

import { Col } from "./components/Content/_ContentStyles";
import { AppRoutes } from "./AppRoutes";
import styled from "styled-components";
import { useState } from "react";

export const StyledApp = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
    background: linear-gradient(
    20deg,
    hsl(${(props) => props.hue}, 60%, 65%),
    hsl(${(props) => props.hue - 305}, 64%, 60%)
  );
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
  }
`;

const RangeInput = styled.input.attrs({
  type: "range",
  width: "100%",
})``;

const App = () => {
  const [hue, setHue] = useState(240);

  return (
    <>
      <StyledApp hue={hue}>
        <Sidebar />
        <Col>
          <RangeInput
            value={hue}
            onChange={(e) => setHue(e.target.value)}
            min="0"
            max="360"
          />
          <Header />
          <AppRoutes />
        </Col>
        <PanelRight />
      </StyledApp>
    </>
  );
};

export default App;
