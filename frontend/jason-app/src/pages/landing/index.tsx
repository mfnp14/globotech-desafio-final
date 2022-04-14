import { useHistory } from "react-router-dom";
import imagePromotional from "../../assets/pana.png";
import {
  Brand,
  BrandName,
  ButtonPrimaryLanding,
  ButtonSecondaryLanding,
  ContainerLanding,
  ContentBrand,
  ContentButton,
  DescriptionText,
  FirstName,
  ImagePromotional,
  LastName,
  LogoDetailBrand,
  SloganText,
  StyledLinkPrimary,
  StyledLinkSecondary,
} from "./style";
import Footer from "../../component/footer";
import GenericButton from "../../component/Button";

const Landing = () => {
  const history = useHistory();

  const goToPage = (page: any) => {
    history.push(`/${page}`);
  };

  return (
    <>
      <ContainerLanding>
        <ContentBrand>
          <Brand>
            <LogoDetailBrand>{"{"}</LogoDetailBrand>
            <BrandName>
              <FirstName>JASON</FirstName>
              <LastName>FOOD</LastName>
            </BrandName>
            <LogoDetailBrand>{"}"}</LogoDetailBrand>
          </Brand>

          <SloganText>
            Não deixe que a fome te pegue desprevenido, esteja sempre preparado
            para matar aquilo que está te matando.
          </SloganText>

          <DescriptionText>
            Com o Jason você não morre de fome, você pode procurar suas comidas
            favoritas e ainda criar um menu com base nos dias da semana. Tenha
            todos os restaurantes na palma da sua mão e adicione seus pratos
            favoritos de qualquer lugar.
          </DescriptionText>

          <ContentButton>
            <GenericButton
              type="button"
              label={"ver restaurantes"}
              secondary
              onclick={() => goToPage("home")}
            />

            <GenericButton
              type="button"
              label={"cadastrar cardápio"}
              primary
              onclick={() => goToPage("register")}
            />
          </ContentButton>
        </ContentBrand>

        <ImagePromotional src={imagePromotional} />
      </ContainerLanding>
      <Footer />
    </>
  );
};

export default Landing;
