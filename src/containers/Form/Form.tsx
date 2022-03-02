import React from "react";

import PhoneNumberInput from "../../components/Form/PhoneNumberInput/PhoneInput";
import TextInput from "../../components/Form/TextInput/TextInput";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";

const Form = () => {
  return (
    <form>
      <TextInput
        placeholder={"Zadajte Vaše meno"}
        label={"Meno"}
        type={"text"}
        range={{ start: 2, end: 20 }}
        id={'input-name'}
      ></TextInput>
      <TextInput
        placeholder={"Zadajte Vaše priezvisko"}
        label={"Priezvisko"}
        type={"text"}
        id={'input-surename'}
        isRequired={true}
        range={{ start: 2, end: 30 }}
      ></TextInput>
      <TextInput
        placeholder={"Zadajte Váš e-mail"}
        label={"E-mailová adresa"}
        type={"email"}
        id={'input-mail'}
        isRequired={true}
      ></TextInput>
      <PhoneNumberInput
        label={"Telefonné číslo"}
        id={'input-phone'}
      ></PhoneNumberInput>
      <PrimaryButton context={'Pokračovať'} type={'Submit'}></PrimaryButton>
      <SecondaryButton context={'Späť'} type={'Submit'}></SecondaryButton>
    </form>
  );
};

export default Form;
