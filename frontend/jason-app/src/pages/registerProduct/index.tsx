import { useHistory } from "react-router-dom";
import api from "../../services/api";
import GenericInput from "../../component/Input";
import GenericButton from "../../component/Button";
import React, { useState } from "react";
import IconLogo from "../../component/IconLogo";
import { Container, Form } from "./styles";

const RegisterProduct = () => {
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [idRestaurant, setIdRestaurant] = useState<number>();
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();

  const navigation = useHistory();
  const history = useHistory();

  const goToPage = (page: any) => {
    history.push(`/${page}`);
  };

  const storageData = async (e: any) => {
    try {
      e.preventDefault();
      const productData: any = {
        idRestaurant: idRestaurant,
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price,
      };

      console.log(productData);
      const requestApi = await api.post("product", productData);
      await goToPage("home")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <IconLogo width={300} height={300} />
      <Form onSubmit={storageData}>
        <div className="cardForm">
          <h1>Cadastre o produto</h1>
            <GenericInput
              value={idRestaurant}
              type="number"
              placeholder="ID do restaurante"
              onChange={(e) => setIdRestaurant(+e.target.value)}
            />
              <GenericInput
                value={name}
                type="text"
                placeholder="Nome do produto"
                onChange={(e) => setName(e.currentTarget.value)}
              />
             <GenericInput
              value={imageUrl}
              type="text"
              placeholder="http://imagem-do-prato.com"
              onChange={(e) => setImageUrl(e.currentTarget.value)}
            />
            <GenericInput
              value={description}
              type="text"
              placeholder="Descrição do produto"
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
            <GenericInput
              value={price}
              type="number"
              placeholder="Valor do prato"
              onChange={(e) => setPrice(+e.target.value)}
            />
            <GenericButton
              secondary
              type="submit"
              label={"Cadastrar produto"}
            />
        </div>
      </Form>
    </Container>
  );
};

export default RegisterProduct;
