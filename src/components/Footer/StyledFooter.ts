import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 80%;
  margin: auto;
  min-height: 40vh;
  display: flex;
  align-items: center;
  border-top: solid 1px rgba(47, 47, 47, 0.16);
`;

export const FooterSection = styled.div`
  width: 170px;
`;

export const FooterWrapper = styled.div`
  //   display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  //   grid-gap: auto;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
  flex-basis: 40%;
  margin: auto;
  justify-content: center;
  @media (min-width: 680px) {
    flex-basis: 70%;
    margin:auto;
    justify-content: space-between;
  }
  @media (min-width: 1000px) {
    flex-basis: 100%;
    justify-content: space-between;
  }
`;

export const FooterParagraph = styled.div`
  color: #585757;
  /* line-height: 2rem; */
  margin: 0.5rem 0 0.5rem 0;
`;

export const FooterTitle = styled.div`
  font-style: normal;
  color: #2f2f2f;
  font-weight: 800;
`;

export const FooterLogo = styled.img`
  width: 90%;
`;
