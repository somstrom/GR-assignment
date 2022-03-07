type Action = { type: string; playload: number };

const initialState: number = 0;

export const accessiblePages = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_ACCESSIBLE_PAGES":
      return action.playload;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const previousPage = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_PREVIOUS_PAGE":
      return action.playload;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
