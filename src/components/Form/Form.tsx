import React from "react";

import './Form.css'

type props = {
  children: React.ReactNode,
  title: string
};

const Form = ({ children, title }: props) => {
  return (
    <form className="form-wrapper">
      <p className="form-tilte">{title}</p>
      {children}
    </form>
  );
};

export default Form;
