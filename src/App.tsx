import React from 'react';

import LandingPage from './containers/LandingPage/LandingPage';
import Footer from "./components/Footer/Footer";
import FinalPage from './containers/FinalPage/FinalPage';
import FormPage from './containers/FormPage/FormPage';

function App() {
  return (
    <>
      <FormPage></FormPage>
      {/* <FinalPage></FinalPage> */}
      {/* <LandingPage></LandingPage> */}
      <Footer></Footer>
    </>
  );
}

export default App;
