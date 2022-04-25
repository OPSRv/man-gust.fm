import React from "react";
//styled
import {
  SliderWrapper,
  SliderImage,
  // SliderText,
  // FlexRow,
} from "./_SliderStyles";
//img
import SliderImg from "../../assets/img/Slider/slider1.png";
// import sliderIcon from "../../assets/svg/slider/sliderIcon.svg";

const Slider = () => {
  return (
    <SliderWrapper>
      {/* <SliderText>
        <FlexRow>
          <img src={sliderIcon} alt="" />
          <h3>Verified Artist</h3>
        </FlexRow>
        <h1>Michael Jackson</h1>
        <h5>27.852.501 monthly listeners</h5>
      </SliderText> */}
      <SliderImage src={`${SliderImg}`} alt="" />
    </SliderWrapper>
  );
};

export default Slider;
