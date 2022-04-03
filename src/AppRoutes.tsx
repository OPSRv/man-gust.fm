import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./service-function/ScrollToTop";
import { useTransition, animated } from "react-spring";
//components
import Content from "./components/Content/Content";
import { NoMatch } from "./components/NoMatch/NoMatch";
import { Artists } from "./components/Artists/Artists";
import { ArtistDetail } from "./components/ArtistDetail/ArtistDetail";
import { AllTracks } from "./components/ArtistDetail/AllTracks";
import { Single } from "./components/ArtistDetail/Single";
import { Album } from "./components/ArtistDetail/Album";
import { Movies } from "./components/ArtistDetail/Movies";

const AppRoutes = () => {
  const location = useLocation();

  const transitions = useTransition(location.pathname, {
    from: { opacity: 1, transition: "1s all easy", width: "100%" },
    enter: { opacity: 1, transition: "1s all easy", width: "100%" },
    delay: 300,
  });

  return (
    <>
      <ScrollToTop>
        {transitions((props, item) => (
          <animated.div style={props}>
            <Routes location={item}>
              <Route>
                <Route path="/" element={<Content />} />
                <Route path="/artist" element={<Artists />} />
                <Route path="/artist-detail" element={<ArtistDetail />}>
                  <Route index element={<AllTracks />} />
                  <Route path="single" element={<Single />} />
                  <Route path="album" element={<Album />} />
                  <Route path="movies" element={<Movies />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </animated.div>
        ))}
      </ScrollToTop>
    </>
  );
};

export { AppRoutes };
