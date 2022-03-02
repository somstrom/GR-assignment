import React from "react";

import Header from "../../components/Header/Header";
import PageIndicator from "../../components/PageIndicator/PageIndicator";
import Form from "../Form/Form"
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageParagraph from "../../components/PageUI/PageParagraph/PageParagraph";
import CheckBox from "../../components/Form/CheckBox/CheckBox";
import PageImage from "../../components/PageImage/PageImage";

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
  return (
    <>
      <Header></Header>
      <PageIndicator activePage={[true, false, false]}></PageIndicator>
      <PageTitle title={'Vyberte si možnosť, ako chcete pomôcť'}></PageTitle>
      <PageParagraph titleParagraph={'Akou formou chcete pomôcť'} infoParagraph={'Chcem finančne prispieť celej nadácií'}></PageParagraph>
      <Form></Form>
      <CheckBox id={'check-box-id'} label={'Súhlasím so spracovaním mojich osobných údajov'}></CheckBox>
      <PageImage></PageImage>
      <div style={{ height: "100vh" }}></div>
    </>
  );
};

export default LandingPage;
