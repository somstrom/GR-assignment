import React from "react";

import './PageIndicator.css'

type prosp = {
  activePage: boolean[];
};

const PageIndicator = ({ activePage }: prosp) => {
  return (
    <div className="page-indicator__wrapper">
      {activePage.map((activePageIndicator: boolean, idx: number) =>
        activePageIndicator ? (
          <span className="page-span__active" key={idx}></span>
        ) : (
          <span className="page-span" key={idx}></span>
        )
      )}
    </div>
  );
};

export default PageIndicator;
