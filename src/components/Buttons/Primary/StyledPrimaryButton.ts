import styled from "styled-components";

type props = {
  disabled?: boolean;
};

export const ButtonPrimary = styled.button<props>`
  padding: 1.25rem 1.5rem;
  background: ${(props) =>
    props.disabled
      ? "rgb(159, 159, 159, 1);"
      : "linear-gradient(115.41deg, #cd8a64 -1.77%, #c4794f 73.03%);"}
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 100px;
  border: none;
  font-weight: 800;
  font-size: 0.875rem;
  color: white;
  line-height: 19px;
  cursor: pointer;
  border 1px solid transparent;
  ${(props) =>
    !props.disabled
      ? "&:hover{background: white;border: 1px solid #CD8B65; color: #2f2f2f;}"
      : ";"}
`;
