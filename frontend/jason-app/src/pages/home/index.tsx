import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
import GenericButton from "../../component/Button";

const Home = () => {
  const [restauranteData, setRestauranteData] = useState([]);
  const history = useHistory();

  const goToPage = (page: any) => {
    history.push(`/${page}`);
  };

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
        <GenericButton secondary onclick={() => goToPage("register")} label={"Comerçar"} />
      </HomeHeader>

      <HomeContent>
        <Subtitle>Meus restaurantes</Subtitle>
        <Card data={restauranteData} />
      </HomeContent>
    </Container>
  );
};

export default Home;
