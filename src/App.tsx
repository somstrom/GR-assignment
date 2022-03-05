import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

import LandingPage from "./containers/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import FinalPage from "./containers/FinalPage/FinalPage";
import FormPage from "./containers/FormPage/FormPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/formular" exact>
          <FormPage />
        </Route>
        <Route path="/odoslanie" exact>
          <FinalPage />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
