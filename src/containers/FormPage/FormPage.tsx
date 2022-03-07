import Header from "../../components/Header/Header";
import PageImage from "../../components/PageImage/PageImage";
import PageTitle from "../../components/PageUI/PageTitle/PageTitle";
import PageContent from "../../components/PageContent/PageContent";
import Container from "../../components/Container/Container";
import FormContainer from "../Form/FormContainer";


const FormPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PageContent>
          <PageTitle title={"Potrebujeme od Vás zopár informácií"} />
          <FormContainer />
        </PageContent>
        <PageImage />
      </Container>
    </>
  );
};

export default FormPage;
