import React from "react";

import * as S from "./styles";
import { ButtonComponent } from "components";

const Pedidos = () => {
  return (
    <S.Section>
      <h1>Registre sua reclamação</h1>
      <form action="" method="post">
        <div>
          <label htmlFor="nome">Nome: </label>
          <input type="text" name="nome" id="nome" required />
        </div>
        <div>
          <label htmlFor="problem">Problema: </label>
          <input type="text" name="problema" id="problem" required />
        </div>
        <div>
          <label htmlFor="desc">Descrição: </label>
          <textarea name="descricao" id="desc"></textarea>
        </div>
        <p>
          <ButtonComponent>Enviar</ButtonComponent>
        </p>
      </form>
    </S.Section>
  );
};

export default Pedidos;
