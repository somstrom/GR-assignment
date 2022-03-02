import React from "react";

import './SecondaryButton.css'


type props = {
  context: string;
  type?: string;
};

const SecondaryButton = ({ context, type }: props) => {
  return (
      <button className="button-secondary">{context}</button>
  );
};

export default SecondaryButton;
