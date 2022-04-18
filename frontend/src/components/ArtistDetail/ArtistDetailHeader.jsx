import { useState } from "react";
import { Link } from "react-router-dom";
//icons
import BandCamp from "../../assets/svg/social/bandcamp.svg";
import Email from "../../assets/svg/social/email.svg";
import Facebook from "../../assets/svg/social/facebook.svg";
import Instagram from "../../assets/svg/social/instagram.svg";
import Itunes from "../../assets/svg/social/itunes.svg";
import SoundClode from "../../assets/svg/social/soundClode.svg";
import Spotify from "../../assets/svg/social/spotify.svg";
import Telegram from "../../assets/svg/social/telegram.svg";
import Telephone from "../../assets/svg/social/telephone.svg";
import Youtube from "../../assets/svg/social/youtube.svg";
import TikTok from "../../assets/svg/social/tiktok.svg";
import LineDown from "../../assets/svg/other/down.svg";
//fake
import { ArtistDetailList } from "../../fake-data/Mock-ArtistDetailList";
import { ExternalLink } from "../ExternalLink";
//styles
import {
  ArtistsDetailText,
  ArtistsDetailWrapper,
  ArtistsLink,
  ArtistsLinkWrapper,
  ArtistsLogo,
  ArtistsLogoTextWrapper,
  ArtistsNavBarIcons,
  ArtistsSocialLink,
} from "./_artistDetailStyles";

const SocialLink = [
  {
    link: "https://www.facebook.com/",
    icon: Facebook,
    color: "#0000fd",
  },
  { link: "https://instagram.com/", icon: Instagram, color: "#d000ff" },
  { link: "https://tiktok.com/", icon: TikTok, color: "#ff0000" },
  {
    link: "https://www.telegram.com/",
    icon: Telegram,
    color: "#00bfff",
  },
  { link: "https://www.youtube.com/", icon: Youtube, color: "red" },
  { link: "https://soundcloud.com/", icon: SoundClode, color: "orange" },
  { link: "https://itunes.apple.com/", icon: Itunes, color: "red" },
  { link: "https://bandcamp.com/", icon: BandCamp, color: "#00ffbf" },
  { link: "https://spotify.com/", icon: Spotify, color: "#00ff11" },
  { link: "mailto:", icon: Email, color: "#eeff00" },
  { link: "tel: 123", icon: Telephone, color: "#ddd" },
];

const ArtistDetailHeader = () => {
  const [toogle, setToogle] = useState(true);
  const [SocialLinkDisplay, setSocialLinkDisplay] = useState("");

  const ToogleSocial = () => {
    setToogle(!toogle);
    toogle ? setSocialLinkDisplay("") : setSocialLinkDisplay("flex");
  };

  return (
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
          <div>
            <Link to={"/detail"}>Всі пісні</Link>
            <Link to={"single"}>Сингли</Link>
            <Link to={"album"}>Альбоми</Link>
            <Link to={"movies"}>Кліпи</Link>
            <Link to={"gallery"}>Галерея</Link>
          </div>
          <img src={LineDown} alt="" onClick={ToogleSocial} />
        </ArtistsLink>

        <ArtistsSocialLink display={SocialLinkDisplay}>
          {SocialLink.map((item) => (
            <ExternalLink to={item.link} key={item.link}>
              <ArtistsNavBarIcons
                src={item.icon}
                alt="link"
                shadow_center={item.color}
                shadow_middle={item.color}
                shadow_outside={item.color}
              />
            </ExternalLink>
          ))}
        </ArtistsSocialLink>
      </ArtistsLinkWrapper>
    </ArtistsDetailWrapper>
  );
};

export { ArtistDetailHeader };
