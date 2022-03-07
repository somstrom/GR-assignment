import { ButtonPrimary } from "./StyledPrimaryButton";


type props = {
  context: string;
  disabled?: boolean;
  onClick?: () => void;
};

const PrimaryButton = ({ context, disabled, onClick }: props) => {
  return (
    <ButtonPrimary type="button" disabled={disabled} onClick={onClick}>
      {context}
    </ButtonPrimary>
  );
};

export default PrimaryButton;
