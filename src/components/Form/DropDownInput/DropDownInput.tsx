import { useState } from "react";

import { TextInputWrapper } from "../TextInput/StyledTextInput";
import {
  DropDownContainer,
  DropDownLabel,
  DropDownList,
  DropDownListContainer,
  DropDownPlaceholder,
  ListItem,
} from "./StyledDropDown";

type shelter = {
  id: number;
  name: string;
};

type props = {
  placeholder: string;
  id: string;
  data: shelter[] | null;
  onChange: any;
  defaultValue: string;
};

const DropDownInput = ({
  placeholder,
  id,
  data,
  onChange,
  defaultValue,
}: props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  const toggling = () => setIsOpen(!isOpen);

  return (
    <>
      <TextInputWrapper focus={isOpen} onClick={toggling} dropdown={true}>
        <DropDownContainer>
          <DropDownLabel>Útulok</DropDownLabel>
          <DropDownPlaceholder>
            {defaultValue !== "empty"
              ? defaultValue
              : selectedOption || placeholder}
          </DropDownPlaceholder>
        </DropDownContainer>
      </TextInputWrapper>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {data &&
              data.map((shelter: shelter) => (
                <ListItem
                  onClick={onOptionClicked(shelter.name)}
                  key={shelter.id}
                >
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
