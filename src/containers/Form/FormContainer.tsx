import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";

import { validationSchema } from "./ValidationSchema";
import TextInput from "../../components/Form/TextInput/TextInput";
import Form from "../../components/Form/Form";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";
import ErrorMessage from "../../components/Form/ErrorMessage/ErrorMessage";
import PhoneContainer from "../PhoneContainer/PhoneContainer";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import { FILL_UP_FORMDATA, SET_ACCESSIBLE_PAGES, SET_PREVIOUS_PAGE, SET_SLIDE_ACTION_TYPE } from "../../store/actions";


type FormData = {
  firstname?: string;
  lastname: string;
  email: string;
  phone?: number;
};

const FormContainer = () => {
  const formPrefillData: FormData = useSelector(
    (state: any) => state.formReducer
  );
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formPrefillData,
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {}, []);

  const onSubmit = handleSubmit((data) => {
    dispatch(FILL_UP_FORMDATA(data));
    dispatch(SET_PREVIOUS_PAGE(1));
    dispatch(SET_SLIDE_ACTION_TYPE("left"));
    dispatch(SET_ACCESSIBLE_PAGES(2));
  });

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <>
      <Form title="O vás" onSubmit={onSubmit} onKeyPress={handleEnterPress}>
        <TextInput
          id="firstname"
          label={"Meno"}
          placeholder={"Zadajte Vaše meno"}
          type={"text"}
          max={20}
          register={register}
        />
        {errors?.firstname && (
          <ErrorMessage message={errors.firstname.message}></ErrorMessage>
        )}
        <TextInput
          id="lastname"
          label="Priezvisko"
          placeholder="Zadajte Vaše priezvisko"
          type="text"
          max={30}
          register={register}
        />
        {errors?.lastname && (
          <ErrorMessage message={errors.lastname.message}></ErrorMessage>
        )}
        <TextInput
          id={"email"}
          label={"E-mailová adresa"}
          placeholder={"Zadajte Váš e-mail"}
          type={"text"}
          register={register}
        />
        {errors?.email && (
          <ErrorMessage message={errors.email.message}></ErrorMessage>
        )}
        <PhoneContainer
          id="phone"
          label="Telefónne číslo"
          register={register}
        ></PhoneContainer>
        {errors?.phone && (
          <ErrorMessage message={errors.phone.message}></ErrorMessage>
        )}
        <ButtonsContainer type="nav-buttons">
          <SecondaryButton
            context="Späť"
            onClick={() => {
              dispatch(SET_ACCESSIBLE_PAGES(0));
              dispatch(SET_PREVIOUS_PAGE(1));
              dispatch(SET_SLIDE_ACTION_TYPE("right"));
            }}
          />
          <PrimaryButton context="Pokračovať" />
        </ButtonsContainer>
      </Form>
    </>
  );
};

export default FormContainer;
