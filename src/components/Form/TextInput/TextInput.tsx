import React, { useEffect, useState } from "react";

import {
  TextInputWrapper,
  StyledTextInput,
  StyledTextLabel,
} from "./StyledTextInput";

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
        <StyledTextInput autoComplete="nope"
          id={id}
          placeholder={placeholder}
          type={type}
          {...register(id)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
      </TextInputWrapper>
    </>
  );
};

export default TextInput;
