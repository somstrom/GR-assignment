import React from "react";

import {
  StyledFooter,
  FooterSection,
  FooterLogo,
  FooterTitle,
  FooterParagraph,
  FooterWrapper,
} from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
      <FooterSection>
        <FooterLogo src="/good-boy-logo.svg" alt="Good Boy"></FooterLogo>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Nadácia Good boy</FooterTitle>
        <FooterParagraph>O projekte</FooterParagraph>
        <FooterParagraph>Ako na to</FooterParagraph>
        <FooterParagraph>Kontakt</FooterParagraph>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Nadácia Good boy</FooterTitle>
        <FooterParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.
        </FooterParagraph>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Nadácia Good boy</FooterTitle>
        <FooterParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
          interdum ipsum, sit amet.
        </FooterParagraph>
      </FooterSection>
      </FooterWrapper>
    </StyledFooter>
    // <div className="footer">
    //   <div className="footer-wrapper">
    //     <div className="footer-section__logo">
    //       <img src="/good-boy-logo.svg" alt="Logo good boy"></img>
    //     </div>
    //     <div className="footer-section">
    //       <h3>Nadácia Good boy</h3>
    //       <p>O projekte</p>
    //       <p>Ako na to</p>
    //       <p>Kontakt</p>
    //     </div>
    //     <div className="footer-section">
    //       <h3>Nadácia Good boy</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
    //         interdum ipsum, sit amet.
    //       </p>
    //     </div>
    //     <div className="footer-section">
    //       <h3>Nadácia Good boy</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
    //         interdum ipsum, sit amet.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
