import { flag } from "../../types.interface";


type Action = { type: string; playload: flag };

const initialState = {
  src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
  prefix: "+421",
  alt: "sk",
};

export const setFlag = (state: flag = initialState, action: Action) => {
  switch (action.type) {
    case "CHANGE_FLAG":
      return (state = action.playload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
