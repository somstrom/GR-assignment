type shelter = {
    id: number;
    name: string;
  };

  type Action = { type: string; playload: shelter };

const initialState = {
    name: 'empty',
    id: -1
}

export const chooseShelter = (state: shelter = initialState, action: Action) => {
    switch (action.type) {
    case "CHANGE_SHELTER":
      return action.playload;
    case "RESET":
        return initialState;
    default:
      return state;
  }
};
