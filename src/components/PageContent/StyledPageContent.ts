import styled from "styled-components";

export const StyledPageContent = styled.div`
  margin-right: 4rem;
  max-width: 700px;
  @media (max-width: 900px) {
    margin: 0 auto 0 auto;
    width: 90%
  }

  @media (max-width: 500px) {
    width: 100%
  }
`;
