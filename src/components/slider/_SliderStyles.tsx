import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 95%;
`;

export const SliderImage = styled.img`
  max-width: 1100px;
  width: 100%;
  /* margin: 0 auto; */
`;

export const SliderText = styled.div`
  color: white;
  font-weight: 300;
  left: 30px;
  h3,
  h1,
  h5 {
    margin-top: 12px;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-self: center;

  img {
    padding-right: 10px;
  }
`;
