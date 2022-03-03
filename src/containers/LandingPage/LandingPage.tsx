import React, { useEffect, useState } from "react";
import axios from "axios";

import PageIndicator from "../../components/PageIndicator/PageIndicator";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageImage from "../../components/PageImage/PageImage";
import PageContent from "../../components/PageContent/PageContent";
import Container from "../../components/Container/Container";
import ButtonsContainer from "../../components/Buttons/ButtonsContainer";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import TernaryButton from "../../components/Buttons/Ternary/TernaryButton";
import DropDownInput from "../../components/Form/DropDownInput/DropDownInput";
import OptionalButton from '../../components/Buttons/Optional/OptionalButton'


type shelter = {
  id: number;
  name: string;
};

const LandingPage = () => {
  /**
   * header
   * informacia o aktualnej page
   * prepínač medzi druhom prispevku => animovany posuvnik
   * input o projekte - aky utulok
   * suma ktoru cheme prispiet - 6 tlacidla jeden input cisla
   * (pri dlhsom cisle ako je trebas 3 -> skoc do noveho riadku nech je vidno cele) *
   * button components -> primarne secundarne -> rozdiel iba vo farbe, potrebujem 2?
   * footer bude mimo switch, je tam stale
   * header nie je sucastou landing page musi byt stale v componente page
   * flex -> na lavo spomenute vyssie, na pravo obrazok
   * riesenie responzivnosti? -> obrazok je uzky, varianta bez obrazku pri malom rozliseni ?
   *          -> skor nechat obrazok stale
   * */

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

  const moneyButtons: number[] = [5, 10, 20, 30, 50, 100];

  const [activeButton, setActiveButton] = useState<number>(0);
  useEffect(() => {
    console.log(activeButton);
  }, [activeButton])

  return (
    <>
      <div style={{ height: "40px", width: "100%" }}></div>
      <Container>
        <PageContent>
          <PageIndicator activePage={[true, false, false]} />
          <PageTitle title="Vyberte si možnosť, ako chcete pomôcť" />
          <OptionalButton />
          <DropDownInput
            id="dorp-down-id"
            label="Útulok"
            placeholder="Vyberte útulok zo zoznamu"
            data={sheltersList}
          />
          <ButtonsContainer>
            {moneyButtons.map((value: number): any => (
              <TernaryButton context={value} key={value} setActiveButton={setActiveButton} />
            ))}
            <TernaryButton setActiveButton={setActiveButton} type="number" />
          </ButtonsContainer>
          <ButtonsContainer>
            <PrimaryButton context="Pokračovať" />
          </ButtonsContainer>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default LandingPage;
