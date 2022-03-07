import PrimaryButton from "../Buttons/Primary/PrimaryButton";
import ErrorMessage from "../Form/ErrorMessage/ErrorMessage";
import PageParagraph from "../PageUI/PageParagraph/PageParagraph";
import { ModalContent, StyledModal, ModalLogo } from "./StyledModal";

type props = {
  icon: string;
  message: string;
  handleClick: () => void;
  success: boolean;
};

const Modal = ({ success, icon, message, handleClick }: props) => {
  const paragraphTitle = success ? 'Ďakuejem za Vašu podporu' : 'Skúste to znovu'
    return (
    <StyledModal>
      <ModalContent>
        <ModalLogo src={icon} />
        <ErrorMessage success={success} message={message} />
        <PageParagraph titleParagraph={paragraphTitle}></PageParagraph>
        <PrimaryButton context="Potvrdiť" onClick={handleClick} />
      </ModalContent>
    </StyledModal>
  );
};

export default Modal;
