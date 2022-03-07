import { ButtonPrimary } from "./StyledPrimaryButton";


type props = {
  context: string;
  disabled?: boolean;
  onClick?: () => void;
};

const PrimaryButton = ({ context, disabled, onClick }: props) => {
  return (
    <ButtonPrimary disabled={disabled} onClick={onClick}>
      {context}
    </ButtonPrimary>
  );
};

export default PrimaryButton;
