import React from "react";

import './CheckBox.css'

type props = {
  label: string,
  id: string,
  isRequired?: boolean
  handleCheck: any
};

const CheckBox = ({ label, id, isRequired, handleCheck }: props) => {
  return (
    <div className="check-box__wrapper">
      <input required={isRequired} id={id} type="checkbox" onChange={handleCheck}></input>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
