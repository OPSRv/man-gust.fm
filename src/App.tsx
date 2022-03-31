//components
import Content from "./components/content/Content";

import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./components/no-match/no-match";

import { Layout } from "./components/Layout/Layout";
import { Artists } from "./components/artists/Artists";
import { ArtistDetail } from "./components/artistDetail/ArtistDetail";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Content />} />
        <Route path="/artist" element={<Artists />} />
        <Route path="/artist:name" element={<ArtistDetail />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default App;
