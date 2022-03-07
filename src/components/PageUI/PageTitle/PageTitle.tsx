import { StyledPageTitle } from "./StyledPageTitle";

type props = {
  title: string;
};

const PageTitle = ({ title }: props) => {
  return <StyledPageTitle>{title}</StyledPageTitle>
};

export default PageTitle;
