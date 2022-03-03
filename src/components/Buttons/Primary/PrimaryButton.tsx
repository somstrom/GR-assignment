import React from "react";

import { ButtonPrimary } from "./StyledPrimaryButton";

type props = {
  context: string;
  type?: string | undefined;
  disabled?: boolean;
};

const PrimaryButton = ({ context, type, disabled }: props) => {
  return (
    <ButtonPrimary disabled={disabled}>
      {context}
    </ButtonPrimary>
  );
};

export default PrimaryButton;
