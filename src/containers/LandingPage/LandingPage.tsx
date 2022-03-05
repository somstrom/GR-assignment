import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import PageIndicator from "../../components/PageIndicator/PageIndicator";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageImage from "../../components/PageImage/PageImage";
import PageContent from "../../components/PageContent/PageContent";
import Container from "../../components/Container/Container";
import StyledContainerBtn from "../../components/Buttons/ButtonsContainer";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import TernaryButton from "../../components/Buttons/Ternary/TernaryButton";
import DropDownInput from "../../components/Form/DropDownInput/DropDownInput";
import OptionalButton from "../../components/Buttons/Optional/OptionalButton";
import OptionalButtonsContainer from "../../components/Buttons/Optional/OptionalButtonsContainer";
import PageParagraph from "../../components/PageUI/PageParagraph/PageParagraph";
import { StringLocale } from "yup/lib/locale";
import ParagraphWrapper from "../../components/PageUI/ParagraphWrapper";
import { changeShelter, switchMoneyButtons, switchActionButtons } from "../../store/actions";

type shelter = {
  id: number;
  name: string;
};

type button = {
  value: number;
  isActive: boolean;
};

type action = {
  paragraph: string;
  isActive: boolean;
  src: string;
  type: string;
  id: number;
};

const LandingPage = () => {
  let actionButtons: action[] = useSelector(
    (state: any) => state.actionButtons
  );
  const moneyButtons: button[] = useSelector(
    (state: any) => state.moneyButtons
  );

  const dispatch = useDispatch();
  const [sheltersList, setSheltersList] = useState<shelter[] | null>(null);

  useEffect(() => {
    axios
      .get("https://frontend-assignment-api.goodrequest.dev/api/v1/shelters")
      .then((res) => {
        const shelters = res.data.shelters;
        setSheltersList(shelters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleActionsButtonClick = (id: number) => {
    dispatch(switchActionButtons(id));
  };

  const handleMoneyButtonClick = (value: number) => {
    dispatch(switchMoneyButtons(value));
  };

  const handleShelterChange = (shelter: string) => {
    dispatch(changeShelter(shelter))
    console.log(shelter);
  }

  return (
    <>
      <div style={{ height: "40px", width: "100%" }}></div>
      <Container>
        <PageContent>
          <PageIndicator activePage={[true, false, false]} />
          <PageTitle title="Vyberte si možnosť, ako chcete pomôcť" />
          <ButtonsContainer>
            {actionButtons.map((button: action) => (
              <OptionalButton
                context={button.paragraph}
                handleButtonClick={() => handleActionsButtonClick(button.id)}
                icon={button.src}
                type={button.type}
                key={button.id}
                isActive={button.isActive}
              ></OptionalButton>
            ))}
          </ButtonsContainer>
          <ParagraphWrapper>
            <PageParagraph titleParagraph="O projekte"></PageParagraph>
            <PageParagraph
              infoParagraph={
                !actionButtons[0].isActive ? "Nepovinné" : "Povinné"
              }
            ></PageParagraph>
          </ParagraphWrapper>
          <DropDownInput
            onChange={handleShelterChange}
            id="dorp-down-id"
            label="Útulok"
            placeholder="Vyberte útulok zo zoznamu"
            data={sheltersList}
          />
          <PageParagraph titleParagraph="Suma, ktorou chem prispieť"></PageParagraph>
          <ButtonsContainer>
            {moneyButtons.map((button: button): any => (
              <TernaryButton
                context={button.value}
                key={button.value}
                handleButtonClick={() => handleMoneyButtonClick(button.value)}
                isActive={button.isActive}
              />
            ))}
            {/* <TernaryButton setActiveButton={setActiveButton} type="number" /> */}
          </ButtonsContainer>
          <ButtonsContainer>
            <Link to="/form">
              <PrimaryButton context="Pokračovať" />
            </Link>
          </ButtonsContainer>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default LandingPage;
