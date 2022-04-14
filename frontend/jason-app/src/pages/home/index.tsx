import { useEffect, useState } from "react";
import api from "../../services/api";
import Card, { InfoData } from "../../component/Card";
import {
  ButtonPrimary,
  Container,
  HomeContent,
  HomeHeader,
  HomeTitle,
  Subtitle,
} from "./style";

const Home = () => {
  const restaurants: InfoData[] = [
    {
      name: "Doce Sabor Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/french-restaurant-logo-design-template-2f7896b33ab323cbc1baf240f643e82b_screen.jpg?ts=1597302426",
    },
    {
      name: "Da base Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
    {
      name: "Da base Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
    {
      name: "Da base Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
    {
      name: "Da base Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
    {
      name: "Da base Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
    {
      name: "Da base Restaurante",
      description: "Et do magna nulla amet cillum.",
      address: "Rua dois, nº 0",
      owner: "José da Silva",
      logo: "https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F28%2F19%2FLogo-268745_141343_195610032_635995249.jpg",
    },
  ];

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
