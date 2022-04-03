import { Sidebar } from "./components/Sidebar/Sidebar";
import { PanelRight } from "./components/PanelRight/PanelRight";
import { Header } from "./components/Header/Header";
import { StyledApp } from "./_AppStyles";
import { Col } from "./components/Content/_ContentStyles";
import { AppRoutes } from "./AppRoutes";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <StyledApp>
        <Sidebar />
        <Col>
          <Header />
          <AppRoutes />
        </Col>
        <PanelRight />
      </StyledApp>
    </>
  );
};

export default App;
