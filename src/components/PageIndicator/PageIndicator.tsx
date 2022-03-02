import React from "react";

import './PageIndicator.css'

type prosp = {
  activePage: boolean[];
};

const PageIndicator = ({ activePage }: prosp) => {
  return (
    <div className="page-indicator__wrapper">
      {activePage.map((activePageIndicator) =>
        activePageIndicator ? (
          <span className="page-span__active"></span>
        ) : (
          <span className="page-span"></span>
        )
      )}
    </div>
  );
};

export default PageIndicator;
