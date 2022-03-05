type actionButton = {
  paragraph: string;
  isActive: boolean;
  src: string;
  type: string;
  id: number;
};

const initialState: actionButton[] = [
  {
    paragraph: "Chcem finančne prispieť konkrétnemu útulku",
    isActive: false,
    src: "/wallet.svg",
    type: "left",
    id: 1,
  },
  {
    paragraph: "Chcem finančne prispieť celej nadácií",
    isActive: true,
    src: "/paw.svg",
    type: "right",
    id: 2,
  },
];

type Action = { type: string; playload: number };

export const switchActionButton = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SWITCH_ACTION_BUTTON":
      return state.map((button: actionButton) =>
        button.id === action.playload
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      );
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
