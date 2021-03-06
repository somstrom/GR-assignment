import styled from "styled-components";

type props = {
  isActive?: boolean;
  buttonType?: string;
  length?: number;
};

export const ButtonTernaryLabel = styled.label`
  padding: 1rem 1rem 1rem 0;
`;

export const NumberLabel = styled.label`
  cursor: pointer;
`

export const ButtonTernary = styled("div")<props>`
  padding: ${(props) => (props.buttonType === "number" ? "0;" : "1.1rem 1rem 1rem 1rem;")}
  background: #ffffff;
  border: 1px solid #dfdfdf;
  box-sizing: border-box;
  border-radius: 8px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  vertical-align: middle;
  text-align: center;
  color: ${(props) => (props.isActive ? "white;" : "#2f2f2f;")}
  max-width: ${(props) => (props.buttonType === "number" ? ";" : "80px;")};
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);"
      : "white;"}
  &:hover {
    border: 1px solid #CD8B65;
  }
`;

export const NumberButton = styled(ButtonTernary)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TernaryButtonInput = styled.input<props>`
  -moz-appearance: textfield;
  width: ${(props) =>
    props.length === 0 ? "0.5rem;" : props.length && (props.length / 2) + 0.3 + "rem;"};
  border: none;
  color: ${(props) => (props.isActive ? "white;" : "#2f2f2f;")}
  border-bottom: ${(props) => (props.isActive ? "solid 1px white;" : "solid 1px #9f9f9f;")}
  outline: none;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  margin: 1rem 0 1rem 1rem;
  background: transparent;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
