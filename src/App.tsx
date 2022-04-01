//components
import Content from "./components/content/Content";

import { Routes, Route, useLocation } from "react-router-dom";
import { NoMatch } from "./components/no-match/no-match";

import { Artists } from "./components/artists/Artists";
import { ArtistDetail } from "./components/artistDetail/ArtistDetail";

import { useTransition, animated } from "react-spring";
import Sidebar from "./components/sidebar/Sidebar";
import PanelRight from "./components/PanelRight/PanelRight";
import Header from "./components/header/Header";
import { StyledApp } from "./_AppStyles";
import { Col } from "./components/content/_ContentStyles";
import ScrollToTop from "./service-function/ScrollToTop";

const App: React.FC = (): JSX.Element => {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
    from: { opacity: 0, transition: "1s all easy" },
    enter: { opacity: 1, transition: "1s all easy" },
    delay: 300,
  });

  return (
    <>
      <StyledApp>
        <Sidebar />
        <Col>
          <Header />
          <ScrollToTop>
            {transitions((props, item) => (
              <animated.div style={props}>
                <Routes location={item}>
                  <Route>
                    <Route path="/" element={<Content />} />
                    <Route path="/artist" element={<Artists />} />
                    <Route path="/artist:name" element={<ArtistDetail />} />
                    <Route path="*" element={<NoMatch />} />
                  </Route>
                </Routes>
              </animated.div>
            ))}
          </ScrollToTop>
        </Col>
        <PanelRight />
      </StyledApp>
    </>
  );
};

export default App;
