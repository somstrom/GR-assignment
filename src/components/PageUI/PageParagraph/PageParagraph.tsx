import {
  StyledParagraphInfo,
  StyledParagraphTitle,
  StyledParagraphWrapper,
} from "./StyledPageParagraph";


type props = {
  titleParagraph?: string;
  infoParagraph?: string;
};

const PageParagraph = ({ titleParagraph, infoParagraph }: props) => {
  return (
    <StyledParagraphWrapper>
      {titleParagraph && (
        <StyledParagraphTitle>{titleParagraph}</StyledParagraphTitle>
      )}
      {infoParagraph && (
        <StyledParagraphInfo>{infoParagraph}</StyledParagraphInfo>
      )}
    </StyledParagraphWrapper>
  );
};

export default PageParagraph;
