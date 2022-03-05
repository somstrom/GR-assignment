import styled from "styled-components";

type props = {
  isActive: boolean;
};

export const ButtonTernary = styled("div")<props>`
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  color: ${(props) => (props.isActive ? "white;" : "#2f2f2f;")}
  max-width: 80px;
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);"
      : "white;"}

`;

export const NumberButton = styled(ButtonTernary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TernaryButtonInput = styled.input`
  -moz-appearance: textfield;
  width: 70%;
  border: none;
  border-bottom: solid 1px gray;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
