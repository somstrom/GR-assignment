import React from "react";

import Header from "../../components/Header/Header";
import Form from "../Form/Form"

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
      <Form></Form>
      {/* <div style={{ height: "100vh" }}></div> */}
    </>
  );
};

export default LandingPage;
