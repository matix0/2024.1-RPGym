import React, { useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  SubSubtitle,
  SubSubSubtitle,
  SubSubSubSubtitle,
  DivForms,
  DivDescricao,
  DivSubdescricao,
  Login,
} from "./styles";
import InputText from "../inputText/index.js";
import userService from "../../services/userService"; // Certifique-se de que este caminho está correto
import { useNavigate } from "react-router-dom"; // Atualizado para a versão 6 do React Router

function ModalLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Usando o hook de navegação da versão 6

  const handleLogin = async () => {
    console.log("Email:", email); // Verifica se o email está sendo capturado
    console.log("Senha:", senha); // Verifica se a senha está sendo capturada

    if (!email || !senha) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await userService.login(email, senha);

      if (response && response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("id", response.id);
        setError(null); // Limpa a mensagem de erro
        navigate("/dashboard"); // Redireciona para o dashboard
      } else {
        setError("Email ou senha incorretos.");
      }
    } catch (error) {
      setError("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <Container>
      <DivForms>
        <DivDescricao>
          <Title>RPGym</Title>
          <DivSubdescricao>
            <Subtitle>Bem-vindo de volta</Subtitle>
            <SubSubtitle>Faça login para iniciar sua aventura!</SubSubtitle>
          </DivSubdescricao>
        </DivDescricao>
        <InputText
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado de email
        />
        <InputText
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} // Atualiza o estado de senha
        />
        <SubSubSubtitle>Esqueceu sua senha?</SubSubSubtitle>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Login onClick={handleLogin}>Log In</Login>

        <SubSubSubSubtitle>
          Não tem uma conta? <a href="/Register">Cadastre-se</a>
        </SubSubSubSubtitle>
      </DivForms>
    </Container>
  );
}

export default ModalLogin;
