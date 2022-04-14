import Reac, { useEffect, useState } from "react";
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
  logo?: string;
  owner?: string;
  price?: number;
  extras?: string[];
}

interface InfoProps {
  data: InfoData[];
}

const Card: React.FC<InfoProps> = ({ data }) => {
  const history = useHistory();

  const goToPage = () => {
    history.push(`/menu/${id}`);
    console.log(id);
  };

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
                <img src={item.logo} alt="logo" />
              </CardLogo>
              <CardBottom>
                <p>{item.description}</p>
                <p>{item.address}</p>
                <p>{item.owner}</p>
                <GenericButton
                  type="button"
                  label={"ver cardápio"}
                  secondary
                  onclick={() => goToPage()}
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
