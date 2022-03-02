import React from "react";

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


const FinalPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PageContent>
          <PageIndicator activePage={[false, false, true]} />
          <PageTitle title={"Skontrolujte si zadané údaje"} />
          <PageParagraph
            infoParagraph={"Chcem finančne prispieť celej nadácií"}
            titleParagraph={"Akou formou chem pomôcť"}
          />
          <PageParagraph
            infoParagraph={"Mestský útulok, Žilina"}
            titleParagraph={"Najviac mi záleží na útulku"}
          />
          <PageParagraph
            titleParagraph={"Suma ktorou chcem pomôcť"}
            infoParagraph={"50 €"}
          />
          <PageParagraph
            titleParagraph={"Meno a priezvisko"}
            infoParagraph={"Peter Reguli"}
          />
          <PageParagraph
            titleParagraph={"E-mailová adresa"}
            infoParagraph={"peter.reguli@goodrequest.com"}
          />
          <PageParagraph
            titleParagraph={"Telefónne číslo"}
            infoParagraph={"+421 902 237 207"}
          />
          <CheckBox id={'final-page-check-box'} label={'Súhlasím so spracovaním mojich osobných údajov'} isRequired={true}/>
          <ButtonsContainer>
              <SecondaryButton context={"Späť"}/>
              <PrimaryButton context={'Odoslať formulár'} disabled={true}/>
          </ButtonsContainer>
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default FinalPage;
