import { StyledErrorMessage } from "./StyledErrorMessage";

type props = {
  message: string | undefined;
};

const ErrorMessage = ({ message }: props) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
