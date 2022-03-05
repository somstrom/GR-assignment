import styled from "styled-components";

type props = {
    singleChildren: boolean,
}

export const StyledContainerBtn = styled.div<props>`
  display: flex;
  justify-content: ${(props) => props.singleChildren ? 'end;' : 'space-between;'}
  margin: 1rem 0 1rem 0;
  cursor: pointer;
`;