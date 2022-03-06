import styled from "styled-components";

type props = {
  activePageIndicator: boolean;
};

export const PageIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95px;
  height: 10px;
  margin: 1rem 0;
`;
export const PageSpan = styled.div<props>`
  background: ${(props) =>
    props.activePageIndicator
      ? "linear-gradient(94.75deg,rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0) 100.7%),#cd8b65;"
      : "#9f9f9f;"}
  opacity: ${props => props.activePageIndicator ? 'opacity: 1;' : 'opacity: 0.36;'};
  border-radius: 10px;
  margin: 0px 5px;
  width: ${(props) => (props.activePageIndicator ? "44px;" : "21px;")}
  height: 6px;
`;
