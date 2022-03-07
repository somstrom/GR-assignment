import {
  TextInputWrapper,
  StyledTextInput,
  StyledTextLabel,
} from "./StyledTextInput";


type props = {
  placeholder: string;
  label: string;
  type: string;
  max?: number;
  id: string;
  register: any;
};

const TextInput = ({
  placeholder,
  label,
  type,
  id,
  register,
  max
}: props) => {
  return (
    <>
      <TextInputWrapper>
        <StyledTextLabel htmlFor={id}>{label}</StyledTextLabel>
        <StyledTextInput autoComplete="nope"
          id={id}
          placeholder={placeholder}
          type={type}
          maxLength={max}
          {...register(id)}
        />
      </TextInputWrapper>
    </>
  );
};

export default TextInput;
