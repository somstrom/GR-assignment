import React from "react";

import {
  NumberButton,
  ButtonTernary,
  TernaryButtonInput,
} from "./StyledTernaryButton";

type props = {
  context?: number;
  type?: string;
  handleButtonClick: () => void;
  isActive: boolean;
};

const TernaryButton = ({ context, type, handleButtonClick, isActive }: props) => {
  if (type === "number") {
    return (
      <NumberButton isActive={isActive}>
        <TernaryButtonInput 
          type="number"
          id="numeric-input-id"
          inputMode="numeric"
          pattern="[0-9]*"
          min="0"
        ></TernaryButtonInput>
        <label htmlFor="number-onput-id">€</label>
      </NumberButton>
    );
  }

  return (
    <ButtonTernary isActive={isActive} onClick={handleButtonClick}>
      {context}€
    </ButtonTernary>
  );
};

export default TernaryButton;
