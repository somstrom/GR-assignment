import React from "react";

import './PageParagraph.css'

type props = {
  titleParagraph: string;
  infoParagraph: string;
};

const PageParagraph = ({ titleParagraph, infoParagraph }: props) => {
  return (
    <div className="paragraph-wrapper">
      <p className="paragraph-title">{titleParagraph}</p>
      <p className="paragraph-info">{infoParagraph}</p>
    </div>
  );
};

export default PageParagraph;
