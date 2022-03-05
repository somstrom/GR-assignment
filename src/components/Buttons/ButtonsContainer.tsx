import React, { Children } from "react";

import "./ButtonsContainer.css";
import { StyledContainerBtn } from "./StyledButtonsContainer";

type props = {
  children: React.ReactNode;
};

const ButtonsContainer = ({ children }: props) => {
  const singleChildren = Children.count(children) === 1;
  return (
    <StyledContainerBtn singleChildren={singleChildren}>
      {children}
    </StyledContainerBtn>
  );
};

export default ButtonsContainer;
