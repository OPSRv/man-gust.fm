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

const ArtistDetail = () => {
  return (
    <>
      <ArtistsDetailWrapper>
        <ArtistsLogo>
          {/* <ArtistsLogoTextWrapper>
            <img src={ArtistDetailList.logo} alt="" />
            <ArtistsDetailText>
              <h3>{ArtistDetailList.name}</h3>
              <p>{ArtistDetailList.location}</p>
            </ArtistsDetailText>
          </ArtistsLogoTextWrapper> */}
        </ArtistsLogo>
        <ArtistsLinkWrapper>
          <ArtistsLink>
            <span>Всі пісні</span>
            <span>Сингли</span>
            <span>Альбоми</span>
            <span>Кліпи</span>
          </ArtistsLink>
          <ArtistsNavBar>
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Telegram} alt="Telegram" />
            <img src={Telephone} alt="Telephone" />
          </ArtistsNavBar>
        </ArtistsLinkWrapper>
      </ArtistsDetailWrapper>
      <YoutubeEmbed embedId="poNUrIBcMqg" />
      <YoutubeEmbed embedId="poNUrIBcMqg" />
    </>
  );
};

export { ArtistDetail };
