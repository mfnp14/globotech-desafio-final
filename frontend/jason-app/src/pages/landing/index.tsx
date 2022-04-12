import { Link } from "react-router-dom";
import Header from "../../component/header";
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
  TextButtonPrimaryLanding,
  TextButtonSecondaryLanding,
} from "./style";
import Footer from "../../component/footer";

const Landing = () => {
  return (
    <>
      <Header />
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
            <ButtonSecondaryLanding>
              <Link to={"/"}>
                {/* <TextButtonSecondaryLanding> */}
                Ver restaurantes
                {/* </TextButtonSecondaryLanding> */}
              </Link>
            </ButtonSecondaryLanding>

            <ButtonPrimaryLanding>
              <Link to={"/"}>
                {/* <TextButtonPrimaryLanding> */}
                Criar cardápio
                {/* </TextButtonPrimaryLanding> */}
              </Link>
            </ButtonPrimaryLanding>
          </ContentButton>
        </ContentBrand>

        <ImagePromotional src={imagePromotional} />
      </ContainerLanding>
      <Footer />
    </>
  );
};

export default Landing;
