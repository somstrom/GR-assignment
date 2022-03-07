import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageImage from "../../components/PageImage/PageImage";
import PageContent from "../../components/PageContent/PageContent";
import Container from "../../components/Container/Container";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import DropDownInput from "../../components/Form/DropDownInput/DropDownInput";
import OptionalButton from "../../components/Buttons/Optional/OptionalButton";
import PageParagraph from "../../components/PageUI/PageParagraph/PageParagraph";
import ParagraphWrapper from "../../components/PageUI/ParagraphWrapper";
import {
  SET_ACCESSIBLE_PAGES,
  DEACTIVATE_NUMBER_BUTTON,
  ACTIVATE_NUMBER_BUTTON,
  SET_NUMBER_VALUE,
  SET_SLIDE_ACTION_TYPE,
  SET_PREVIOUS_PAGE,
  SWITCH_ACTION_BUTTON,
  DEACTIVATE_BUTTONS,
  SWITCH_MONEY_BUTTON,
  CHANGE_SHELTER,
} from "../../store/actions";
import TernaryButtonContainer from "../Buttons/TernaryButtonContainer";
import { shelter, button, action } from "../../types.interface";

const LandingPage = () => {
  const dispatch = useDispatch();
  const actionButtons: action[] = useSelector(
    (state: any) => state.actionButtons
  );
  const moneyButtons: button[] = useSelector(
    (state: any) => state.moneyButtons
  );
  const chosenShelter: shelter = useSelector(
    (state: any) => state.chosenShelter
  );

  const [inputValue, setInputValue] = useState<number>(0);
  const [sheltersList, setSheltersList] = useState<shelter[]>([
    { name: "empty", id: -1 },
  ]);

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

  useEffect(() => {
    isNaN(inputValue) && setInputValue(-1);
  }, [inputValue]);

  const handleClick = () => {
    dispatch(SET_PREVIOUS_PAGE(0));
    dispatch(SET_ACCESSIBLE_PAGES(1));
    dispatch(SET_SLIDE_ACTION_TYPE("left"));
    dispatch(SET_NUMBER_VALUE(inputValue));
  };

  const handleActionsButtonClick = (id: number) => {
    dispatch(SWITCH_ACTION_BUTTON(id));
  };

  const handleMoneyButtonClick = (value: number, type: string) => {
    if (type === "number") {
      dispatch(DEACTIVATE_BUTTONS(value));
      dispatch(ACTIVATE_NUMBER_BUTTON(value));
    } else {
      dispatch(DEACTIVATE_NUMBER_BUTTON(value));
      dispatch(SWITCH_MONEY_BUTTON(value));
    }
  };

  const handleShelterChange = (shelter: string) => {
    const finalShelter =
      sheltersList.find((s: shelter) => s.name === shelter) || sheltersList[0];
    dispatch(CHANGE_SHELTER(finalShelter));
  };

  return (
    <>
      <div style={{ height: "40px", width: "100%" }}></div>
      <Container>
        <PageContent>
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
            defaultValue={chosenShelter.name}
            onChange={handleShelterChange}
            id="dorp-down-id"
            placeholder="Vyberte útulok zo zoznamu"
            data={sheltersList}
          />
          <PageParagraph titleParagraph="Suma, ktorou chem prispieť"></PageParagraph>
          <ButtonsContainer type="money">
            {moneyButtons.map((button: button): any => (
              <TernaryButtonContainer
                buttonType={button.type}
                context={button.value}
                key={button.type === "number" ? "number" : button.value}
                handleValue={setInputValue}
                handleButtonClick={() =>
                  handleMoneyButtonClick(button.value, button.type)
                }
                isActive={button.isActive}
              />
            ))}
          </ButtonsContainer>
          <ButtonsContainer type="nav-buttons">
            <PrimaryButton
              onClick={handleClick}
              context="Pokračovať"
              disabled={
                (actionButtons[0].isActive && chosenShelter.name === "empty") ||
                (moneyButtons[6].isActive &&
                  (inputValue === 0 || isNaN(inputValue) || inputValue === -1))
              }
            />
          </ButtonsContainer>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default LandingPage;
