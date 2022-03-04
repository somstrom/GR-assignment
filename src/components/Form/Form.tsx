import React from "react";

import { FormParagraph, FormWrapper } from "./StyledForm";

type props = {
  children: React.ReactNode;
  title: string;
};

const Form = ({ children, title }: props) => {
  return (
    <FormWrapper>
      <FormParagraph>{title}</FormParagraph>
      {children}
    </FormWrapper>
  );
};

export default Form;
