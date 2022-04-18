import styled from "styled-components";

export const TablePlayList = styled.table`
  overflow-x: auto;
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  cursor: pointer;
  font-size: calc(12px + 4 * ((100vw - 320px) / (2556 - 320)));
  user-select: none;
  color: white;

  tr {
    text-align: center;
    height: 58px;

    :not(:first-child) {
      &:hover {
        margin-left: -4px;
        background-color: #00000045;
      }
    }
    td {
      text-align: center;
      border-spacing: none;
      border: none;
      padding: 5px;
      &:nth-child(3) {
        text-align: left;
        /* @media (max-width: 1000px) {
          display: none;
        } */
      }
      &:nth-child(4) {
        text-align: left;
      }
      &:last-child {
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }
  }
`;

export const TableHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h1 {
    display: inline-block;
    margin-left: 15%;
  }
`;

export const Cover = styled.img`
  width: 100%;
  max-width: 70px;
  border-radius: 2px;
`;
