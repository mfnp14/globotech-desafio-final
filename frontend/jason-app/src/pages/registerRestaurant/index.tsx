import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";

type Restaurante = {
  id: number;
  name: string;
  address: string;
  description: string;
  logoUrl: string;
  manager: string;
};

const Cadastro = () => {
  const { register, handleSubmit } = useForm<Restaurante>();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input ref={register} id="name" type="text" />
          </div>
          <div>
            <label htmlFor="address">Endereço</label>
            <input ref={register} id="address"></input>
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <input ref={register} id="description"></input>
          </div>
          <div>
            <label htmlFor="logoUrl">Imagem</label>
            <input ref={register} id="logoUrl"></input>
          </div>
          <div>
            <label htmlFor="manager">Responsável</label>
            <input ref={register} id="manager"></input>
          </div>
        </form>
      </div>
    </>
  );
};
export default Cadastro;
