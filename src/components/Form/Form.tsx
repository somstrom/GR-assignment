import React from "react";
import PageParagraph from "../PageUI/PageParagraph/PageParagraph";

import { FormParagraph, FormWrapper } from "./StyledForm";

type props = {
  children: React.ReactNode;
  title: string;
  onSubmit: any
};

const Form = ({ children, title, onSubmit }: props) => {
  return (
    <FormWrapper autoComplete="off" onSubmit={onSubmit}>
      <PageParagraph titleParagraph={title}></PageParagraph>
      {children}
    </FormWrapper>
  );
};

export default Form;
