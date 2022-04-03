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

//fake
import { ArtistDetailList } from "../../fake-data/Mock-ArtistDetailList";
import { Link } from "react-router-dom";
import { ExternalLink } from "../ExternalLink";

const SocialLink = [
  {
    link: "https://www.facebook.com/",
    icon: Facebook,
  },
  { link: "https://twitter.com/", icon: Instagram },
  {
    link: "https://www.telegram.com/",
    icon: Telegram,
  },
  { link: "tel: 123", icon: Telephone },
];

const ArtistDetailHeader = () => {
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
            {SocialLink.map((item) => (
              <ExternalLink to={item.link} key={item.link}>
                <img src={item.icon} alt="link" />
              </ExternalLink>
            ))}
          </ArtistsNavBar>
        </ArtistsLinkWrapper>
      </ArtistsDetailWrapper>
    </>
  );
};

export { ArtistDetailHeader };
