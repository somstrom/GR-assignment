import React from "react";

import './PageParagraph.css'

type props = {
  titleParagraph: string;
  infoParagraph: string;
};

const PageParagraph = ({ titleParagraph, infoParagraph }: props) => {
  return (
    <>
      <p className="paragraph-title">{titleParagraph}</p>
      <p className="paragraph-info">{infoParagraph}</p>
    </>
  );
};

export default PageParagraph;
