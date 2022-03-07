import React from "react";
import { StyledPWrapper } from "./StyledParagraphWrapper";


type props = {
  children: React.ReactNode;
};

const ParagraphWrapper = ({ children }: props) => {
  return <StyledPWrapper>{children}</StyledPWrapper>;
};

export default ParagraphWrapper;
