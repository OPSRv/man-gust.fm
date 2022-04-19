import React from "react";
import { AppRoutes } from "./AppRoutes";
import { StyledApp } from "./AppStyles";
import { Header } from "./components/Header/Header";
import { PanelRight } from "./components/PanelRight/PanelRight";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Container } from "./_GlobalStyle";
import { useSelector } from "react-redux";
import { selectCount } from "./store/reducers/musicBandSlice";

const App = () => {
  const count = useSelector(selectCount);
  console.log(count);
  return (
    <>
      <StyledApp>
        <Sidebar />
        <Container>
          <Header />
          <AppRoutes />
        </Container>
        <PanelRight />
      </StyledApp>
    </>
  );
};

export default App;
