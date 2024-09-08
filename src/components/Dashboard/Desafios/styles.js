import styled from "styled-components";

export const Grid = styled.div`
  grid-area: Desafios;
  margin: auto;
`;

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 33em;
  height: 16em;
  border-color: white;
  border-style: solid;
  border-width: 0.5px;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 4vw;
`;

export const Title = styled.h3`
  color: #6b00d6;
  font-weight: 500;
  text-shadow: 0px 0px 0.2em #6b00d6;
  font-size: 1.8em;
  margin: 0;
`;

export const ChallengeText = styled.h4`
  font-size: 1.5em;
  margin: 0;
  font-weight: 500;
  margin-left: 0.8vw;
`;

export const ChallengesContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 15em;
`;

export const CoinText = styled.h5`
  font-size: 1.1em;
  margin: 0;
  margin-left: 0.8vw;
  font-weight: 400;
  opacity: 0.5;
`;

export const ProgressText = styled.span`
  color: white;
  font-size: 1.2em;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  position: relative;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  scrollbar-color: #6b00d6 transparent;
  scrollbar-width: auto;
`;

export const ScrollContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.3s ease;
  scroll-snap-type: x mandatory;
  width: 100%;
`;
