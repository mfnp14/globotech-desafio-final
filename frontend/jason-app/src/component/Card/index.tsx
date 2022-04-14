import React from "react";
import { Link } from "react-router-dom";
import yellowbg from "../../assets/yellow_bg.jpg";
import GenericButton from "../Button";
import { showModal } from "../Modal";

import {
  Container,
  CardContainer,
  CardTop,
  Content,
  CardBottom,
  CardLogo,
  ButtonPrimary,
} from "./style";

export interface InfoData {
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

const Card: React.FC<InfoProps> = ({ data }: InfoProps) => {
  return (
    <Container>
      {console.log(data)}
      {data.map((item) => {
        return (
          <CardContainer>
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
                <Link to={"/"}>
                  <GenericButton label={"Ver cardápio"} />
                </Link>
              </CardBottom>
            </Content>
          </CardContainer>
        );
      })}
    </Container>
  );
};

export default Card;
