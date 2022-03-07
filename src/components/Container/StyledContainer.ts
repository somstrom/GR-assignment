import styled from "styled-components";

type props = {
  action: string;
};

export const ContainerWrapper = styled.div`
  width: 70%;
  margin: 5.9rem auto 7.875rem auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1600px) {
    margin: 2rem auto 3rem auto;
  }
  @media (max-width: 900px) {
    width: 80%;
    // margin: 2rem auto 3rem auto;
  }
`;

export const StyledContainer = styled.div<props>`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  z-index: 1;
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes slideInFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: 0.5s ease-out 0s 1
    ${(props) =>
      props.action === "left" ? "slideInFromLeft;" : "slideInFromRight;"};
`;
