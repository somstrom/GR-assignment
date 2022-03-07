import React from "react";

import { ContainerWrapper, StyledContainer } from "./StyledContainer";
import { useSelector } from "react-redux";
import PageIndicator from "../PageIndicator/PageIndicator";

type props = {
  children: React.ReactNode;
};

const Container = ({ children }: props) => {
  const slideActionType: string = useSelector(
    (state: any) => state.slideActionType
  );
  const page: number = useSelector((state: any) => state.accessiblePages);
  return (
    <ContainerWrapper>
      <PageIndicator activePage={[page === 0, page === 1, page === 2]} />
      <StyledContainer action={slideActionType}>{children}</StyledContainer>
    </ContainerWrapper>
  );
};

export default Container;
