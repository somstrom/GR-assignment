import React from "react";

import Header from "../../components/Header/Header";
import PageImage from "../../components/PageImage/PageImage";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageIndicator from "../../components/PageIndicator/PageIndicator";
import PageContent from "../../components/PageContent/PageContent";
import Form from "../../components/Form/Form";
import Container from "../../components/Container/Container";
import TextInput from "../../components/Form/TextInput/TextInput";
import PhoneNumberInput from "../../components/Form/PhoneNumberInput/PhoneNumberInput";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";

const FormPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PageContent>
          <PageIndicator activePage={[false, true, false]} />
          <PageTitle title={"Potrebujeme od Vás zopár informácií"} />
          <Form title={"O vás"}>
            <TextInput
              id={"name-input"}
              label={"Meno"}
              placeholder={"Zadajte Vaše meno"}
              type={"text"}
              range={{ start: 2, end: 20 }}
            />
            <TextInput
              id="surename-input"
              label="Priezvisko"
              placeholder="Zadajte Vaše priezvisko"
              type="text"
              range={{ start: 2, end: 30 }}
              isRequired={true}
            />
            <TextInput
              id={"email-input"}
              label={"E-mailová adresa"}
              placeholder={"Zadajte Váš e-mail"}
              type={"text"}
              range={{ start: 2, end: 30 }}
            />
            <PhoneNumberInput label={"Telefónne číslo"} id={"phone-id"} />
            <ButtonsContainer>
              <SecondaryButton context="Späť" />
              <PrimaryButton context="Pokračovať" />
            </ButtonsContainer>
          </Form>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default FormPage;
