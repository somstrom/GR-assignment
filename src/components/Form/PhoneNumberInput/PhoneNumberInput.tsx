import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import "./PhoneNumberInput.css";
import "../TextInput/TextInput.css"

type props = {
  label: string;
  isRequired?: boolean;
  id: string;
};

const PhoneNumberInput = ({ label, isRequired, id }: props) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className={`full-input ${focus ? "focused" : "not-focused"}`}>
      <label htmlFor={id}>{label}</label>
      <PhoneInput
        country={"sk"}
        inputProps={{
          required: isRequired,
          id: id,
          type: "type",
        }}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        onlyCountries={["sk", "cz"]}
      ></PhoneInput>
    </div>
  );
};

export default PhoneNumberInput;
