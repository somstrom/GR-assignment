import React from "react";

type props = {
  children: React.ReactNode;
};

const Form = ({ children }: props) => {
  return (
    <form className="form-wrapper">
      <p className="form-tilte"></p>
      {children}
    </form>
  );
};

export default Form;
