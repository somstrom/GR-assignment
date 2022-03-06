import React from "react";

import { PageIndicatorWrapper, PageSpan } from "./StyledPageIndicator";

type prosp = {
  activePage: boolean[];
};

const PageIndicator = ({ activePage }: prosp) => {
  return (
    <PageIndicatorWrapper>
      {activePage.map((activePageIndicator: boolean, idx: number) => (
        <PageSpan key={idx}
          activePageIndicator={activePageIndicator}
        ></PageSpan>
      ))}
    </PageIndicatorWrapper>
  );
};

export default PageIndicator;
