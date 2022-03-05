import { switchActionButton } from "./switchActionButton";
import { switchButton } from "./switchButton";
import { formReducer } from "./formReducer";
import { combineReducers } from "redux";
import { chooseShelter } from "./chooseShelter";
import { setFlag } from "./setFlag";
import { accessiblePages } from "./accessiblePages";

const allReducers = combineReducers({
  actionButtons: switchActionButton,
  moneyButtons: switchButton,
  formReducer,
  chosenShelter: chooseShelter,
  activeFlag: setFlag,
  accessiblePages,
});

export default allReducers;
