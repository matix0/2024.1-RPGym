import React from "react";
import { InputIdade } from "./styles";

function inputIdade(props) {
  const opcoesIdade = [];

 // Gerar as opções de 5 a 99
 for (let i = 5; i <= 99; i++)
  opcoesIdade.push(i);

  return (
    <InputIdade as="select" placeholder={props.placeholder} onChange={props.onChange}>
      <option value="">Idade</option>
      {opcoesIdade.map((idade) => (
        <option key={idade} value="idade">
          {idade}
        </option>
      ))}
    </InputIdade>
  )
}

export default inputIdade;
