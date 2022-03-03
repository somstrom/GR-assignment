import React from "react";
import {
  OptionalButtonWrapper,
  OptionalButtonIcon,
  OptionalButtonTag,
  OptionalButtonLeft,
  OptionalButtonRight,
  IconWrapper,
} from "./StyledOptionalButton";

const OptionalButton = () => {
  return (
    <OptionalButtonWrapper>
      <OptionalButtonLeft>
        <IconWrapper>
          <OptionalButtonIcon src={"/wallet.svg"} />
        </IconWrapper>
        <OptionalButtonTag>
          Chcem finančne prispieť konkrétnemu útulku
        </OptionalButtonTag>
      </OptionalButtonLeft>
      <OptionalButtonRight>
        <IconWrapper>
          <OptionalButtonIcon src={"/paw.svg"} />
        </IconWrapper>
        <OptionalButtonTag>
          Chcem finančne prispieť celej nadácií
        </OptionalButtonTag>
      </OptionalButtonRight>
    </OptionalButtonWrapper>
  );
};

export default OptionalButton;
