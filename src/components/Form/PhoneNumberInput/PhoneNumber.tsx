import React from "react";

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
import { flag } from "../../../types.interface";

type props = {
  activeFlag: flag;
  label: string;
  id: string;
  register: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggling: () => void;
  flags: flag[];
};

const PhoneNumber = ({
  activeFlag,
  label,
  id,
  handleChange,
  register,
  toggling,
}: props) => {
  return (
    <>
      <TextInputWrapper>
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
