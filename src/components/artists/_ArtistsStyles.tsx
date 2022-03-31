import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 10px;
  color: white;

  h1 {
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 2px;
  }
`;
export const ItemWrapper = styled.div`
  /* display: flex;
  flex-flow: row wrap;
  justify-content: space-between;*/
  user-select: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1%;
  grid-row-gap: 0px;
  @media (max-width: 756px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 565px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const PerformerItem = styled.div`
  margin-bottom: 20px;
  min-width: 100px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  p {
    color: white;
    text-align: center;
    margin: 1px 0px 1px 0px;
    font-size: calc(14px + 2 * ((100vw - 320px) / (2556 - 320)));
  }
  img {
    /* width: 225px;
    height: 225px; */
    margin: 2px;
    min-width: 100px;
    width: 100%;

    border-radius: 5px;
  }
`;
