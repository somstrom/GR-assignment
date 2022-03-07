import styled from "styled-components";

type props = {
  icon?: string;
  isActive?: boolean;
};

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

export const ModalContent = styled.div<props>`
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  > p {
      padding-bottom: 0;
      margin-bottom: -1rem;
  }
  > button {
      margin-top: 2rem;
  }
  > img {
      margin-bottom: 2rem;
  }
`;

export const ModalLogo = styled.img<props>`
    width: 80%;
`
