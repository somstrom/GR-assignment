import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import CheckBox from "../../components/Form/CheckBox/CheckBox";
import Header from "../../components/Header/Header";
import PageIndicator from "../../components/PageIndicator/PageIndicator";
import PageParagraph from "../../components/PageUI/PageParagraph/PageParagraph";
import Container from "../../components/Container/Container";
import PageImage from "../../components/PageImage/PageImage";
import PageContent from "../../components/PageContent/PageContent";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import SecondaryButton from "../../components/Buttons/Secondary/SecondaryButton";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import { RESET_ACTION, SET_ACCESSIBLE_PAGES } from "../../store/actions";
import { valueTernary } from "react-select/dist/declarations/src/utils";

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
  const history = useHistory();
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

  const accessiblePages: boolean[] = useSelector(
    (state: any) => state.accessiblePages
  );

  const shelter: shelter = useSelector((state: any) => state.chosenShelter);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleClick = () => {
    handlePost();
    dispatch(RESET_ACTION);
    dispatch(SET_ACCESSIBLE_PAGES([true, false, false]));
  };

  useEffect(() => {
    !accessiblePages[2] && history.goBack();
  }, []);

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
            phone: activeFlag.prefix + formData.phone.split(" ").join(''),
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
          <PageIndicator activePage={[false, false, true]} />
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
            <Link to="/formular">
              <SecondaryButton context={"Späť"} />
            </Link>
            <Link to="">
              <PrimaryButton
                context={"Odoslať formulár"}
                disabled={checked}
                onClick={handleClick}
              />
            </Link>
          </ButtonsContainer>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default FinalPage;
