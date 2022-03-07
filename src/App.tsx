import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


import LandingPage from "./containers/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import FinalPage from "./containers/FinalPage/FinalPage";
import FormPage from "./containers/FormPage/FormPage";
import { RESET_ACTION } from './store/actions/index'
import PageIndicator from "./components/PageIndicator/PageIndicator";

function App() {
  const dispatch = useDispatch()
  const state: number = useSelector(
    (state: any) => state.accessiblePages
  );
  // const [pages, setPages] = useState<boolean[]>([true, false, false]);

  // useEffect(() => {setPages(state); console.log(state)})

  // const state: boolean[] = [true, false, false];

  useEffect(() => {
    window.scrollTo(0,0)
  }, [state]);

  switch (state) {
    case 0:
      return (
        <>
          <LandingPage />
          <Footer />
        </>
      );
    case 1:
      return (
        <>
          <FormPage />
          <Footer />
        </>
      );
    case 2:
      return (
        <>
          <FinalPage />
          <Footer />
        </>
      );
    default:
      return (
        <>
          <Footer />
          <button onClick={()=> {dispatch(RESET_ACTION)}}>RESET</button>
        </>
      );
  }
}

export default App;
