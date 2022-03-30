import {
  ArtistsDetailWrapper,
  ArtistsLogo,
  ArtistsLogoTextWrapper,
  ArtistsDetailText,
  ArtistsNavBar,
  ArtistsLinkWrapper,
  ArtistsLink,
} from "./_artistDetailStyles";

import Facebook from "../../assets/svg/social/facebook.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Telegram from "../../assets/svg/social/telegram.svg";
import Youtube from "../../assets/svg/social/youtube.svg";

import BandLogo_2 from "../../assets/img/Artists/13.png";

const ArtistDetailList = [
  {
    name: "KLEFT",
    location: "Rivne, Ukraine",
    logo: `${BandLogo_2}`,
    facebook: "https://www.facebook.com",
    instagram: "https://instagram.com",
    telegram: "https://telegram.com",
    youtube: "https://youtube.com ",
  },
];

const ArtistDetail = () => {
  return (
    <ArtistsDetailWrapper>
      <ArtistsLogo>
        <ArtistsLogoTextWrapper>
          <img src={BandLogo_2} alt="" />
          <ArtistsDetailText>
            <h3>KLEFT</h3>
            <p>Rivne, Ukraine</p>
          </ArtistsDetailText>
        </ArtistsLogoTextWrapper>
      </ArtistsLogo>
      <ArtistsLinkWrapper>
        <ArtistsLink>
          <span>Всі пісні</span>
          <span>Сингли</span>
          <span>Альбоми</span>
        </ArtistsLink>
        <ArtistsNavBar>
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Telegram} alt="Telegram" />
          <img src={Youtube} alt="Youtube" />
        </ArtistsNavBar>
      </ArtistsLinkWrapper>
    </ArtistsDetailWrapper>
  );
};

export default ArtistDetail;
