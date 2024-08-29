import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 40vw;
    height: 80vh;
    background-color: #ffffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Title = styled.h1`
    font-family: 'Poppins', inherit;
    font-size: 4vmax;
    margin-bottom: 1vh;
`;

export const DivForms = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivDescricao = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DivSubdescricao = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Subtitle = styled.p`
    font-family: 'Poppins', inherit;
    margin-bottom: -0.7vh;
    font-weight: bold;
    font-size: 1vmax;
`;

export const SubSubtitle = styled.p`
    font-family: 'Poppins', inherit;
    margin-bottom: 1vh;
    font-size: 1vmax;
`;