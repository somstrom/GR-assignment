import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import CheckBox from "../../components/Form/CheckBox/CheckBox";
import Header from "../../components/Header/Header";
import PageParagraph from "../../components/PageUI/PageParagraph/PageParagraph";
import Container from "../../components/Container/Container";
import PageImage from "../../components/PageImage/PageImage";
import PageContent from "../../components/PageContent/PageContent";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import {
  RESET_ACTION,
  SET_ACCESSIBLE_PAGES,
  SET_PREVIOUS_PAGE,
  SET_SLIDE_ACTION_TYPE,
} from "../../store/actions";

type flag = {
  src: string;
  prefix: string;
  alt: string;
};

type FormData = {
  firstname?: string;
  lastname: string;
  email: string;
  phone?: string;
};

type button = {
  value: number;
  isActive: boolean;
  type?: string;
};

type action = {
  paragraph: string;
  isActive: boolean;
  src: string;
  type: string;
  id: number;
};

type shelter = {
  id: number;
  name: string;
};

const FinalPage = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(true);

  const formData: FormData = useSelector((state: any) => state.formReducer);

  const activeFlag: flag = useSelector((state: any) => state.activeFlag);

  const moneyValue: number = useSelector(
    (state: any) =>
      state.moneyButtons.find((button: button) => button.isActive).value || 0
  );

  const actionValue: string = useSelector(
    (state: any) =>
      state.actionButtons.find((button: action) => button.isActive).paragraph
  );

  const shelter: shelter = useSelector((state: any) => state.chosenShelter);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleClick = () => {
    dispatch(SET_SLIDE_ACTION_TYPE("left"));
    dispatch(SET_PREVIOUS_PAGE(2));
    handlePost();
    dispatch(RESET_ACTION);
  };

  useEffect(() => {}, []);

  const handlePost = () => {
    console.log({
      ...(formData.firstname
        ? { firstName: formData.firstname }
        : { firstName: " " }),
      lastName: formData.lastname,
      email: formData.email,
      value: moneyValue,
      ...(formData.phone && {
        phone: activeFlag.prefix + formData.phone.split(" ").join(),
      }),
      ...(shelter.id !== -1 && { shelterID: shelter.id }),
    });
    axios
      .post(
        "https://frontend-assignment-api.goodrequest.dev/api/v1/shelters/contribute",
        {
          firstName: formData.firstname || " ",
          lastName: formData.lastname,
          email: formData.email,
          value: moneyValue,
          ...(formData.phone && {
            phone: activeFlag.prefix + formData.phone.split(" ").join(""),
          }),
          ...(shelter.id !== -1 && { shelterID: shelter.id }),
        }
      )
      .then((response: any) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Container>
        <PageContent>
          <PageTitle title={"Skontrolujte si zadané údaje"} />
          <PageParagraph
            infoParagraph={actionValue}
            titleParagraph={"Akou formou chem pomôcť"}
          />
          {shelter.name !== "empty" && (
            <PageParagraph
              infoParagraph={shelter.name}
              titleParagraph={"Najviac mi záleží na útulku"}
            />
          )}
          <PageParagraph
            titleParagraph={"Suma ktorou chcem pomôcť"}
            infoParagraph={`${moneyValue} €`}
          />
          <PageParagraph
            titleParagraph={"Meno a priezvisko"}
            infoParagraph={`${formData.firstname} ${formData.lastname}`}
          />
          {formData.email && (
            <PageParagraph
              titleParagraph={"E-mailová adresa"}
              infoParagraph={formData.email}
            />
          )}
          {formData.phone && (
            <PageParagraph
              titleParagraph={"Telefónne číslo"}
              infoParagraph={`${activeFlag.prefix} ${formData.phone}`}
            />
          )}
          <CheckBox
            handleCheck={toggleChecked}
            id={"final-page-check-box"}
            label={"Súhlasím so spracovaním mojich osobných údajov"}
            isRequired={true}
          />
          <ButtonsContainer type="nav-buttons">
            <SecondaryButton
              context="Späť"
              onClick={() => {
                dispatch(SET_ACCESSIBLE_PAGES(1));
                dispatch(SET_PREVIOUS_PAGE(2));
                dispatch(SET_SLIDE_ACTION_TYPE("right"));
              }}
            />
            <PrimaryButton
              context={"Odoslať formulár"}
              disabled={checked}
              onClick={handleClick}
            />
          </ButtonsContainer>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default FinalPage;
