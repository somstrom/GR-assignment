type button = {
  value: number;
  isActive: boolean;
};

const initialState: button[] = [
  { value: 5, isActive: true },
  { value: 10, isActive: false },
  { value: 20, isActive: false },
  { value: 30, isActive: false },
  { value: 50, isActive: false },
  { value: 100, isActive: false },
];

type Action = { type: string; playload: number };

export const switchButton = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SWITCH_MONEY_BUTTON":
      const newState = state.map((button: button) =>
        button.value === action.playload
          ? { value: button.value, isActive: true }
          : { value: button.value, isActive: false }
      );
      return newState;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
