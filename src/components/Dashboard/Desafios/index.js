import React, { useState, useRef } from "react";
import {
  Caixa,
  DescriptionBox,
  Title,
  ChallengeText,
  Grid,
  CoinText,
  ChallengesContainer,
  ScrollContainer,
  ScrollContent,
} from "./styles";

const ProgressCircle = ({ valorAtual, valorTotal }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;

  const progressPercent = (valorAtual / valorTotal) * 100;
  const strokeDashoffset = circumference * (1 - progressPercent / 100);

  return (
    <div className="progress-circle">
      <svg width="80" height="80">
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#333"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r={radius}
          stroke="#6b00d6"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 40 40)"
        />
      </svg>
    </div>
  );
};

const ChallengeContent = ({ title, coins, valorAtual, valorTotal }) => (
  <DescriptionBox>
    <div style={{ display: "flex", alignItems: "center" }}>
      <ProgressCircle valorAtual={valorAtual} valorTotal={valorTotal} />
      <div>
        <ChallengeText>{title}</ChallengeText>
        <CoinText>+{coins} Moedas</CoinText>
      </div>
    </div>
  </DescriptionBox>
);

const Desafios = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const scrollRef = useRef(null);

  const desafios = [
    {
      title: "2 Cardios Completos",
      coins: 15,
      valorAtual: 2,
      valorTotal: 10,
    },
    {
      title: "1 Corrida Completa",
      coins: 10,
      valorAtual: 1,
      valorTotal: 5,
    },
    {
      title: "3 Caminhadas Concluídas",
      coins: 20,
      valorAtual: 3,
      valorTotal: 10,
    },
    {
      title: "4 Sessões de Yoga",
      coins: 25,
      valorAtual: 4,
      valorTotal: 10,
    },
    {
      title: "2 Treinos de Força",
      coins: 12,
      valorAtual: 2,
      valorTotal: 6,
    },
    {
      title: "5 Desafios Extras",
      coins: 30,
      valorAtual: 0,
      valorTotal: 5,
    },
  ];

  const handleScroll = (e) => {
    const { scrollLeft, clientWidth, scrollWidth } = e.target;
    const challengeIndex = Math.round(
      (scrollLeft / (scrollWidth - clientWidth)) * (desafios.length - 1)
    );
    setCurrentChallenge(challengeIndex);
  };

  return (
    <Grid>
      <Caixa>
        <Title>Desafios em Andamento</Title>
        <ChallengesContainer>
          <ScrollContainer ref={scrollRef} onScroll={handleScroll}>
            <ScrollContent style={{ width: `${desafios.length * 100}%` }}>
              {desafios.map((desafio, index) => (
                <ChallengeContent key={index} {...desafio} />
              ))}
            </ScrollContent>
          </ScrollContainer>
        </ChallengesContainer>
      </Caixa>
    </Grid>
  );
};

export default Desafios;
