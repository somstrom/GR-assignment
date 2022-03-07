import React, { useEffect, useState } from "react";

import TernaryButton from "../../components/Buttons/Ternary/TernaryButton";


type props = {
  context: number;
  buttonType?: string;
  handleButtonClick: () => void;
  isActive: boolean;
  handleValue?: React.Dispatch<React.SetStateAction<number>>;
};

const TernaryButtonContainer = ({
  context,
  buttonType,
  handleButtonClick,
  isActive,
  handleValue,
}: props) => {
  const [inputLength, setInputLength] = useState<number>(0);
  useEffect(() => {
    console.log(context);
    setInputLength(context.toString().length);
    handleValue && handleValue(context);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/[^0-9.]+/g, "");
    setInputLength(e.target.value.length);
    handleValue && handleValue(parseInt(e.target.value));
  };

  return (
    <TernaryButton
      handleChange={handleChange}
      inputLength={inputLength}
      buttonType={buttonType}
      context={context}
      handleButtonClick={handleButtonClick}
      isActive={isActive}
    ></TernaryButton>
  );
};

export default TernaryButtonContainer;
