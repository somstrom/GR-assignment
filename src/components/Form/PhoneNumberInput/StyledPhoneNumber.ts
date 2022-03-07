import styled from "styled-components";


type props = {
  prefix: string;
};
export const StyledFlag = styled.img`
  width: 1rem;
  // height: 1rem;
`;
export const StyledPhoneNumberInput = styled.input`
  border: none;
  outline: none;
  width: 80%;
  border-radius: 8px;
  padding: 0 1.5rem 1rem 0;
  line-height: 1.3rem;
  color: #9f9f9f;
  // font-size: 1rem;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
`;

export const StyledPhoneWrapper = styled.div`
  display: flex;
  
`;

export const StyledFlagWrapper = styled.div<props>`
  width: 3.5rem;
  display: flex;
  height: 1rem;
  color: #9f9f9f;
  padding: 0.15rem 0.3rem 0 1.5rem;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

export const StyledPrefix = styled.div`
  font-size: 13px;
`;

export const FlagItem = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const FlagList = styled.div`
  display: flex;
  width: 100%;
  max-height: 2rem;
  padding-left: 1.5rem;
  color: #9f9f9f;
  padding-top: 0.5rem;
  cursor: pointer;
`;
