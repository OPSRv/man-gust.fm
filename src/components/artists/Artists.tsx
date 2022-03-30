import BandLogo from "../../assets/img/Artists/1.jpeg";
import BandLogo_2 from "../../assets/img/Artists/2.jpeg";
import BandLogo_3 from "../../assets/img/Artists/3.jpeg";
import BandLogo_4 from "../../assets/img/Artists/4.jpeg";
import BandLogo_5 from "../../assets/img/Artists/5.jpeg";
import BandLogo_6 from "../../assets/img/Artists/6.jpeg";
import BandLogo_7 from "../../assets/img/Artists/12.jpeg";

import {
  FlexColumn,
  ItemWrapper,
  PerformerItem,
  Center,
} from "./_ArtistsStyles";

const Artists = () => {
  const ArtistsList = [
    {
      id: 1,
      artist: "Один в каное",

      icon: `${BandLogo}`,
    },
    {
      id: 2,
      artist: "Kleft",

      icon: `${BandLogo_2}`,
    },
    {
      id: 3,
      artist: "Man-Gust",

      icon: `${BandLogo_3}`,
    },
    {
      id: 4,
      artist: "Man-Gust",

      icon: `${BandLogo_4}`,
    },
    {
      id: 5,
      artist: "Man-Gust",

      icon: `${BandLogo_5}`,
    },
    {
      id: 6,
      artist: "Man-Gust",

      icon: `${BandLogo_6}`,
    },
    {
      id: 7,
      artist: "Man-Gust",

      icon: `${BandLogo_7}`,
    },
    {
      id: 8,
      artist: "Man-Gust",

      icon: `${BandLogo_7}`,
    },
    {
      id: 9,
      artist: "My Chemical Romance",

      icon: `${BandLogo_2}`,
    },
    {
      id: 10,
      artist: "Man-Gust",

      icon: `${BandLogo_3}`,
    },
    {
      id: 11,
      artist: "Man-Gust",

      icon: `${BandLogo_4}`,
    },
    {
      id: 12,
      artist: "Man-Gust",

      icon: `${BandLogo_5}`,
    },
    {
      id: 13,
      artist: "Man-Gust",

      icon: `${BandLogo_6}`,
    },
    {
      id: 14,
      artist: "Man-Gust",

      icon: `${BandLogo_7}`,
    },
    {
      id: 15,
      artist: "Man-Gust",

      icon: `${BandLogo}`,
    },
    {
      id: 16,
      artist: "Man-Gust",

      icon: `${BandLogo_3}`,
    },
    {
      id: 17,
      artist: "Man-Gust",

      icon: `${BandLogo_5}`,
    },
  ];

  return (
    <>
      <Center>
        <FlexColumn>
          <h1>Виконавці</h1>
          <ItemWrapper>
            {ArtistsList.map((item) => (
              <PerformerItem key={item.id}>
                <img src={item.icon} alt={item.artist} />
                <p>{item.artist}</p>
              </PerformerItem>
            ))}
          </ItemWrapper>
        </FlexColumn>
      </Center>
    </>
  );
};

export default Artists;
