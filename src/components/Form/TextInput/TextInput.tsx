import React, { useState } from "react";

import "./TextInput.css";


type props = {
  placeholder: string;
  label: string;
  type: string;
  isRequired?: boolean;
  range?: {
    start: number;
    end: number;
  };
  id: string
};

const TextInput = ({ placeholder, label, type, isRequired, range, id }: props) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <>
      <div className={`full-input ${focus ? "focused" : "not-focused"}`}>
        <label htmlFor={id}>{label}</label>
        <input
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          id={id}
          placeholder={placeholder}
          type={type}
          required={isRequired}
          minLength={range && range.start}
          maxLength={range && range.end}
        ></input>
      </div>
    </>
  );
};

export default TextInput;
