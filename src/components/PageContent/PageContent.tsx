import React from "react";

import './PageContent.css'

type props = {
  children: React.ReactNode;
};

const PageContent = ({ children }: props) => {
  return <div className="page-content">{children}</div>;
};

export default PageContent;
