import React from "react";

import './CheckBox.css'

type props = {
  label: string,
  id: string,
  isRequired?: boolean
};

const CheckBox = ({ label, id, isRequired }: props) => {
  return (
    <div className="check-box__wrapper">
      <input required={isRequired} id={id} type="checkbox"></input>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBox;
