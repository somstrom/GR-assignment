import React from "react";

import { StyledContainer } from "./StyledContainer";

type props = {
  children: React.ReactNode;
};

const Container = ({ children }: props) => {
  return (
      <StyledContainer>{children}</StyledContainer>
      // <div className="container">{children}</div>
  );
};

export default Container;
