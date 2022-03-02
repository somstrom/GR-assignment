import React from "react";

import './PrimaryButton.css'

type props = {
  context: string;
  type?: string | undefined;
};

const PrimaryButton = ({ context, type }: props) => {
  return (
      <button className="button-primary">{context}</button>
  );
};

export default PrimaryButton;
