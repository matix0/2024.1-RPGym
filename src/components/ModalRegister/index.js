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
  InputText1,
} from "./styles";
import userService from "../../services/userService.js";
import InputText from "../inputText";

function ModalRegister() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [error, setError] = useState(null); // Estado para mensagens de erro
  const [successMessage, setSuccessMessage] = useState(null); // Estado para mensagens de sucesso

  const handleCadastro = async () => {
    console.log(nome, email, senha, confirmarSenha, idade);
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const userData = {
      name: nome,
      email: email,
      password: senha,
      age: idade,
      height: 0, // Defina um valor padrão ou ajuste conforme necessário
      weight: 0, // Defina um valor padrão ou ajuste conforme necessário
    };

    try {
      const response = await userService.createUser(userData);
      const userId = await userService.getUserByEmail(email);
      // Armazena o _id e outros dados no localStorage
      localStorage.setItem("userId", userId.id);
      localStorage.setItem("userData", JSON.stringify(userData));
      setSuccessMessage("Cadastro realizado com sucesso!");
      setError(null); // Limpa a mensagem de erro
      // Redireciona para a página de personagem
      window.location.href = "/character";
    } catch (error) {
      setError("Erro ao criar usuário. Tente novamente.");
      setSuccessMessage(null); // Limpa a mensagem de sucesso
    }
  };

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <Subtitle>Faça o cadastro e começe seu legado!</Subtitle>
        </DivDescricao>
        <InputText
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <InputText
          placeholder="Confirme a sua senha"
          type="password"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <DivFormsBaixo>
          <InputText
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputText1
            placeholder="Idade"
            value={idade}
            type="number"
            onChange={(e) => setIdade(e.target.value)}
          />
        </DivFormsBaixo>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        <Cadastrese onClick={handleCadastro}>Cadastre-se</Cadastrese>
        <SubSubSubSubtitle>
          Já tem uma conta? <a href="/">Faça Log in</a>
        </SubSubSubSubtitle>
      </DivForms>
    </Container>
  );
}

export default ModalRegister;
