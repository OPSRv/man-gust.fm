import {
  FlexColumn,
  ItemWrapper,
  PerformerItem,
  Center,
} from "./_ArtistsStyles";

import { ArtistsList } from "../../fake-data/Mock-ArtistsList";
import { Link } from "react-router-dom";

const Artists = () => {
  return (
    <>
      <Center>
        <FlexColumn>
          <h1>Виконавці</h1>
          <ItemWrapper>
            {ArtistsList.map((item) => (
              <Link to={`${item.artist}`} key={item.id}>
                <PerformerItem key={item.id}>
                  <img src={item.icon} alt={item.artist} />
                  <p>{item.artist}</p>
                </PerformerItem>
              </Link>
            ))}
          </ItemWrapper>
        </FlexColumn>
      </Center>
    </>
  );
};

export { Artists };
