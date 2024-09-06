import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5vw;
  min-width: 36vw;
  min-height: 68vh;
  background-color: #ffffff;
  box-shadow: 0px 0px 2vw 0.2vw rgba(0, 0, 0, 0.75);
`;

export const Title = styled.h1`
  font-family: "Poppins", inherit;
  font-size: 2.8vw;
  margin-bottom: 0.1vh;
  font-weight: bold;
`;

export const Butao = styled.button`
  border-radius: 0.5vw;
  background: linear-gradient(
    90deg,
    rgba(0, 101, 253, 1) 0%,
    rgba(188, 0, 254, 1) 100%
  );
  font-family: "Poppins";
  font-weight: bold;
  font-size: 1vw;
  color: white;
  border: none;
  width: 27vw;
  height: 6vh;
  cursor: pointer;
  margin-top: 4.5vw;
  margin-bottom: 2.5vw;
`;

export const DivForms = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  margin: 1vw;
`;

export const DivDescricao = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivFormsBaixo = styled.div`
  display: flex;
`;

export const Subtitle = styled.p`
  font-family: "Poppins", inherit;
  font-weight: bold;
  font-size: 1.2vw;
`;

export const ImagemWrapper = styled.div`
  position: relative;
  width: 100%; /* Ajuste conforme necessário */
  max-width: 100%; /* Ou o tamanho desejado */
  img {
    width: 100%;
    height: auto;
  }
`;

export const PersonagemDiv = styled.div`
  position: absolute;
  width: 50%;
  height: 98%;
  background: rgba(0, 0, 0, 0.3); /* Somente para demonstrar */
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 1.5vw;
  ${({ selected }) => selected && "background: rgba(255, 255, 255, 0.2);"}
  &:hover {
    background: rgba(255, 255, 255, 0.5); /* Efeito de hover */
    border-radius: 1.5vw;
  }
`;
