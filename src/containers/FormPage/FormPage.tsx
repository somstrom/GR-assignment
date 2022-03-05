import React, {useState} from "react";

import Header from "../../components/Header/Header";
import PageImage from "../../components/PageImage/PageImage";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageIndicator from "../../components/PageIndicator/PageIndicator";
import PageContent from "../../components/PageContent/PageContent";
import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import TextInput from "../../components/Form/TextInput/TextInput";
import PhoneNumberInput from "../../components/Form/PhoneNumberInput/PhoneNumberInput";
import StyledContainerBtn from "../../components/Buttons/ButtonsContainer";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";
import FormContainer from "../Form/FormContainer";

const FormPage = () => {

  return (
    <>
      <Header />
      <Container>
        <PageContent>
          <PageIndicator activePage={[false, true, false]} />
          <PageTitle title={"Potrebujeme od Vás zopár informácií"} />
          <FormContainer />
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default FormPage;
