import { useHistory } from "react-router-dom";
import api from "../../services/api";
import GenericInput from "../../component/Input";
import GenericButton from "../../component/Button";
import React, { useState } from "react";

const RegisterProduct = () => {
  const [name, setName] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>();

  const navigation = useHistory();
  const history = useHistory();

  const goToPage = (page: any) => {
    history.push(`/${page}`);
  };

  const storageData = async (e: any) => {
    console.log(e);
    try {
      e.preventDefault();
      const { name, imageUrl, description, price } = e.target.elements;
      const productData: any = {
        name: name,
        description: description,
        imageUrl: imageUrl,
        price: price,
      };

      const requestApi = await api.post("product", productData);
      console.log(productData);
    } catch (err) {
      console.log(err);
    }
  };

  //   const convertStringToNumber = (value: string) => {
  //     return parseFloat({price.value});
  //   };

  console.log(name, description, imageUrl, price);
  return (
    <div className="container">
      <div className="logo">
        <h1>JSON LOGO</h1>
      </div>
      <div className="containerForm ">
        <div className="cardForm">
          <h1>Registre-se</h1>
          <form onSubmit={storageData}>
            <GenericInput
              value={name}
              type="text"
              placeholder="Nome do produto"
              onChange={(e) => setName(e.currentTarget.value)}
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
            <GenericInput
              value={imageUrl}
              type="text"
              placeholder="Nome do restaurante"
              onChange={(e) => setImageUrl(e.currentTarget.value)}
            />
            <GenericButton
              secondary
              type="submit"
              //onclick={() => goToPage("menu/")}
              label={"Cadastrar produto"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterProduct;
