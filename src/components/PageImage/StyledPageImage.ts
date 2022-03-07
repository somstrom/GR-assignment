import styled from "styled-components";

export const StyledPageImage = styled.img`
  height: 80vh;
  max-height: 900px;
  max-width: 40%;
  margin: auto 0 auto 0;
  position:relative;
  top: -2rem;
  // margin-top: -2rem;
  @media (max-width: 900px) {
    display:none;
  }
`;
