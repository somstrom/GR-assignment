import React, { Children } from "react";

import { StyledContainerBtn } from "./StyledButtonsContainer";

type props = {
  children: React.ReactNode;
  type?: string
};


const ButtonsContainer = ({ children, type }: props) => {
  const singleChildren = Children.count(children) === 1;
  return (
    <StyledContainerBtn type={type} singleChildren={singleChildren}>
      {children}
    </StyledContainerBtn>
  );
};

export default ButtonsContainer;
