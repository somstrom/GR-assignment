import React from "react";

import { ButtonPrimary } from "./StyledPrimaryButton";

type props = {
  context: string;
  type?: string | undefined;
  disabled?: boolean;
  onClick?: () => void 
};

const PrimaryButton = ({ context, type, disabled, onClick }: props) => {
  return (
    <ButtonPrimary disabled={disabled} onClick={onClick}>
      {context}
    </ButtonPrimary>
  );
};

export default PrimaryButton;
