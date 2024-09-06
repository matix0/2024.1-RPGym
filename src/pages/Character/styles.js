import styled from "styled-components";
import BackgroundLogin from "../../assets/images/BackgroundLogin.png";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundLogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Posicao = styled.div`
  display: flex;
  position: relative;
  left: 7%;
`;
