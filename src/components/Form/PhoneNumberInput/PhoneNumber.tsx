import React, { useState } from "react";
import { Controller } from "react-hook-form";

import {
  TextInputWrapper,
  StyledTextLabel,
} from "../TextInput/StyledTextInput";
import {
  StyledFlagWrapper,
  StyledPhoneNumberInput,
  StyledPhoneWrapper,
  StyledFlag,
} from "./StyledPhoneNumber";

type props = {
  activeFlag: flag;
  label: string;
  id: string;
  register: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggling: () => void;
  flags: flag[];
};

type flag = {
  src: string;
  prefix: string;
  alt: string;
};

const PhoneNumber = ({
  activeFlag,
  label,
  id,
  handleChange,
  register,
  toggling,
  flags,
}: props) => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <>
      <TextInputWrapper focus={focus}>
        <StyledTextLabel htmlFor={id}>{label}</StyledTextLabel>
        <StyledPhoneWrapper>
          <StyledFlagWrapper prefix={activeFlag.prefix}>
            <StyledFlag onClick={toggling} src={activeFlag.src} alt="sk" />
            {activeFlag.prefix}
          </StyledFlagWrapper>
          <StyledPhoneNumberInput
            autoComplete="nope"
            maxLength={11}
            id={id}
            {...register(id)}
            onChange={handleChange}
          />
        </StyledPhoneWrapper>
      </TextInputWrapper>
    </>
  );
};

export default PhoneNumber;
