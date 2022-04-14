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
  const [MenuData, setMenuData] = useState([]);

  useEffect(() => {
    api.get(`/products`).then((response: { data: any }) => {
      setMenuData(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>Menu</Title>

      <Content>
        <ImageContainer>image</ImageContainer>
        <MenuList>
          <MenuItem>name</MenuItem>
          <MenuItem>description</MenuItem>
        </MenuList>
        <MenuPrice>R$</MenuPrice>
      </Content>
    </Container>
  );
};

export default Menu;
