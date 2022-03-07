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
  );
};

export default Footer;
