import styled from "styled-components";

type props = {
    prefix: string;
}

export const StyledPhoneNumberInput = styled.input`
  border: none;
  outline: none;
  width: 80%;
  border-radius: 8px;
  padding: 0 1.5rem 1rem 0;
  line-height: 1.3rem;
  color: #9F9F9F;
  font-size: 1rem;
`;

export const StyledPhoneWrapper = styled.div`
  display: flex;
`;
export const StyledFlag = styled.img`
    width: 1rem;
    // height: 1rem;

    `
export const StyledFlagWrapper = styled.div<props>`
  width: 4rem;
  display: flex;
  height: 1rem;
  color: #9f9f9f;
  padding: 2px 0.3rem 0 1.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledPrefix = styled.div``;

export const FlagItem = styled.img`
    width: 1rem;
    height: 1rem;
    padding-right: 0.3rem;
`;

export const FlagList = styled.div`
    display: flex;
    width: 100%;
    max-height: 2rem;
    padding-left: 1.5rem;
    color: #9f9f9f;
    padding-top: 0.5rem;
    cursor: pointer;
`

