import styled from "styled-components";

export const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const FlexColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: 10px;
  color: white;
  width: 95%;
  h1 {
    margin-top: 40px;
    margin-bottom: 40px;
    margin-left: 2px;
  }
`;
export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1rem;
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
    margin: 4px 0px 4px 0px;
    font-size: calc(14px + 2 * ((100vw - 320px) / (2556 - 320)));
  }
  img {
    margin: 2px;
    min-width: 100px;
    width: 100%;

    border-radius: 5px;
  }
`;
