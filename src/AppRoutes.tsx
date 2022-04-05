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
import { DailyMix } from "./pages/DailyMix";
import { Discover } from "./pages/Discover";
import { FavoriteArtists } from "./pages/FavoriteArtists";
import { Library } from "./pages/Library";
import { LikedSongs } from "./pages/LikedSongs";
import { Local } from "./pages/Local";
import { PlaylistsAdmin } from "./pages/PlaylistsAdmin";
import { Podcasts } from "./pages/Podcasts";
import { Settings } from "./pages/Settings";
import { Trends } from "./pages/Trends";

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
        {/* {transitions((props, item) => (
          <animated.div style={props}>

          </animated.div>
        ))} */}

        <Routes>
          <Route>
            <Route path="/" element={<Content />} />
            <Route path="/artist" element={<Artists />} />
            <Route path="/detail" element={<ArtistDetail />}>
              <Route index element={<AllTracks />} />
              <Route path="single" element={<Single />} />
              <Route path="album" element={<Album />} />
              <Route path="movies" element={<Movies />} />
            </Route>
            <Route path="/trends" element={<Trends />} />
            <Route path="/library" element={<Library />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/playlists" element={<PlaylistsAdmin />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/daily-mix" element={<DailyMix />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
            <Route path="/favorite" element={<FavoriteArtists />} />
            <Route path="/local" element={<Local />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
};

export { AppRoutes };
