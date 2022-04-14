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
                <p style={{ height: '50px'}}>{item.description}</p>
                <p style={{ height: '20px', fontStyle:'italic'}}>{item.address}</p>
                <p>{item.owner}</p>
                <GenericButton
                  type="button"
                  label={"ver cardápio"}
                  secondary
                  onclick={() => history.push(`/menu/${item.id}`)}
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
