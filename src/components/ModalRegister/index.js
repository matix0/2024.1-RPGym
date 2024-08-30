import React from "react";
import {
  Container,
  Title,
  Subtitle,
  SubSubSubSubtitle,
  DivForms,
  DivDescricao,
  Cadastrese,
  DivFormsBaixo,
} from "./styles";
import { Input } from "../inputText/styles";
import { InputIdade } from "../inputIdade/styles";

function ModalRegister() {
  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Faça o cadastro e começe seu legado!</Subtitle>
        </DivDescricao>
        <Input />
        <Input />
        <Input />
        <DivFormsBaixo>
          <Input />
          <InputIdade />
        </DivFormsBaixo>
        <Cadastrese
          onClick={() => {
            window.open("/dashboard", "_blank");
          }}
        >
          Cadastre-se
        </Cadastrese>
        <SubSubSubSubtitle>
          Já tem uma conta? <a href="/">Faça Log in</a>
        </SubSubSubSubtitle>
      </DivForms>
    </Container>
  );
}

export default ModalRegister;
