import { Container, Content, MenuList, Title } from "./styles";

const Menu = () => {
  return (
    <Container>
      <Title>Menu</Title>
      <Content>
        <MenuList>
          <li>name</li>
          <li>image</li>
          <li>description</li>
          <li>price</li>
        </MenuList>
      </Content>
    </Container>
  );
};

export default Menu;
