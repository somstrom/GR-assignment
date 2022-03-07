import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  /* max-height: 100vh; */
  width: 70%;
  gap: 1rem;
  margin: 5.9rem auto 7.875rem auto;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 900px) {
    width: 80%;
    margin: 3rem auto 4rem auto; 
  }
`;
