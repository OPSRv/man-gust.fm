import { Outlet } from "react-router-dom";
import { StyledApp } from "../../_AppStyles";
import { Col } from "../content/_ContentStyles";

import Header from "../header/Header";
import PanelRight from "../PanelRight/PanelRight";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => (
  <>
    <StyledApp>
      <Sidebar />
      <Col>
        <Header />
        <Outlet />
      </Col>
      <PanelRight />
    </StyledApp>
  </>
);
export { Layout };
