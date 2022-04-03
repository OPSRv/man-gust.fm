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
import { Link, NavLink, Outlet } from "react-router-dom";

import { Col } from "../content/_ContentStyles";
import { CustomLink } from "../CustomLink";

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
            <a href="https://google.com">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://google.com">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://google.com">
              <img src={Telegram} alt="Telegram" />
            </a>
            <a href="https://google.com">
              <img src={Telephone} alt="Telephone" />
            </a>
          </ArtistsNavBar>
        </ArtistsLinkWrapper>
      </ArtistsDetailWrapper>
      <Col>
        <Outlet />
      </Col>
    </>
  );
};

export { ArtistDetail };
