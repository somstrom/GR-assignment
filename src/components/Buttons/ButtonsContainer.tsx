import React, { Children } from "react";

import './ButtonsContainer.css'

type props = {
  children: React.ReactNode;
};

const ButtonsContainer = ({ children }: props) => {
  const childrenCount = Children.count(children)
  return <div className={`buttons-container ${childrenCount === 1 ? 'buttons-single' : ''}`}>{children}</div>;
};

export default ButtonsContainer;
