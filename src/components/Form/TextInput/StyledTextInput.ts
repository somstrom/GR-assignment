import styled from "styled-components";

type props = {
  focus: boolean;
};

export const TextInputWrapper = styled.div<props>`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
  border: ${(props) =>
    props.focus ? "1px solid #CD8B65" : "1px solid #DFDFDF"};
`;

export const StyledTextInput = styled.input`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  &::placeholer {
    color: #9f9f9f;
  }
  line-height: 1.3rem;
  outline: none;
  color: #9f9f9f;
  border: none;
  padding: 0.1rem 1.5rem 1rem 1.5rem;
  border-radius: 8px;
`;

export const StyledTextLabel = styled.label`
  line-height: 1.3rem;
  padding: 1rem 1.5rem 0.1rem 1.5rem;
  font-weight: 800;
  color: #2f2f2f;
`;
