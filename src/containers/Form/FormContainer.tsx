import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { validationSchema } from "./ValidationSchema";
import TextInput from "../../components/Form/TextInput/TextInput";
import Form from "../../components/Form/Form";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";
import ErrorMessage from "../../components/Form/ErrorMessage/ErrorMessage";
import PhoneContainer from "../PhoneContainer/PhoneContainer";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import { fillUpFormData, SET_ACCESSIBLE_PAGES } from "../../store/actions";

type FormData = {
  firstname?: string;
  lastname: string;
  email: string;
  phone?: number;
};

const FormContainer = () => {
  const history = useHistory();
  const formPrefillData: FormData = useSelector(
    (state: any) => state.formReducer
  );
  const accessiblePages: boolean[] = useSelector(
    (state: any) => state.accessiblePages
  );
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formPrefillData,
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    !accessiblePages[1] && history.goBack();
  }, []);

  const onSubmit = handleSubmit((data) => {
    dispatch(fillUpFormData(data));
    dispatch(SET_ACCESSIBLE_PAGES([true, true, true]));
    history.push("/odoslanie");
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
          isRequired={true}
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
          <Link to="/">
            <SecondaryButton context="Späť" />
          </Link>
          <PrimaryButton type="button" context="Pokračovať" />
        </ButtonsContainer>
      </Form>
    </>
  );
};

export default FormContainer;
