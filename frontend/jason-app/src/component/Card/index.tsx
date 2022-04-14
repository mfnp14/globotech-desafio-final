import { useHistory } from "react-router-dom";
import yellowbg from "../../assets/yellow_bg.jpg";
import GenericButton from "../Button";

import {
  Container,
  CardContainer,
  CardTop,
  Content,
  CardBottom,
  CardLogo,
} from "./style";

export interface InfoData {
  id?: number;
  name?: string;
  address?: string;
  description?: string;
  logoUrl?: string;
  owner?: string;
  price?: number;
  extras?: string[];
}

interface InfoProps {
  data: InfoData[];
}

const Card: React.FC<InfoProps> = ({ data }) => {
  const history = useHistory();

<<<<<<< HEAD
  const goToPage = () => {
    history.push(`/menu/${id}`);
    console.log(id);
  };
=======
  // const goToPage = (data) => {
  //   history.push(`/menu/${data.id}`);
  //   console.log(data.id);
  // };
>>>>>>> master

  return (
    <Container>
      {data.map((item) => {
        return (
          <CardContainer key={item.id}>
            <Content>
              <img src={yellowbg} alt="background" />
              <CardTop>
                <h1> {item.name} </h1>
              </CardTop>
              <CardLogo>
                <img src={item.logoUrl} alt="logo" />
              </CardLogo>
              <CardBottom>
                <p>{item.description}</p>
                <p>{item.address}</p>
                <p>{item.owner}</p>
                <GenericButton
                  type="button"
                  label={"ver cardápio"}
                  secondary
<<<<<<< HEAD
                  onclick={() => goToPage()}
=======
                  // onclick={() => goToPage(data.id)}
>>>>>>> master
                />
              </CardBottom>
            </Content>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default Card;
function id(id: any): void {
  throw new Error("Function not implemented.");
}
