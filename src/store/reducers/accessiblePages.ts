type Action = { type: string; playload: boolean[] };

const initialState: boolean[] = [true, false, false];

export const accessiblePages = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_ACCESSIBLE_PAGES":
        return action.playload
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
