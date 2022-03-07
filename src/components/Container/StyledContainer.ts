import styled from "styled-components";

type props = {
  action: string;
};

export const ContainerWrapper = styled.div`
  width: 70%;
  margin: 5.9rem auto 7.875rem auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 90%;
    margin: 3rem auto 4rem auto;
  }
`;

export const StyledContainer = styled.div<props>`
  display: flex;
  /* max-height: 100vh; */
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
