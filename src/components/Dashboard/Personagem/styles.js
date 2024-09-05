import styled from "styled-components";
import MalePerson from "../../../assets/images/Personagens/MalePerson.png"

export const Box = styled.div`
    display: flex;
    background-color:#8000FF;
    width: 31em;
    height: 15em;
    border-radius: 10px;
`
export const BoxInfos = styled.div`
    display: flex;
    width: 30em;
    height: 15em;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
`

export const BoxInfoPerson = styled.div`
    display: flex;
    flex-direction: row;
    width: 30em;
    height: 15em;
    border-radius: 10px;
    align-items: center;
    margin-left: -4.4em;
`

export const ApelidoBox = styled.div`
    display: flex;
    border-color: black;
    position: relative;
    background-color: #8000FF;
    border-radius: 10px;
    border-color: white;
    border-width: 4em;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 1.5em;
    top: -3em;
    left: 4em;
`

export const IMC = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-bottom: -1.5em;
`

export const Timc = styled.h1`
    color: white;
    margin-bottom: -0.6em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const Vimc = styled.h3`
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const Metricas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TPeso = styled.h3`
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: -0.6em;
`

export const Peso = styled.h4`
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const TAltura = styled.h3`
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    margin-bottom: -0.6em;
`

export const Altura = styled.h4`
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const PesoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const AlturaBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`

export const BoxPerson = styled.div`
    display: flex;
    position: relative;
    background-image: url(${MalePerson});
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 20em;
    height: 15em;
    bottom: 1em;
`
