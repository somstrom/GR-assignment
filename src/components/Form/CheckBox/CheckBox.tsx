import {
  StyledCheckBoxInput,
  StyledCheckBoxLabel,
  StyledCheckBoxWrapper,
} from "./StyledCheckBox";

type props = {
  label: string;
  id: string;
  isRequired?: boolean;
  handleCheck: any;
};

const CheckBox = ({ label, id, isRequired, handleCheck }: props) => {
  return (
    <StyledCheckBoxWrapper>
      <StyledCheckBoxInput
        required={isRequired}
        id={id}
        type="checkbox"
        onChange={handleCheck}
      />
      <StyledCheckBoxLabel htmlFor={id}>{label}</StyledCheckBoxLabel>
    </StyledCheckBoxWrapper>
  );
};

export default CheckBox;
