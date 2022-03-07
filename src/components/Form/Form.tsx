import React from "react";
import PageParagraph from "../PageUI/PageParagraph/PageParagraph";

import { FormWrapper } from "./StyledForm";

type props = {
  children: React.ReactNode;
  title: string;
  onSubmit: any;
  onKeyPress: any;
};

const Form = ({ children, title, onSubmit, onKeyPress }: props) => {
  return (
    <FormWrapper onSubmit={onSubmit} onKeyPress={onKeyPress} >
      <PageParagraph titleParagraph={title}></PageParagraph>
      {children}
    </FormWrapper>
  );
};

export default Form;
