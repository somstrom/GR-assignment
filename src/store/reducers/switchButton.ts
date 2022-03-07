import { button } from "../../types.interface";

const initialState: button[] = [
  { value: 5, isActive: true, type: "btn" },
  { value: 10, isActive: false, type: "btn" },
  { value: 20, isActive: false, type: "btn" },
  { value: 30, isActive: false, type: "btn" },
  { value: 50, isActive: false, type: "btn" },
  { value: 100, isActive: false, type: "btn" },
  { value: -1, isActive: false, type: "number" },
];

type Action = { type: string; playload: number };

export const switchButton = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SWITCH_MONEY_BUTTON":
      const newState = state.map((button: button) =>
        button.value === action.playload
          ? { value: button.value, isActive: true, type: button.type }
          : { value: button.value, isActive: false, type: button.type }
      );
      return newState;

    case "SET_NUMBER_VALUE":
      return state.map((button: button) =>
        button.type === "number"
          ? { ...button, value: action.playload }
          : { ...button }
      );

    case "ACTIVATE_NUMBER_BUTTON":
      return state.map((button: button) =>
        button.type === "number" ? { ...button, isActive: true } : { ...button }
      );

    case "DEACTIVATE_NUMBER_BUTTON":
      return state.map((button: button) =>
        button.type === "number"
          ? { ...button, isActive: false }
          : { ...button }
      );

    case "DEACTIVATE_BUTTONS":
      return state.map((button: button) =>
        button.type === "btn" ? { ...button, isActive: false } : { ...button }
      );

    case "RESET":
      return initialState;

    default:
      return state;
  }
};
