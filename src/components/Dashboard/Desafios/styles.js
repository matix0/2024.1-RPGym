import styled from "styled-components";

export const Grid = styled.div`
  grid-area: Desafios;
  margin: auto;
`;

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 31em;
  height: 15em;
  position: realtive;
  border-color: white;
  border-style: solid;
  border-width: 0.5px;
  border-radius: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  margin-left: 2em;
`;

export const Title = styled.h3`
  margin-bottom: -1em;
`;

export const SubTitle = styled.h4`
  font-weight: 400;
  margin-bottom: 3em;
  opacity: 75%;
`;
