import React, { useState } from "react";

import {
  TextInputWrapper,
  StyledTextInput,
  StyledTextLabel,
} from "./StyledTextInput";

// import "./TextInput.css";

type props = {
  placeholder: string;
  label: string;
  type: string;
  isRequired?: boolean;
  range?: {
    start: number;
    end: number;
  };
  id: string;
  register: any;
};

const TextInput = ({
  placeholder,
  label,
  type,
  isRequired,
  range,
  id,
  register,
}: props) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <>
      <TextInputWrapper focus={focus}>
        <StyledTextLabel htmlFor={id}>{label}</StyledTextLabel>
        <StyledTextInput
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          id={id}
          placeholder={placeholder}
          type={type}
          {...register(id)}
        />
      </TextInputWrapper>
    </>
  );
};

export default TextInput;
