type formData = {
  firstname?: string;
  lastname: string;
  email?: string;
  number?: number;
};

type Action = { type: string; playload: formData };

const initialState = {
  lastname: "",
};

export const formReducer = (state: formData = initialState, action: Action) => {
  switch (action.type) {
    case "FILL_UP_FORM_DATA":
      return (state = action.playload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
