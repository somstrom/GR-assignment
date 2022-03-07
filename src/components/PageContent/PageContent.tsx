import React from "react";

import { StyledPageContent } from "./StyledPageContent";


type props = {
  children: React.ReactNode;
};

const PageContent = ({ children }: props) => {
  return <StyledPageContent>{children}</StyledPageContent>;
};

export default PageContent;
