import React from "react";
import yellowbg from "../../assets/yellow_bg.jpg";

import {
  Container,
  CardContainer,
  CardTop,
  Content,
  CardBottom,
  CardLogo,
} from "./style";

export interface InfoData {
  name?: string;
  address?: string;
  description?: string;
  logo?: string;
  owner?: string;
  price?: number;
  extras?: string[];
}

interface InfoProps {
  data: InfoData[];
}

const Card: React.FC<InfoProps> = ({ data }: InfoProps) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <CardContainer>
            <Content>
              <img src={yellowbg} alt="background" />
              <CardTop>
                <h1> {item.name} </h1>
              </CardTop>
              <CardLogo>
                <img src={item.logo} alt="logo" />
              </CardLogo>
              <CardBottom>
                <p>Nulla deserunt proident eu ipsum nisi proident ad.</p>
                <button>ver cardápio</button>
              </CardBottom>
            </Content>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default Card;
