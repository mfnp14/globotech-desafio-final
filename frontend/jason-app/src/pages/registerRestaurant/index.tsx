import { useHistory } from "react-router-dom";
import api from "../../services/api";
import GenericInput from "../../component/Input";
import GenericButton from "../../component/Button";
import React, { useState } from "react";
import { Container, Form } from "./style";
import IconLogo from "../../component/IconLogo";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [manager, setManager] = useState<string>("");

  const navigation = useHistory();
  const history = useHistory();

  const goToPage = (page: any) => {
    history.push(`/${page}`);
  };

  const storageData = async (e: any) => {
    console.log(e);
    try {
      e.preventDefault();
      const { name, address, logoUrl, description, manager } =
        e.target.elements;
      const restaurantData: any = {
        name: name,
        address: address,
        description: description,
        logoUrl: logoUrl,
        manager: manager,
      };

      const requestApi = await api.post("restaurant", restaurantData);
      console.log(restaurantData);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(name, address, description, logoUrl, manager);
  return (
    <Container>
      <IconLogo width={300} height={300} />
      <Form>
        <div className="cardForm">
          <h1>Cadastre o restaurante</h1>
          <form onSubmit={storageData}>
            <GenericInput
              value={name}
              type="text"
              placeholder="Nome do restaurante"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <GenericInput
              value={address}
              type="text"
              placeholder="Endereço do restaurante"
              onChange={(e) => setAddress(e.currentTarget.value)}
            />
            <GenericInput
              value={description}
              type="text"
              placeholder="Descrição do restaurante"
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
            <GenericInput
              value={manager}
              type="text"
              placeholder="Responsável pelo restaurante"
              onChange={(e) => setManager(e.currentTarget.value)}
            />
            <GenericInput
              value={logoUrl}
              type="text"
              placeholder="http://minha-logo.com"
              onChange={(e) => setLogoUrl(e.currentTarget.value)}
            />
            <GenericButton
              secondary
              type="submit"
              onclick={() => goToPage("home")}
              label={"Cadastrar restaurante"}
            />
          </form>
        </div>
      </Form>
    </Container>
  );
};

export default Register;
