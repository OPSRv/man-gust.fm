//components
import Sidebar from "./components/sidebar/Sidebar";
import PanelRight from "./components/PanelRight/PanelRight";
import Content from "./components/content/Content";

import { StyledApp } from "./_AppStyles";

const App = () => {
  return (
    <StyledApp>
      <Sidebar />
      <Content />
      <PanelRight />
    </StyledApp>
  );
};

export default App;
