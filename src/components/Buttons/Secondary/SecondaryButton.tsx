import React from "react";

import { ButtonSecondary } from "./StyledSecondaryButton";

type props = {
  context: string;
  type?: string;
};

const SecondaryButton = ({ context, type }: props) => {
  return (
    <ButtonSecondary>{context}</ButtonSecondary>
  );
};

export default SecondaryButton;
