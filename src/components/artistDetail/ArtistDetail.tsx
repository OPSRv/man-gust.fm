//styles
import {
  ArtistsDetailWrapper,
  ArtistsLogo,
  ArtistsLogoTextWrapper,
  ArtistsDetailText,
  ArtistsNavBar,
  ArtistsLinkWrapper,
  ArtistsLink,
  ArtistsDetailContent,
} from "./_artistDetailStyles";

//icons
import Facebook from "../../assets/svg/social/facebook.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Telegram from "../../assets/svg/social/telegram.svg";
import Telephone from "../../assets/svg/social/telephone.svg";

//component

//fake
import { ArtistDetailList } from "../../fake-data/Mock-ArtistDetailList";
import { Link, Route, Routes } from "react-router-dom";
import { Album } from "./Album";
import { AllTracks } from "./AllTracks";
import { Movies } from "./Movies";
import { Single } from "./Single";
import { Col } from "../content/_ContentStyles";

const ArtistDetail = () => {
  return (
    <>
      <ArtistsDetailWrapper>
        <ArtistsLogo>
          <ArtistsLogoTextWrapper>
            <img src={ArtistDetailList.logo} alt="" />
            <ArtistsDetailText>
              <h3>{ArtistDetailList.name}</h3>
              <p>{ArtistDetailList.location}</p>
            </ArtistsDetailText>
          </ArtistsLogoTextWrapper>
        </ArtistsLogo>

        <ArtistsLinkWrapper>
          <ArtistsLink>
            <Link to={"/artist-detail"}>Всі пісні</Link>
            <Link to={"single"}>Сингли</Link>
            <Link to={"album"}>Альбоми</Link>
            <Link to={"movies"}>Кліпи</Link>
          </ArtistsLink>
          <ArtistsNavBar>
            <Link to={"https://github.com/"}>
              <img src={Facebook} alt="Facebook" />
            </Link>
            <Link to={""}>
              <img src={Instagram} alt="Instagram" />
            </Link>
            <Link to={""}>
              <img src={Telegram} alt="Telegram" />
            </Link>
            <Link to={""}>
              <img src={Telephone} alt="Telephone" />
            </Link>
          </ArtistsNavBar>
        </ArtistsLinkWrapper>
      </ArtistsDetailWrapper>
      <Col>
        <Routes>
          <Route>
            <Route index element={<AllTracks />} />
            <Route path="/single" element={<Single />} />
            <Route path="/album" element={<Album />} />
            <Route path="/movies" element={<Movies />} />
          </Route>
        </Routes>
      </Col>
    </>
  );
};

export { ArtistDetail };
