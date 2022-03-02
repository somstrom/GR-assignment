import React from "react";

import './PrimaryButton.css'

type props = {
  context: string;
  type?: string | undefined;
  disabled: boolean
};

const PrimaryButton = ({ context, type, disabled }: props) => {
  return (
      <button className="button-primary" disabled={disabled}>{context}</button>
  );
};

export default PrimaryButton;
