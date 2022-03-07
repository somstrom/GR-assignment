import styled from "styled-components";

type props = {
  singleChildren: boolean;
  type?: string;
};

export const StyledContainerBtn = styled.div<props>`
  display: flex;
  gap: ${props => props.type === 'money' ? '0.5rem;' : '0;'}
  justify-content: ${(props) =>
    props.singleChildren
      ? "end;"
      : props.type === "money"
      ? "start;"
      : "space-between;"}
  margin: 1rem 0 1rem 0;
  margin: ${props => props.type === 'nav-buttons' ? '3rem 0 1rem 0;' : '0rem 0 1rem 0;'}
  cursor: pointer;
  flex-wrap: wrap;
`;
