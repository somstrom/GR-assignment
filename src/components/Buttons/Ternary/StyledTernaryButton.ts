import styled from "styled-components";

export const ButtonTernary = styled("div")`
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  color: #2f2f2f;
  max-width: 80px;
  &:focus {
    color: #ffffff;
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
    border: none;
  }
`;

export const NumberButton = styled(ButtonTernary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TernaryButtonInput = styled("input")`
  -moz-appearance: textfield;
  width: 70%;
  border: none;
  border-bottom: solid 1px gray;
  &:focus + ${NumberButton} {
    background: linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);
  }
  &:focus {
    outline: none;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
