type Action = { type: string; playload: string };

const initialState: string = 'left';

export const slideActionReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_SLIDE_ACTION_TYPE":
        return action.playload
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
