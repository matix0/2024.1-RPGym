import React, { useState } from "react";
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
import InputText from "../inputText";
import InputIdade from "../inputIdade/index.js";

function ModalRegister() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [apelido, setApelido] = useState("");
  const [idade, setIdade] = useState("");

  // Função para capturar o apelido com apenas a primeira palavra
  const handleApelidoChange = (e) => {
    const uniqueWord = e.target.value.split(" ")[0];
    setApelido(uniqueWord);
  };

  // Função de cadastro (simples validação)
  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");

      //Trabalha a integração dentro daqui

      return;
    }
  }

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Faça o cadastro e começe seu legado!</Subtitle>
        </DivDescricao>
        <InputText type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputText placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
        <InputText placeholder="Confirme a sua senha" type="password" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
        <DivFormsBaixo>
          <InputText
            placeholder="Apelido"
            value={apelido}
            onChange={handleApelidoChange}
          />
          <InputIdade placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
        </DivFormsBaixo>
        <Cadastrese
          onClick={handleCadastro}
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
