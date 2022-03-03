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
};

const TextInput = ({
  placeholder,
  label,
  type,
  isRequired,
  range,
  id,
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
          required={isRequired}
          minLength={range && range.start}
          maxLength={range && range.end}
        />
      </TextInputWrapper>
    </>
  );
};

export default TextInput;
