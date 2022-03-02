import React from "react";

import './PageTitle.css'

type props = {
  title: string;
};

const PageTitle = ({ title }: props) => {
  return <h1 className="page-title">{title}</h1>
};

export default PageTitle;
