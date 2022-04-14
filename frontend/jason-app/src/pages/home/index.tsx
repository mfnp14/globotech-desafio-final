import { useEffect, useState } from "react";
import api from "../../services/api";
import Card from "../../component/Card";
import {
  ButtonPrimary,
  Container,
  HomeContent,
  HomeHeader,
  HomeTitle,
  Subtitle,
} from "./style";

const Home = () => {
  const [restauranteData, setRestauranteData] = useState([]);

  useEffect(() => {
    api
      .get(`/restaurant`)
      .then((response) => {
        setRestauranteData(response.data);
      });
  }, []);

  return (
    <Container>
      <HomeHeader>
        <HomeTitle>Bem Vindo</HomeTitle>
        <p>
          Agora você pode cadastrar restaurantes e produtos e adicionar ao seus
          favoritos
        </p>
        <ButtonPrimary>Começar</ButtonPrimary>
      </HomeHeader>

      <HomeContent>
        <Subtitle>Meus restaurantes</Subtitle>
        <Card data={restauranteData} />
      </HomeContent>
    </Container>
  );
};

export default Home;
