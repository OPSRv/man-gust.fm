//components
import { PlayList } from "../generic/PlayList";
import { Slider } from "../slider/Slider";
//styles
import { Col } from "./_ContentStyles";

const Content = () => {
  return (
    <>
      <Slider />
      <PlayList />
    </>
  );
};

export default Content;
