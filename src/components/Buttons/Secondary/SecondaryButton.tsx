import { ButtonSecondary } from "./StyledSecondaryButton";

type props = {
  context: string;
  onClick?: any;
};

const SecondaryButton = ({ context, onClick }: props) => {
  return (
    <ButtonSecondary type="button" onClick={onClick}>
      {context}
    </ButtonSecondary>
  );
};

export default SecondaryButton;
