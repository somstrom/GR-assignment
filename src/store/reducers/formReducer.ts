type formData = {
  firstname?: string;
  lastname: string;
  email?: string;
  number?: number;
};

type Action = { type: string; playload: formData };

const initialData = {
  lastname: "",
};

export const formReducer = (state: formData = initialData, action: Action) => {
  switch (action.type) {
    case "FILL_UP_FORM_DATA":
      return state = action.playload;
    default:
      return state;
  }
};
