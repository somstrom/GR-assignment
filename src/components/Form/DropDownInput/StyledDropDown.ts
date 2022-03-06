import styled from "styled-components";



export const DropDownContainer = styled("div")`
  font-size: 1rem;
`;

export const DropDownPlaceholder = styled("div")`
  padding: 0 1.25rem 1rem 1.25rem;
  border-radius: 8px;
  font-weight: 400;
  background: #ffffff;
  line-height: 21px;
  color: #9F9F9F;
`;

export const DropDownLabel = styled(DropDownPlaceholder)`
  padding: 1rem 1.25rem 0 1.25rem;
  font-weight: 800;
  color: #2F2F2F;
  `;

export const DropDownListContainer = styled("div")`
  overflow: hidden;
`;

export const DropDownList = styled("ul")`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  max-height: 11.1rem;
  margin: 0;
  padding: 0.5rem 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  box-sizing: border-box;
  font-weight: 400;
`;

export const ListItem = styled("li")`
  padding: 0 1.25rem;
  list-style: none;
  line-height: 32px;
  &:hover {
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    color: white;
    font-weight: 800;
  }
`;