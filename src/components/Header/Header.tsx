import {
  HeaderIcons,
  HeaderSection,
  StyledHeader,
  StyledHeaderContainer,
  HeaderTitle,
} from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <HeaderSection>
          <HeaderTitle>Nadácia Good Boy</HeaderTitle>
        </HeaderSection>
        <HeaderSection>
          <HeaderIcons src="/facebook.svg" alt="fb"></HeaderIcons>
          <HeaderIcons src="/ig.svg" alt="ig"></HeaderIcons>
        </HeaderSection>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
