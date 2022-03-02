import React from "react";

import './Container.css'

type props = {
  children: React.ReactNode;
};

const Container = ({ children }: props) => {
  return (
      <div className="container">
          {children}
      </div>
  );
};

export default Container;
