import React from 'react';
import { Container, Title, Subtitle, SubSubtitle, DivForms, DivDescricao, DivSubdescricao } from './styles';
import { Input } from '../inputText/styles';

function ModalLogin() {
  return (
    <Container>
        <DivForms>
            <DivDescricao>
                <Title>RPGym</Title>
                <DivSubdescricao>
                    <Subtitle>Bem-vindo!</Subtitle>
                    <SubSubtitle>Faça login para iniciar sua aventura!</SubSubtitle>
                </DivSubdescricao>
            </DivDescricao>
            <Input />
            <Input />
        </DivForms>
    </Container>
  )
}

export default ModalLogin;