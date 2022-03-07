import {
  NumberButton,
  ButtonTernary,
  TernaryButtonInput,
  ButtonTernaryLabel,
} from "./StyledTernaryButton";


type props = {
  context?: number;
  buttonType?: string;
  handleButtonClick?: () => void;
  isActive: boolean;
  handleChange?: any;
  inputLength?: number;
};

const TernaryButton = ({
  context,
  buttonType,
  handleButtonClick,
  isActive,
  handleChange,
  inputLength
}: props) => {
  if (buttonType === "number") {
    return (
      <NumberButton isActive={isActive} buttonType={buttonType}>
        <TernaryButtonInput autoComplete="off"
          length={inputLength}
          onChange={handleChange}
          onClick={handleButtonClick}
          id="numeric-input-id"
          defaultValue={context !== -1 ? context : ''}
          inputMode="numeric"
          maxLength={10}
          isActive={isActive}
        ></TernaryButtonInput>
        <ButtonTernaryLabel htmlFor="numeric-input-id">€</ButtonTernaryLabel>
      </NumberButton>
    );
  }

  return (
    <ButtonTernary isActive={isActive} onClick={handleButtonClick}>
      {context}€
    </ButtonTernary>
  );
};

export default TernaryButton;
