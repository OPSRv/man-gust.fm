import styled from "styled-components";

export const StyledApp = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-flow: column nowrap;
  }
`;
