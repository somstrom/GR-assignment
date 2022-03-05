type Action = { type: string; playload: string };

const initialState = ''

export const chooseShelter = (state: string = initialState, action: Action) => {
    switch (action.type) {
    case "CHANGE_SHELTER":
      return action.playload;
    default:
      return state;
  }
};
