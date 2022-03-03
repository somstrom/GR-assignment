import React from "react";

import {
  NumberButton,
  ButtonTernary,
  TernaryButtonInput,
} from "./StyledTernaryButton";

type props = {
  context?: number;
  type?: string;
  setActiveButton: React.Dispatch<React.SetStateAction<number>>;
};

const TernaryButton = ({ context, type, setActiveButton }: props) => {
  if (type === "number") {
    return (
      <NumberButton>
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
    <ButtonTernary onClick={() => setActiveButton(context || 0)}>
      {context}€
    </ButtonTernary>
  );
};

export default TernaryButton;
