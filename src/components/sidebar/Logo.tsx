import { CustomLink } from "../CustomLink";
import { LogoIcons, LogoWrapper, TextColor } from "./_SidebarStyles";
import MusicLogo from "../../assets/svg/other/music.svg";

const Logo = () => {
  return (
    <CustomLink to={"/"}>
      <LogoWrapper>
        <LogoIcons src={MusicLogo} alt="logo" />
        <TextColor color={"#FF5656"}>MANGUST</TextColor>
        <TextColor>FM</TextColor>
      </LogoWrapper>
    </CustomLink>
  );
};

export { Logo };
