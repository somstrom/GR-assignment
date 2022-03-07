import { StyledErrorMessage } from "./StyledErrorMessage";

type props = {
  message: string | undefined;
  success?: boolean
};

const ErrorMessage = ({ message, success }: props) => {
  return <StyledErrorMessage success={success}>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
