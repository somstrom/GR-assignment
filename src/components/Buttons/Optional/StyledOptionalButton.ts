import styled from "styled-components";

type props = {
  isActive?: boolean;
  icon?: string;
};

export const OptionalButtonIcon = styled.div<props>`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.isActive ? "white;" : "#9f9f9f;")}
  -webkit-mask: url(${(props) => props.icon}) no-repeat center;
  mask: url(${(props) => props.icon}) no-repeat center;
  z-index: 5;
`;

export const OptionalButtonTag = styled.p`
  text-align: start;
  font-weight: 600;
  line-height: 21px;
`;

export const OptionalButtonWrapper = styled.div`
  width: 100%;
  height: 11.5rem;  
  margin-bottom: 2rem;
  display: flex;
  item-align: start;
  border: 1px solid #cd8b65;
  border-radius: 2rem;
`;

export const IconWrapper = styled.div`
  background-color: rgb(47, 47, 47, 0.16);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionalButtonStyle = styled.button<props>`
cursor: pointer;
  border: none;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 1.5rem;
  border: ${(props) => (props.isActive ? "none;" : "1px solid #CD8B65;")}
  color: ${(props) => (props.isActive ? "white;" : "#585757;")}
  background:  ${(props) =>
    props.isActive
      ? "linear-gradient(180deg, #cd8b65 0%, #bb6b3d 100%);"
      : "#faf9f9;"}
  box-shadow: ${(props) =>
    props.isActive
      ? "0px 100px 80px rgba(0, 0, 0, 0.07),0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198), 0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275), 0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725), 0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);"
      : "none;"}
  &:focus ${OptionalButtonIcon} {
    color: white;
  }
  &:focus ${IconWrapper} {
    background-color: rgb(47, 47, 47, 0.16);
  }
`;

export const OptionalButtonLeft = styled(OptionalButtonStyle)<props>`
  border-radius: 2rem 0 0 2rem;
`;

export const OptionalButtonRight = styled(OptionalButtonStyle)<props>`
  border-radius: 0 2rem 2rem 0;
`;
