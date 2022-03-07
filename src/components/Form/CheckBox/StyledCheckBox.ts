import styled from "styled-components";

export const StyledCheckBoxWrapper = styled.div`
  margin: 3rem 0 0rem 0;
`;

export const StyledCheckBoxInput = styled.input`
  appearance: none;
  margin-left: 0;
  height: 2rem;
  width: 2rem;
  background: #fff;
  border: 1px solid #f3e2d9;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  vertical-align:middle;
  &:checked:after {
    position: relative;
    top: -0.1rem;
    left: 0.4rem;
    font-size: 1.5rem;
    content: "\\2713";
    color: #ab7455;
    font-weight: 800;
  }
`;

export const StyledCheckBoxLabel = styled.label`
  color: #2f2f2f;
  line-height: 21px;
  padding-left: 1rem;
  cursor: pointer;
`;
