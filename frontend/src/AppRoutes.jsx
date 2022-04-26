import React from "react";
import { Route, Routes } from "react-router-dom";
import Album from "./components/ArtistDetail/Album";
import AlbumDetail from "./components/ArtistDetail/AlbumDetail";
import AllTracks from "./components/ArtistDetail/AllTracks";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";
import Movies from "./components/ArtistDetail/Movies";
import PhotoGallery from "./components/ArtistDetail/PhotoGallery";
import Single from "./components/ArtistDetail/Single";
import Artists from "./components/Artists/Artists";
//components
import Content from "./components/Content/Content";
import NoMatch from "./components/NoMatch/NoMatch";
//pages
import DailyMix from "./pages/DailyMix";
import Discover from "./pages/Discover";
import FavoriteArtists from "./pages/FavoriteArtists";
import Library from "./pages/Library";
import LikedSongs from "./pages/LikedSongs";
import PlaylistsAdmin from "./pages/PlaylistsAdmin";
import Podcasts from "./pages/Podcasts";
import PodcastsDetail from "./pages/PodcastsDetail";
import Radio from "./pages/Radio";
import Settings from "./pages/Settings";
import Trends from "./pages/Trends";
import ScrollToTop from "./service-function/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route>
            <Route path="/" element={<Content />} />
            <Route path="/musicbands" element={<Artists />} />
            <Route
              path="/musicbands/:musicband_name"
              element={<ArtistDetail />}
            >
              <Route index element={<AllTracks />} />
              <Route path="single" element={<Single />} />
              <Route path="album" element={<Album />} />
              <Route path="album/:album_name" element={<AlbumDetail />} />
              <Route path="movies" element={<Movies />} />
              <Route path="gallery" element={<PhotoGallery />} />
            </Route>
            <Route path="/trends" element={<Trends />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/library" element={<Library />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/playlists" element={<PlaylistsAdmin />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route
              path="/podcasts/:podcast_name"
              element={<PodcastsDetail />}
            />
            <Route path="/daily-mix" element={<DailyMix />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
            <Route path="/favorite" element={<FavoriteArtists />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </>
  );
};

export default AppRoutes;
