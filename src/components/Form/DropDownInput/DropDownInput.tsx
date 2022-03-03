import React, { useState } from "react";
import axios from 'axios';

import "./DropDownInput.css";
import {
  DropDownContainer,
  DropDownLabel,
  DropDownList,
  DropDownListContainer,
  DropDownPlaceholder,
  ListItem,
} from "./StyledDropDown";

type shelter = {
  id: number,
  name: string
}

type props = {
  placeholder: string;
  label: string;
  type?: string;
  isRequired?: boolean;
  id: string;
  data: shelter[] | null
};

const DropDownInput = ({
  placeholder,
  label,
  type,
  isRequired,
  id,
  data,
}: props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

    console.log(data);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`full-input ${isOpen ? "focused" : "not-focused"}`}
        style={{ marginBottom: "-1px" }}
        onClick={toggling}
        tabIndex={100}
      >
        <DropDownContainer>
          <DropDownLabel>Útulok</DropDownLabel>
          <DropDownPlaceholder>
            {selectedOption || "Vyberte útulok zo zoznamu"}
          </DropDownPlaceholder>
        </DropDownContainer>
      </div>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {data && data.map((shelter: shelter) => (
              <ListItem onClick={onOptionClicked(shelter.name)} key={shelter.id}>
                {shelter.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </>
  );
};

export default DropDownInput;
