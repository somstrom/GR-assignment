type flag = {
    src: string,
    prefix: string,
    alt: string
  };
  
  type Action = { type: string; playload: flag };
  
  const initialData = {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
    prefix: "+421",
    alt: "sk",
  };
  
  export const setFlag = (state: flag = initialData, action: Action) => {
    switch (action.type) {
      case "CHANGE_FLAG":
        return state = action.playload;
      default:
        return state;
    }
  };
  