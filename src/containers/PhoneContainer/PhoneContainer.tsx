import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PhoneNumber from "../../components/Form/PhoneNumberInput/PhoneNumber";
import { flag } from "../../types.interface";
import { CHANGE_FLAG } from "../../store/actions";

type props = {
  label: string;
  id: string;
  register: any;
};

const PhoneContainer = ({ label, id, register }: props) => {
  const dispatch = useDispatch();
  const activeFlag: flag = useSelector((state: any) => state.activeFlag);
  const flags = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
      prefix: "+421",
      alt: "sk",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
      prefix: "+420",
      alt: "cz",
    },
  ];
  const [togleFlag, setTogleFlag] = useState<boolean>(
    activeFlag.alt === flags[0].alt
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{3})/g, "$1 ")
      .trim();
  };

  const toggling = () => {
    dispatch(CHANGE_FLAG(flags[+togleFlag]));
    setTogleFlag(!togleFlag);
  };

  return (
    <>
      <PhoneNumber
        flags={flags}
        activeFlag={activeFlag}
        id={id}
        label={label}
        register={register}
        handleChange={handleChange}
        toggling={toggling}
      ></PhoneNumber>
    </>
  );
};

export default PhoneContainer;
