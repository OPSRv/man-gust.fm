//styles
import {
  ArtistsDetailWrapper,
  ArtistsLogo,
  ArtistsLogoTextWrapper,
  ArtistsDetailText,
  ArtistsNavBar,
  ArtistsLinkWrapper,
  ArtistsLink,
} from "./_artistDetailStyles";

//icons
import Facebook from "../../assets/svg/social/facebook.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Telegram from "../../assets/svg/social/telegram.svg";
import Telephone from "../../assets/svg/social/telephone.svg";

//component
import { YoutubeEmbed } from "../video/YoutubeEmbed";

//fake
import { ArtistDetailList } from "../../fake-data/Mock-ArtistDetailList";
import { Link } from "react-router-dom";

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
            <Link to={""}>Всі пісні</Link>
            <Link to={""}>Сингли</Link>
            <Link to={""}>Альбоми</Link>
            <Link to={""}>Кліпи</Link>
          </ArtistsLink>
          <ArtistsNavBar>
            <Link to={""}>
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

      <YoutubeEmbed embedId="poNUrIBcMqg" />
      <YoutubeEmbed embedId="poNUrIBcMqg" />
    </>
  );
};

export { ArtistDetail };
