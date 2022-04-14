import { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  Content,
  ImageContainer,
  MenuItem,
  MenuList,
  MenuPrice,
  Title,
} from "./styles";

const Menu = () => {
  const [menuData, setMenuData] = useState([
    {
      id: 1,
      name: "Picanha defumada",
      idRestaurant: 1,
      urlImage:
        "https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur aliquet odio nec gravida. Fusce vitae ornare massa.",
      price: 20.5,
      extras: ["Alface", "Bacon", "Cebola"],
    },
  ]);

  // useEffect(() => {
  //   api.get(`/products`).then((response: { data: any }) => {
  //     setMenuData(response.data);
  //   });
  // }, []);

  return (
    <Container>
      <Title>Menu</Title>
      {menuData.map((item) => {
        return (
          <Content key={item.id}>
            <ImageContainer>
              <img src={item.urlImage} alt={item.name} />
            </ImageContainer>
            <MenuList>
              <MenuItem>{item.name}</MenuItem>
              <MenuItem>{item.description}</MenuItem>
              <MenuItem>
                Extras:{" "}
                {item.extras.map((extra) => {
                  return <>{extra} </>;
                })}
              </MenuItem>
            </MenuList>
            <MenuPrice>R${item.price}</MenuPrice>
          </Content>
        );
      })}
    </Container>
  );
};

export default Menu;
