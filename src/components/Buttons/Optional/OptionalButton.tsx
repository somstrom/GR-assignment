import {
  OptionalButtonIcon,
  OptionalButtonTag,
  OptionalButtonLeft,
  OptionalButtonRight,
  IconWrapper,
} from "./StyledOptionalButton";

type props = {
  context: string;
  icon: string;
  isActive: boolean;
  handleButtonClick: () => void;
  type: string;
};

const OptionalButton = ({
  context,
  icon,
  isActive,
  type,
  handleButtonClick,
}: props) => {
  return (
    <>
      {type === "left" ? (
        <OptionalButtonLeft onClick={handleButtonClick} isActive={isActive}>
          <IconWrapper>
            <OptionalButtonIcon src={icon} />
          </IconWrapper>
          <OptionalButtonTag>{context}</OptionalButtonTag>
        </OptionalButtonLeft>
      ) : (
        <OptionalButtonRight onClick={handleButtonClick} isActive={isActive}>
          <IconWrapper>
            <OptionalButtonIcon src={icon} />
          </IconWrapper>
          <OptionalButtonTag>{context}</OptionalButtonTag>
        </OptionalButtonRight>
      )}
    </>
  );
};

export default OptionalButton;
